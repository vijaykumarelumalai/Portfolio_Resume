import { GraduationCap, BookOpen, User } from 'lucide-react';
import { profile } from './data';
import { useTheme } from './ThemeContext';
import { useReveal } from './useReveal';

export default function About() {
  const { theme } = useTheme();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className={`relative py-24 scroll-mt-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <div className="text-center mb-14">
            <p className="gradient-text font-display font-semibold text-sm uppercase tracking-widest">
              01 — About
            </p>
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Get to know me
            </h2>
            <div className="section-line mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div
              className={`lg:col-span-2 rounded-2xl p-7 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border border-slate-800'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white">
                  <User size={20} />
                </span>
                <h3
                  className={`font-display font-bold text-xl ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Who I am
                </h3>
              </div>
              <p
                className={`leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {profile.about}
              </p>
            </div>

            <div
              className={`rounded-2xl p-7 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border border-slate-800'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <h3
                className={`font-display font-bold text-lg mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Quick Facts
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Name', value: profile.name },
                  { label: 'Role', value: '.NET / Full Stack Developer' },
                  { label: 'Location', value: profile.location },
                  { label: 'Email', value: profile.email },
                  { label: 'Phone', value: profile.phone },
                ].map((f) => (
                  <li key={f.label} className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider gradient-text font-semibold">
                      {f.label}
                    </span>
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div
              className={`rounded-2xl p-7 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border border-slate-800'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white">
                  <GraduationCap size={20} />
                </span>
                <h3
                  className={`font-display font-bold text-xl ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Education
                </h3>
              </div>
              <div className="space-y-5">
                {profile.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className={`pl-4 border-l-2 ${
                      theme === 'dark' ? 'border-sky-500/40' : 'border-sky-400'
                    }`}
                  >
                    <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {edu.degree}
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs">
                      <span className={theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}>
                        {edu.period}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-500 font-semibold">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl p-7 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border border-slate-800'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white">
                  <BookOpen size={20} />
                </span>
                <h3
                  className={`font-display font-bold text-xl ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  What I've learned
                </h3>
              </div>
              <ul className="space-y-3">
                {profile.learning.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-sky-500 mt-1.5 flex-shrink-0">▹</span>
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
