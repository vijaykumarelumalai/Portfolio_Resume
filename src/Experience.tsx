import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { experiences } from './data';
import { useTheme } from './ThemeContext';
import { useReveal } from './useReveal';

export default function Experience() {
  const { theme } = useTheme();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      className={`relative py-24 scroll-mt-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <div className="text-center mb-14">
            <p className="gradient-text font-display font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles size={14} className="text-cyan-400" />
              03 — Professional Journey
            </p>
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Work Experience &amp; Internships
            </h2>
            <div className="section-line mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div
              className="absolute left-[9px] top-3 bottom-3 w-1 bg-gradient-to-b from-sky-500 via-cyan-400 to-emerald-400 rounded-full"
            />

            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 pb-12 last:pb-0 group">
                <div className={`absolute left-[2px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 shadow-lg shadow-sky-500/50 border-2 ${theme === 'dark' ? 'border-slate-950' : 'border-white'} group-hover:scale-125 transition-transform duration-300`} />

                <div
                  className={`rounded-3xl p-7 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10'
                      : 'bg-slate-50 border border-slate-200/80 hover:border-sky-400 hover:shadow-xl'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`font-display font-bold text-xl sm:text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold gradient-text flex items-center gap-2 mt-1">
                        <Briefcase size={16} className="text-sky-400" /> {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${theme === 'dark' ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-200/80 text-slate-700'}`}>
                        <Calendar size={12} className="text-sky-400" /> {exp.period}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${theme === 'dark' ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-200/80 text-slate-700'}`}>
                        <MapPin size={12} className="text-cyan-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 pt-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                          theme === 'dark'
                            ? 'bg-slate-800/80 text-sky-300 border border-sky-500/20'
                            : 'bg-sky-50 text-sky-700 border border-sky-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

