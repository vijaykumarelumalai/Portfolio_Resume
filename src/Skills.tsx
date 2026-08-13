import { useState } from 'react';
import { Code2, Server, Database, Wrench, Layers, Sparkles } from 'lucide-react';
import { skills, skillCategories } from './data';
import { useTheme } from './ThemeContext';
import { useReveal } from './useReveal';

const categoryIcons: Record<string, React.ReactNode> = {
  All: <Sparkles size={18} />,
  Languages: <Code2 size={18} />,
  Backend: <Server size={18} />,
  Frontend: <Layers size={18} />,
  Database: <Database size={18} />,
  Tools: <Wrench size={18} />,
};

const allCategories = ['All', ...skillCategories];

export default function Skills() {
  const { theme } = useTheme();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className={`relative py-24 scroll-mt-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <div className="text-center mb-12">
            <p className="gradient-text font-display font-semibold text-sm uppercase tracking-widest">
              02 — Skills &amp; Technologies
            </p>
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              My Technical Ecosystem
            </h2>
            <div className="section-line mx-auto mt-4" />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-lg shadow-sky-500/25 scale-105'
                    : theme === 'dark'
                      ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {categoryIcons[cat]} {cat}
              </button>
            ))}
          </div>

          {/* Skill bars grid */}
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-5xl mx-auto">
            {filtered.map((skill) => (
              <div
                key={skill.name}
                className={`rounded-xl p-4 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/90'
                    : 'bg-white border border-slate-200/80 hover:border-sky-400 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-semibold flex items-center gap-2 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {skill.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: visible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech summary cards */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillCategories.map((cat) => {
              const count = skills.filter((s) => s.category === cat).length;
              return (
                <div
                  key={cat}
                  role="button"
                  tabIndex={0}
                  aria-label={`Filter by ${cat} technologies`}
                  onClick={() => setActive(cat)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActive(cat);
                    }
                  }}
                  className={`rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10'
                      : 'bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center text-white mb-3 shadow-md shadow-sky-500/20">
                    {categoryIcons[cat]}
                  </div>
                  <div className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {cat}
                  </div>
                  <div className={`text-xs font-medium mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {count} Technologies
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

