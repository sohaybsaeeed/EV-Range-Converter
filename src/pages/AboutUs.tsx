import { BatteryCharging, Database, Gauge, Mail, Target, UserRound } from 'lucide-react';
import TrustPageShell from './TrustPageShell';

interface AboutUsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function AboutUs({ darkMode, setDarkMode }: AboutUsProps) {
  const cardClass = darkMode
    ? 'border-white/[0.08] bg-white/[0.035]'
    : 'border-black/[0.06] bg-[#f8faf7]';
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600';

  const aside = (
    <div className={`rounded-[1.75rem] border p-6 ${
      darkMode
        ? 'border-white/[0.08] bg-white/[0.035]'
        : 'border-black/[0.06] bg-white/90 shadow-[0_18px_60px_rgba(42,69,55,0.07)]'
    }`}>
      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
        What guides us
      </p>
      <dl className="mt-5 space-y-5">
        <div>
          <dt className="text-sm font-bold">Practical by design</dt>
          <dd className={`mt-1 text-sm leading-6 ${mutedText}`}>Daily charging habits matter more than ideal laboratory conditions.</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">Clear about estimates</dt>
          <dd className={`mt-1 text-sm leading-6 ${mutedText}`}>Results are useful planning references, not guarantees of vehicle performance.</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">Built for drivers</dt>
          <dd className={`mt-1 text-sm leading-6 ${mutedText}`}>Complex standards become simple, comparable numbers.</dd>
        </div>
      </dl>
    </div>
  );

  return (
    <TrustPageShell
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      title="About Us"
      description="Welcome to EV Range Converter, your trusted resource for accurate, data-driven electric vehicle metrics."
      path="/aboutus"
      eyebrow="Built for real-world EV decisions"
      icon={<BatteryCharging size={14} />}
      aside={aside}
    >
      <div className="space-y-11">
        <section>
          <p className={`text-base leading-8 sm:text-lg ${mutedText}`}>
            As the shift toward sustainable transportation accelerates, drivers need reliable tools to understand their vehicles&apos; true capabilities. We provide practical, real-world calculations that go beyond theoretical manufacturer estimates, helping you make informed decisions about your daily commute and long-distance travel.
          </p>
        </section>

        <section className={`grid gap-5 rounded-[1.75rem] border p-6 sm:grid-cols-[auto_1fr] sm:p-8 ${cardClass}`}>
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            darkMode ? 'bg-cyan-300/10 text-cyan-300' : 'bg-cyan-100 text-cyan-800'
          }`}>
            <Target size={23} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Our Mission</h2>
            <p className={`mt-3 leading-7 ${mutedText}`}>
              Our mission is to bring transparency to EV battery performance. We believe range anxiety often stems from a lack of accurate information. By focusing on real-world driving conditions and practical battery management, we aim to equip EV owners and prospective buyers with the precise data they need to drive with confidence.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center gap-3">
            <Gauge className={darkMode ? 'text-emerald-300' : 'text-emerald-700'} size={23} />
            <h2 className="text-2xl font-extrabold tracking-tight">The Realistic Usable Range Standard (RURS)</h2>
          </div>
          <div className={`space-y-4 leading-7 ${mutedText}`}>
            <p>At the core of our platform is the Realistic Usable Range Standard (RURS). We understand that everyday EV usage is rarely about draining a battery from 100% to 0%.</p>
            <p>Instead, we emphasize the 20–80% state-of-charge rule—a practical charging window commonly used to support long-term battery health. Our calculators and tools are designed to reflect this reality, providing usable range metrics that mirror how electric vehicles are actually driven and maintained.</p>
          </div>
          <div className={`mt-6 overflow-hidden rounded-[1.5rem] border p-5 ${cardClass}`}>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em]">
              <span className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Daily reserve</span>
              <span className={darkMode ? 'text-emerald-300' : 'text-emerald-700'}>Practical driving window</span>
              <span className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Battery buffer</span>
            </div>
            <div className={`mt-4 grid h-3 grid-cols-[1fr_3fr_1fr] overflow-hidden rounded-full ${darkMode ? 'bg-white/5' : 'bg-gray-200'}`}>
              <div className={darkMode ? 'bg-gray-600' : 'bg-gray-300'} />
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500" />
              <div className={darkMode ? 'bg-gray-600' : 'bg-gray-300'} />
            </div>
            <div className={`mt-2 flex justify-between text-xs font-semibold ${mutedText}`}><span>0%</span><span>20%</span><span>80%</span><span>100%</span></div>
          </div>
        </section>

        <section className={`grid gap-5 rounded-[1.75rem] border p-6 sm:grid-cols-[auto_1fr] sm:p-8 ${cardClass}`}>
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            darkMode ? 'bg-amber-300/10 text-amber-300' : 'bg-amber-100 text-amber-800'
          }`}>
            <UserRound size={22} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Who We Are</h2>
            <p className={`mt-3 leading-7 ${mutedText}`}>
              EV Range Converter was founded by Sohaib Saeed, a Cloud Data Engineer and Data Analyst. The platform was built at the intersection of big data precision and sustainable technology. By applying rigorous data engineering principles and analytical methodologies to EV performance metrics, we work to ensure every calculation is supported by a solid, reliable data architecture.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight">Why Choose Us?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Data-Driven Accuracy', text: 'Our tools use sound analytical frameworks to produce consistent conversions and useful estimates.', icon: Database },
              { title: 'Practical Focus', text: 'We prioritize real-world usability, including RURS, rather than relying only on theoretical maximums.', icon: Gauge },
              { title: 'User-Centric Design', text: 'We make complex EV data accessible to everyone, from enthusiasts to first-time EV owners.', icon: UserRound },
            ].map(({ title, text, icon: Icon }, index) => (
              <div key={title} className={`rounded-[1.5rem] border p-5 ${cardClass} ${index === 2 ? 'sm:col-span-2' : ''}`}>
                <Icon size={20} className={darkMode ? 'text-emerald-300' : 'text-emerald-700'} />
                <h3 className="mt-4 font-extrabold">{title}</h3>
                <p className={`mt-2 text-sm leading-6 ${mutedText}`}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`rounded-[1.75rem] border p-6 sm:p-8 ${
          darkMode ? 'border-emerald-300/15 bg-emerald-300/[0.05]' : 'border-emerald-900/10 bg-emerald-50'
        }`}>
          <Mail size={22} className={darkMode ? 'text-emerald-300' : 'text-emerald-700'} />
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Get in Touch</h2>
          <p className={`mt-3 leading-7 ${mutedText}`}>
            We are constantly working to improve our calculators and expand our resources. If you have questions, feedback, or suggestions for new tools, we would love to hear from you.
          </p>
          <p className={`mt-4 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Thank you for relying on EV Range Converter for your electric vehicle metrics.
          </p>
        </section>
      </div>
    </TrustPageShell>
  );
}
