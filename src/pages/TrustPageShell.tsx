import { useEffect, type ReactNode } from 'react';
import { ArrowLeft, Moon, Sun, Zap } from 'lucide-react';

interface TrustPageShellProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  title: string;
  description: string;
  path: string;
  eyebrow: string;
  icon: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function TrustPageShell({
  darkMode,
  setDarkMode,
  title,
  description,
  path,
  eyebrow,
  icon,
  aside,
  children,
}: TrustPageShellProps) {
  useEffect(() => {
    document.title = `${title} | EV Range Converter`;
    setMeta('description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://evrangeconverter.com${path}`;
  }, [description, path, title]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#091019] text-white' : 'bg-[#f4f7f3] text-[#17201b]'
    }`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className={`absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full blur-[110px] ${
          darkMode ? 'bg-cyan-400/[0.07]' : 'bg-cyan-200/50'
        }`} />
        <div className={`absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full blur-[110px] ${
          darkMode ? 'bg-emerald-400/[0.06]' : 'bg-emerald-200/45'
        }`} />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-9 lg:px-8">
        <nav className="mb-5 flex items-center justify-between" aria-label="Page navigation">
          <a
            href="/"
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
              darkMode
                ? 'border-white/10 bg-white/[0.06] text-gray-200 hover:bg-white/10'
                : 'border-black/5 bg-white/80 text-gray-700 shadow-sm hover:bg-white'
            }`}
          >
            <ArrowLeft size={15} />
            Converter
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full border p-2.5 transition-all ${
              darkMode
                ? 'border-white/10 bg-white/[0.06] text-amber-300 hover:bg-white/10'
                : 'border-black/5 bg-white/80 text-gray-600 shadow-sm hover:bg-white'
            }`}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <header className={`relative overflow-hidden rounded-[2rem] border px-5 py-9 sm:px-9 sm:py-12 lg:px-12 ${
          darkMode
            ? 'border-white/[0.09] bg-white/[0.035]'
            : 'border-black/[0.06] bg-white/85 shadow-[0_24px_70px_rgba(42,69,55,0.10)]'
        }`}>
          <div className={`absolute right-[-3.5rem] top-[-4rem] h-56 w-56 rounded-full border-[28px] ${
            darkMode ? 'border-emerald-300/[0.06]' : 'border-emerald-600/[0.05]'
          }`} aria-hidden="true" />
          <div className="relative max-w-3xl">
            <div className={`mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
              darkMode ? 'bg-emerald-300/10 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {icon}
              {eyebrow}
            </div>
            <h1 className="max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {description}
            </p>
          </div>
        </header>

        <div className={`mt-5 grid gap-5 ${aside ? 'lg:grid-cols-[minmax(0,1fr)_19rem]' : ''}`}>
          <article className={`rounded-[2rem] border p-5 sm:p-8 lg:p-10 ${
            darkMode
              ? 'border-white/[0.08] bg-white/[0.025]'
              : 'border-black/[0.06] bg-white/90 shadow-[0_18px_60px_rgba(42,69,55,0.07)]'
          }`}>
            {children}
          </article>
          {aside ? <aside className="lg:sticky lg:top-5 lg:self-start">{aside}</aside> : null}
        </div>

        <footer className={`py-8 text-center text-xs ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="/aboutus" className="hover:text-emerald-500 hover:underline">About Us</a>
            <a href="/contactus" className="hover:text-emerald-500 hover:underline">Contact Us</a>
            <a href="/privacypolicy" className="hover:text-emerald-500 hover:underline">Privacy Policy</a>
            <a href="/termsofuse" className="hover:text-emerald-500 hover:underline">Terms of Use</a>
            <a href="/" className="inline-flex items-center gap-1.5 hover:text-emerald-500 hover:underline">
              <Zap size={12} /> EV Range Converter
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
