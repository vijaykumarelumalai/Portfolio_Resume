import { useEffect, useState } from 'react';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  FolderGit2,
  Clock,
  Award,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { profile } from './data';
import { useTheme } from './ThemeContext';

const roles = [
  '.NET Developer',
  'Full Stack Developer',
  'SQL Server Specialist',
  'Application Developer',
];

const stats = [
  { num: '6+', label: 'Projects Delivered', icon: <FolderGit2 size={16} className="text-sky-400" /> },
  { num: '10+', label: 'Months Experience', icon: <Clock size={16} className="text-cyan-400" /> },
  { num: '10', label: 'Certifications', icon: <Award size={16} className="text-emerald-400" /> },
];

export default function Hero() {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 scroll-mt-24 ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="absolute inset-0 hero-grid-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="reveal-left">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 ${
              theme === 'dark'
                ? 'bg-slate-900/80 text-sky-300 border border-sky-500/30 shadow-lg shadow-sky-500/10 backdrop-blur-md'
                : 'bg-white text-sky-700 border border-sky-200 shadow-sm'
            }`}
          >
            <Sparkles size={14} className="text-sky-400 animate-pulse" />
            Available for High-Impact Opportunities
          </div>

          <h1
            className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hi, I'm <span className="gradient-text">Vijay Kumar E</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              I'm a{' '}
            </span>
            <span className="gradient-text text-2xl sm:text-3xl lg:text-4xl font-bold inline-block min-h-[1.5em] align-middle">
              {text}
              <span className="cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg max-w-xl leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              View Projects <ArrowDown size={16} />
            </button>
            <a
              href={profile.resumeUrl}
              download
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 text-white border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800/80'
                  : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail size={18} /> Email
            </a>
            <span
              className={`flex items-center gap-2 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <MapPin size={18} /> {profile.location}
            </span>
            <span
              className={`flex items-center gap-2 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <Phone size={18} /> {profile.phone}
            </span>
          </div>

          {/* Mobile/Tablet Stats Grid */}
          <div className="grid grid-cols-3 gap-3.5 mt-8 lg:hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-2xl p-3.5 text-center transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border border-slate-800'
                    : 'bg-white border border-slate-200'
                }`}
              >
                <div className="w-7 h-7 mx-auto mb-1.5 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60">
                  {s.icon}
                </div>
                <div className="font-display font-extrabold text-xl gradient-text tracking-tight">
                  {s.num}
                </div>
                <div className={`text-[11px] font-medium mt-0.5 leading-tight ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Interactive Code window */}
        <div className="reveal-right hidden lg:block relative">
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-sky-500/30 via-cyan-400/30 to-emerald-400/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse pointer-events-none" />

          <div className="absolute -top-4 -right-4 z-20 float-badge hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/90 text-sky-300 border border-sky-500/40 shadow-xl shadow-sky-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            .NET Core &amp; Blazor
          </div>

          <div className="absolute -bottom-3 -left-5 z-20 float-badge-slow hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/40 shadow-xl shadow-cyan-500/20 backdrop-blur-md">
            <CheckCircle2 size={14} className="text-cyan-400" />
            SQL Server Specialist
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-500 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border border-slate-700/80 shadow-sky-500/5'
                : 'bg-slate-900 border border-slate-800 text-white'
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-1.5 ml-3 px-2.5 py-0.5 rounded-md bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/50">
                  <Terminal size={12} className="text-sky-400" />
                  developer.ts
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>
            </div>

            <pre className="p-5 sm:p-6 text-sm font-mono leading-relaxed overflow-x-auto text-slate-200">
              <code>
                <span className="text-purple-400 font-semibold">interface </span>
                <span className="text-amber-300 font-semibold">Developer </span>
                <span className="text-slate-400">{'{'}</span>
                {'\n  '}
                <span className="text-sky-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">string</span>
                <span className="text-slate-400">;</span>
                {'\n  '}
                <span className="text-sky-300">role</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">string</span>
                <span className="text-slate-400">;</span>
                {'\n  '}
                <span className="text-sky-300">experience</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">string</span>
                <span className="text-slate-400">;</span>
                {'\n  '}
                <span className="text-sky-300">stack</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">string</span>
                <span className="text-slate-400">[];</span>
                {'\n  '}
                <span className="text-sky-300">applications</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">string</span>
                <span className="text-slate-400">[];</span>
                {'\n  '}
                <span className="text-sky-300">available</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">boolean</span>
                <span className="text-slate-400">;</span>
                {'\n'}
                <span className="text-slate-400">{'}'}</span>
                {'\n\n'}
                <span className="text-purple-400 font-semibold">const </span>
                <span className="text-sky-400 font-bold">vijay</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300 font-semibold">Developer </span>
                <span className="text-slate-400">= {'{'}</span>
                {'\n  '}
                <span className="text-sky-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-400">"Vijay Kumar E"</span>
                <span className="text-slate-400">,</span>
                {'\n  '}
                <span className="text-sky-300">role</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-400">".NET &amp; Full Stack Developer"</span>
                <span className="text-slate-400">,</span>
                {'\n  '}
                <span className="text-sky-300">experience</span>
                <span className="text-slate-400">: </span>
                <span className="text-emerald-400">"10+ Months"</span>
                <span className="text-slate-400">,</span>
                {'\n  '}
                <span className="text-sky-300">stack</span>
                <span className="text-slate-400">: [</span>
                <span className="text-emerald-400">".NET"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400">"C#"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400">"Blazor"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400">"SQL Server"</span>
                <span className="text-slate-400">],</span>
                {'\n  '}
                <span className="text-sky-300">applications</span>
                <span className="text-slate-400">: [</span>
                <span className="text-emerald-400">"AEGIS Platform"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400">"Enterprise CRM"</span>
                <span className="text-slate-400">],</span>
                {'\n  '}
                <span className="text-sky-300">available</span>
                <span className="text-slate-400">: </span>
                <span className="text-orange-400 font-semibold">true</span>
                {'\n'}
                <span className="text-slate-400">{'}'};</span>
              </code>
            </pre>
          </div>

          <div className="grid grid-cols-3 gap-3.5 mt-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`group/stat rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10'
                    : 'bg-white border border-slate-200 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10'
                }`}
              >
                <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60 group-hover/stat:border-sky-500/50 transition-colors">
                  {s.icon}
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl gradient-text tracking-tight">
                  {s.num}
                </div>
                <div className={`text-xs font-medium mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full transition-colors ${
          theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'
        }`}
        aria-label="Scroll down to About section"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}

