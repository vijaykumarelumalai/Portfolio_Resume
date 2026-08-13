import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, navItems } from './data';
import { useTheme } from './ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className={`relative py-12 ${theme === 'dark' ? 'bg-slate-950 border-t border-slate-800' : 'bg-white border-t border-slate-200'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white">
                <Code2 size={18} />
              </span>
              <span className={theme === 'dark' ? 'text-white font-extrabold' : 'text-slate-900 font-extrabold'}>
                Vijay <span className="gradient-text">Kumar E</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Full Stack Developer building enterprise-grade web applications with .NET Core and SQL Server.
            </p>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className={`text-sm text-left transition-colors ${
                    theme === 'dark' ? 'text-slate-400 hover:text-sky-400' : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-semibold text-sm mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Vijay Kumar's GitHub"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Vijay Kumar's LinkedIn"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email to Vijay Kumar"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-sky-500 to-cyan-400 text-white hover:opacity-95 transition-opacity"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t ${
            theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <p className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
            © {new Date().getFullYear()} Vijay Kumar E. All rights reserved.
          </p>
          <button
            onClick={() => go('home')}
            aria-label="Back to top of page"
            className={`flex items-center gap-2 text-xs font-medium transition-colors ${
              theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

