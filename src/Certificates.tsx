import { Award, Rocket, GraduationCap, Layers, ExternalLink, Briefcase, CheckCircle } from 'lucide-react';
import { certificates, achievements, profile } from './data';
import { useTheme } from './ThemeContext';
import { useReveal } from './useReveal';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  Award: <Award size={22} />,
  Layers: <Layers size={22} />,
  Briefcase: <Briefcase size={22} />,
  CheckCircle: <CheckCircle size={22} />,
};

export default function Certificates() {
  const { theme } = useTheme();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="certificates"
      className={`relative py-24 scroll-mt-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <div className="text-center mb-14">
            <p className="gradient-text font-display font-semibold text-sm uppercase tracking-widest">
              05 — Certificates &amp; Achievements
            </p>
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Verified Credentials &amp; Milestones
            </h2>
            <div className="section-line mx-auto mt-4" />
          </div>

          {/* Certificates grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className={`group rounded-2xl overflow-hidden relative transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10'
                    : 'bg-slate-50 border border-slate-200/80 hover:border-sky-400 hover:shadow-xl'
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-amber-400 border border-amber-500/30">
                    <Award size={18} />
                  </span>
                </div>
                <div className="p-6 relative">
                  <h3 className={`font-display font-bold text-base leading-snug mb-1.5 group-hover:text-sky-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-xs gradient-text font-bold">{cert.issuer}</p>
                  <p className={`text-xs mt-1 font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Issued {cert.date}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${
                          theme === 'dark'
                            ? 'bg-slate-800 text-sky-300 border-sky-500/20'
                            : 'bg-sky-50 text-sky-700 border-sky-200'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Achievements */}
          <h3
            className={`font-display font-bold text-2xl mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Key Highlights
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((a) => (
              <div
                key={a.id}
                className={`flex gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10'
                    : 'bg-slate-50 border border-slate-200/80 hover:border-sky-400 hover:shadow-xl'
                }`}
              >
                <span className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                  {iconMap[a.icon] || <Award size={22} />}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className={`font-display font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {a.title}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {a.date}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold gradient-text hover:gap-3 transition-all"
            >
              View full profile and credentials on LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

