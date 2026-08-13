import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2, Download } from 'lucide-react';
import { navItems, profile } from './data';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < 100) {
        setActive('home');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -45% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-6 pt-2">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between transition-all duration-500 rounded-2xl ${
          scrolled
            ? theme === 'dark'
              ? 'bg-slate-950/85 backdrop-blur-2xl border border-sky-500/20 shadow-2xl shadow-sky-500/10'
              : 'bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-xl shadow-black/5'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 group"
          aria-label="Go to home"
        >
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300">
            <Code2 size={20} />
          </span>
          <div className="flex flex-col text-left">
            <span className={`font-display font-extrabold text-base sm:text-lg leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Vijay <span className="gradient-text">Kumar E</span>
            </span>
            <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              .NET Developer
            </span>
          </div>
        </button>

        <div className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-2xl ${theme === 'dark' ? 'bg-slate-900/80 border border-slate-800/80' : 'bg-slate-100/80 border border-slate-200/80'}`}>
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-emerald-400/20 text-sky-400 border border-sky-500/30 shadow-md shadow-sky-500/10 scale-105'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/80 text-amber-400 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-sm'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white text-xs font-extrabold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Download size={15} /> Resume
          </a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center ${
              theme === 'dark' ? 'text-white bg-slate-900 border border-slate-800' : 'text-slate-900 bg-white border border-slate-200'
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`md:hidden mt-2 p-4 rounded-2xl shadow-2xl animate-fadeIn ${
            theme === 'dark' ? 'bg-slate-950/95 border border-slate-800 backdrop-blur-2xl' : 'bg-white/95 border border-slate-200 backdrop-blur-2xl'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500/20 to-cyan-400/20 text-sky-400 border border-sky-500/30'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:bg-slate-900'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800 flex gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white text-xs font-bold shadow-md shadow-sky-500/20"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

