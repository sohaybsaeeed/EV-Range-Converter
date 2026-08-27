import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Headset,
  Loader,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import TrustPageShell from './TrustPageShell';

interface ContactUsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const CONTACT_EMAIL = 'sohaibbeforward@gmail.com';
export const CONTACT_PHONE = '+923107831891';

const SUBJECTS = [
  'Question about a conversion result',
  'Report an inaccurate range factor',
  'Suggest a new standard or tool',
  'Privacy or data request',
  'Advertising or partnership',
  'Something else',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactUs({ darkMode, setDarkMode }: ContactUsProps) {
  const [state, setState] = useState<FormState>('idle');

  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const cardClass = darkMode
    ? 'border-white/[0.08] bg-white/[0.035]'
    : 'border-black/[0.06] bg-[#f8faf7]';
  const baseFieldClass = `w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-500 focus:ring-2 ${
    darkMode
      ? 'border-white/[0.10] focus:border-emerald-300/40 focus:ring-emerald-300/20'
      : 'border-black/[0.08] focus:border-emerald-600/40 focus:ring-emerald-600/15'
  }`;
  const fieldClass = `${baseFieldClass} ${
    darkMode ? 'bg-white/[0.04] text-gray-100' : 'bg-white text-gray-900'
  }`;
  // The native dropdown paints itself from the control's own background, so the
  // select needs an opaque colour (a translucent one renders as a white popup).
  // color-scheme makes the browser draw the popup itself in the matching theme.
  const selectClass = `${baseFieldClass} cursor-pointer appearance-none pr-11 ${
    darkMode
      ? 'bg-[#131c25] text-gray-100 [color-scheme:dark]'
      : 'bg-white text-gray-900 [color-scheme:light]'
  }`;
  const optionClass = darkMode ? 'bg-[#131c25] text-gray-100' : 'bg-white text-gray-900';
  const labelClass = `mb-2 block text-xs font-bold uppercase tracking-[0.14em] ${
    darkMode ? 'text-gray-400' : 'text-gray-500'
  }`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setState('submitting');

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      setState('success');
    } catch {
      setState('error');
    }
  };

  const channels = [
    {
      label: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      icon: Mail,
      note: 'Best for detailed questions, corrections, and privacy requests.',
    },
    {
      label: 'Phone',
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE}`,
      icon: Phone,
      note: 'Reachable during Pakistan Standard Time business hours.',
    },
  ];

  const aside = (
    <div className={`rounded-[1.75rem] border p-6 ${
      darkMode
        ? 'border-white/[0.08] bg-white/[0.035]'
        : 'border-black/[0.06] bg-white/90 shadow-[0_18px_60px_rgba(42,69,55,0.07)]'
    }`}>
      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
        Reach us directly
      </p>
      <div className="mt-5 space-y-4">
        {channels.map(({ label, value, href, icon: Icon, note }) => (
          <a
            key={label}
            href={href}
            className={`block rounded-[1.25rem] border p-4 transition-all ${
              darkMode
                ? 'border-white/[0.08] bg-white/[0.03] hover:border-emerald-300/25 hover:bg-white/[0.06]'
                : 'border-black/[0.06] bg-[#f8faf7] hover:border-emerald-700/20 hover:bg-white'
            }`}
          >
            <span className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <Icon size={14} className={darkMode ? 'text-emerald-300' : 'text-emerald-700'} />
              {label}
            </span>
            <span className="mt-2 block break-all text-sm font-extrabold tracking-tight">{value}</span>
            <span className={`mt-1.5 block text-xs leading-5 ${mutedText}`}>{note}</span>
          </a>
        ))}
      </div>
      <div className={`mt-5 flex items-start gap-2.5 border-t pt-5 text-xs leading-5 ${
        darkMode ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-500'
      }`}>
        <Clock size={14} className="mt-0.5 flex-shrink-0" />
        <span>Most messages get a reply within two business days. Please do not send sensitive personal information such as payment details or government identifiers.</span>
      </div>
    </div>
  );

  return (
    <TrustPageShell
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      title="Contact Us"
      description="Questions about a conversion, a correction to our range factors, or an idea for a new tool — send it over and it reaches the person who maintains this site."
      path="/contactus"
      eyebrow="We read every message"
      icon={<Headset size={14} />}
      aside={aside}
    >
      <div className="space-y-10">
        <section className={`grid gap-5 rounded-[1.75rem] border p-6 sm:grid-cols-[auto_1fr] sm:p-8 ${cardClass}`}>
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            darkMode ? 'bg-cyan-300/10 text-cyan-300' : 'bg-cyan-100 text-cyan-800'
          }`}>
            <MessageSquare size={22} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Before you write</h2>
            <p className={`mt-3 leading-7 ${mutedText}`}>
              If your message is about a specific number, include the vehicle, the source standard, and the figure you
              expected. That context is what lets us verify a factor and update it for everyone rather than answering a
              single case.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight">Send a message</h2>
          <p className={`mt-3 text-sm leading-7 sm:text-base ${mutedText}`}>
            The form goes straight to {CONTACT_EMAIL}. Prefer your own mail client or a phone call? Both are listed
            alongside this page.
          </p>

          {state === 'success' ? (
            <div
              role="status"
              className={`mt-6 rounded-[1.75rem] border p-6 sm:p-8 ${
                darkMode ? 'border-emerald-300/20 bg-emerald-300/[0.06]' : 'border-emerald-900/10 bg-emerald-50'
              }`}
            >
              <CheckCircle2 size={24} className={darkMode ? 'text-emerald-300' : 'text-emerald-700'} />
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">Message sent</h3>
              <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                Thanks for getting in touch. A reply usually arrives within two business days at the email address you
                provided.
              </p>
              <button
                type="button"
                onClick={() => setState('idle')}
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  darkMode
                    ? 'bg-white/[0.08] text-gray-100 hover:bg-white/[0.14]'
                    : 'bg-white text-gray-800 shadow-sm hover:bg-gray-50'
                }`}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Do not fill this out if you are human
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Sohaib Saeed"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-subject">What is this about?</label>
                <div className="relative">
                  <select id="contact-subject" name="subject" required defaultValue="" className={selectClass}>
                    <option value="" disabled className={optionClass}>Choose a topic</option>
                    {SUBJECTS.map((subject) => (
                      <option key={subject} value={subject} className={optionClass}>{subject}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Vehicle, source standard, the figure you expected, and anything else that helps."
                  className={`${fieldClass} resize-y leading-7`}
                />
              </div>

              {state === 'error' && (
                <p
                  role="alert"
                  className={`flex items-start gap-2.5 rounded-2xl border p-4 text-sm leading-6 ${
                    darkMode
                      ? 'border-amber-300/25 bg-amber-300/[0.07] text-amber-200'
                      : 'border-amber-600/20 bg-amber-50 text-amber-800'
                  }`}
                >
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    The message could not be sent just now. Please try again, or email{' '}
                    <a className="font-bold underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.
                  </span>
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-60 ${
                    darkMode
                      ? 'bg-emerald-300 text-[#09231a] hover:bg-emerald-200'
                      : 'bg-emerald-700 text-white shadow-sm hover:bg-emerald-800'
                  }`}
                >
                  {state === 'submitting' ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
                  {state === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
                <span className={`text-xs leading-5 ${mutedText}`}>
                  Your address is used only to reply to this message.
                </span>
              </div>
            </form>
          )}
        </section>

        <section className={`rounded-[1.75rem] border p-6 sm:p-8 ${
          darkMode ? 'border-emerald-300/15 bg-emerald-300/[0.05]' : 'border-emerald-900/10 bg-emerald-50'
        }`}>
          <Mail size={22} className={darkMode ? 'text-emerald-300' : 'text-emerald-700'} />
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Privacy and legal requests</h2>
          <p className={`mt-3 leading-7 ${mutedText}`}>
            Requests about your data, our{' '}
            <a href="/privacypolicy" className="font-semibold underline decoration-1 underline-offset-2 hover:text-emerald-500">Privacy Policy</a>
            {', or the '}
            <a href="/termsofuse" className="font-semibold underline decoration-1 underline-offset-2 hover:text-emerald-500">Terms of Use</a>{' '}
            go to the same address:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold underline decoration-1 underline-offset-2 hover:text-emerald-500">{CONTACT_EMAIL}</a>.
            Mention the request type in your subject line so it can be routed quickly.
          </p>
        </section>
      </div>
    </TrustPageShell>
  );
}
