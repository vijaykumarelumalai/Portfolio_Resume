import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { profile } from './data';
import { useTheme } from './ThemeContext';
import { useReveal } from './useReveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { theme } = useTheme();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();
    const trimmedSubject = form.subject.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey && !supabaseUrl.includes('your-supabase-project')) {
        const res = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            subject: trimmedSubject,
            message: trimmedMessage,
          }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to send message via backend');
        }
      } else {
        const formSubmitToken = 'e8b7ff7814e90813d2e2604902061565';
        const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            '👤 SENDER NAME': trimmedName,
            '✉️ SENDER EMAIL': trimmedEmail,
            '📌 SUBJECT': trimmedSubject || 'Portfolio Project Inquiry',
            '💬 MESSAGE': trimmedMessage,
            '🕒 RECEIVED DATE': new Date().toLocaleString(),
            _replyto: trimmedEmail,
            _subject: `⚡ Portfolio Inquiry from ${trimmedName}: ${trimmedSubject || 'New Contact Message'}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
        if (googleSheetsUrl && !googleSheetsUrl.includes('your-google-sheets-script-url')) {
          fetch(googleSheetsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: trimmedName,
              email: trimmedEmail,
              subject: trimmedSubject,
              message: trimmedMessage,
              date: new Date().toLocaleString(),
            }),
          }).catch((err) => console.warn('Google Sheets logging:', err));
        }

        const res = await formSubmitPromise;
        const data = await res.json().catch(() => ({}));
        if (!res.ok && data.success !== 'true' && data.success !== true && !data.message) {
          throw new Error(data.message || 'Failed to deliver email message');
        }
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try emailing directly.');
    }
  };

  const inputClass = `contact-input w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 ${
    theme === 'dark'
      ? 'bg-slate-950/80 text-white border border-slate-800 placeholder-slate-500 focus:border-sky-500/80 focus:bg-slate-900/90'
      : 'bg-slate-50 text-slate-900 border border-slate-200 placeholder-slate-400 focus:border-sky-500 focus:bg-white'
  }`;

  return (
    <section
      id="contact"
      className={`relative py-24 scroll-mt-24 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <div className="text-center mb-14">
            <p className="gradient-text font-display font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles size={14} className="text-emerald-400" />
              06 — Get In Touch
            </p>
            <h2
              className={`font-display font-bold text-3xl sm:text-4xl mt-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Let's Build Something Great Together
            </h2>
            <div className="section-line mx-auto mt-4" />
            <p className={`mt-4 text-sm max-w-lg mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a project in mind, software role to fill, or technical query? Send me a message and I'll respond promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-7">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: <Phone size={18} />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                { icon: <MapPin size={18} />, label: 'Location', value: profile.location },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={`flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-slate-950/80 border border-slate-800/80 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10'
                      : 'bg-white border border-slate-200 hover:border-sky-400 hover:shadow-lg'
                  } ${c.href ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider gradient-text font-bold">{c.label}</p>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{c.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex gap-3 pt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit GitHub Profile"
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-900'
                      : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-sky-400'
                  }`}
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-900'
                      : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-sky-400'
                  }`}
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>

              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            {/* Contact Form */}
            <div
              className={`lg:col-span-3 rounded-3xl p-7 sm:p-8 transition-all ${
                theme === 'dark'
                  ? 'bg-slate-950/90 border border-slate-800/80 shadow-xl'
                  : 'bg-white border border-slate-200 shadow-xl'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      aria-required="true"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Job opportunity"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or role..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'success' && (
                  <div
                    role="status"
                    className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 animate-fadeIn"
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0" /> Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-4 animate-fadeIn"
                  >
                    <AlertCircle size={18} className="flex-shrink-0" /> {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

