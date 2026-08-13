import { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, User, Check, Star, X, MapPin, Sparkles } from 'lucide-react';
import { projects } from './data';
import type { Project } from './data';
import { useTheme } from './ThemeContext';
import { useReveal } from './useReveal';

const tagColors: Record<string, string> = {
  'C#': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  '.NET': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'ASP.NET Core': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Blazor': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  'Radzen UI': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
  'SQL Server': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'EF Core': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'HTML5': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  'CSS3': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  'Vanilla CSS': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  'React.js': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
};

export default function Projects() {
  const { theme } = useTheme();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  return (
    <section
      id="projects"
      className={`relative py-24 scroll-mt-24 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <div className="text-center mb-12">
            <p className="gradient-text font-display font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles size={14} className="text-sky-400" />
              04 — Featured Works
            </p>
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Enterprise &amp; Web Applications
            </h2>
            <div className="section-line mx-auto mt-4" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-lg shadow-sky-500/20'
                    : theme === 'dark'
                      ? 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project) => (
              <article
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
                className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  theme === 'dark'
                    ? 'bg-slate-950/90 border border-slate-800/80 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/15'
                    : 'bg-white border border-slate-200 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/10'
                }`}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                    {project.highlighted && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20">
                        <Star size={12} className="fill-current" /> Featured
                      </span>
                    )}

                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-sky-300 border border-sky-500/30">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className={`font-display font-bold text-xl mb-2.5 group-hover:text-sky-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 line-clamp-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                            tagColors[t] || (theme === 'dark' ? 'bg-slate-800 text-sky-300 border-slate-700' : 'bg-sky-50 text-sky-700 border-sky-200')
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div
                    className={`flex items-center justify-between pt-4 border-t ${
                      theme === 'dark' ? 'border-slate-800/80' : 'border-slate-100'
                    }`}
                  >
                    <span className={`text-xs flex items-center gap-1.5 font-medium ${theme === 'dark' ? 'text-sky-400' : 'text-sky-600'}`}>
                      {project.location ? (
                        <>
                          <MapPin size={13} className="text-sky-400" /> {project.location}
                        </>
                      ) : (
                        project.timeline
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold gradient-text group-hover:gap-2 transition-all">
                      View details <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close project details modal"
              className={`absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center z-10 transition-colors ${
                theme === 'dark' ? 'bg-slate-900/90 text-white hover:bg-slate-800 border border-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <X size={20} />
            </button>

            <div className="relative h-64">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                  {selected.category}
                </span>
                <h3 id="modal-project-title" className="font-display font-bold text-2xl sm:text-3xl text-white mt-2">{selected.title}</h3>
              </div>
            </div>

            <div className="p-7">
              <div className="flex flex-wrap gap-5 mb-5 text-xs font-semibold">
                <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  <User size={14} className="text-sky-400" /> {selected.role}
                </span>
                <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Calendar size={14} className="text-sky-400" /> {selected.timeline}
                </span>
                {selected.location && (
                  <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                    <MapPin size={14} /> {selected.location}
                  </span>
                )}
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {selected.longDescription}
              </p>

              <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Key Deliverables &amp; Features
              </p>
              <ul className="space-y-2.5 mb-6">
                {selected.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm">
                    <Check size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`flex flex-wrap gap-2 pt-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                      tagColors[t] || (theme === 'dark' ? 'bg-slate-800 text-sky-300 border-slate-700' : 'bg-sky-50 text-sky-700 border-sky-200')
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

