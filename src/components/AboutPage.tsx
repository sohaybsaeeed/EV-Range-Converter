import type { FC } from 'react';
import {
  BatteryCharging,
  CheckCircle2,
  Database,
  Gauge,
  Mail,
  Target,
  Users,
} from 'lucide-react';

interface AboutPageProps {
  darkMode: boolean;
}

const AboutPage: FC<AboutPageProps> = ({ darkMode }) => {
  const panelClass = darkMode
    ? 'bg-white/[0.04] border-white/[0.08]'
    : 'bg-white border-gray-200 shadow-sm';

  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const headingText = darkMode ? 'text-white' : 'text-gray-950';

  const reasons = [
    {
      title: 'Data-Driven Accuracy',
      text: 'Our tools are built on sound analytical frameworks, ensuring highly accurate conversions and estimates.',
    },
    {
      title: 'Practical Focus',
      text: 'We prioritize real-world usability, focusing on metrics like RURS rather than theoretical maximums.',
    },
    {
      title: 'User-Centric Design',
      text: 'Our platform makes complex EV data accessible to everyone, from tech enthusiasts to first-time EV owners.',
    },
  ];

  return (
    <main className="animate-fade-in-up">
      <section className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 lg:p-10 mb-6 ${panelClass}`}>
        <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(59,130,246,0.08))] sm:block" />
        <div className="relative max-w-3xl">
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            darkMode ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
          }`}>
            <Gauge size={14} />
            About Us
          </div>
          <h2 className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl ${headingText}`}>
            Welcome to EV Range Converter
          </h2>
          <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${mutedText}`}>
            Your trusted resource for accurate, data-driven electric vehicle metrics. As the
            shift toward sustainable transportation accelerates, drivers need reliable tools to
            understand their vehicles' true capabilities.
          </p>
          <p className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${mutedText}`}>
            We provide practical, real-world calculations that go beyond theoretical manufacturer
            estimates, helping you make informed decisions about your daily commute and
            long-distance travel.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <section className={`rounded-2xl border p-6 sm:p-7 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`grid h-10 w-10 place-items-center rounded-xl ${
              darkMode ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-50 text-blue-700'
            }`}>
              <Target size={20} />
            </div>
            <h3 className={`text-xl font-bold ${headingText}`}>Our Mission</h3>
          </div>
          <p className={`leading-7 ${mutedText}`}>
            Our mission is to bring transparency to EV battery performance. We believe that
            range anxiety stems from a lack of accurate information. By focusing on real-world
            driving conditions and practical battery management, we aim to equip EV owners and
            prospective buyers with the precise data they need to drive with confidence.
          </p>
        </section>

        <section className={`rounded-2xl border p-6 sm:p-7 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`grid h-10 w-10 place-items-center rounded-xl ${
              darkMode ? 'bg-cyan-500/15 text-cyan-300' : 'bg-cyan-50 text-cyan-700'
            }`}>
              <Users size={20} />
            </div>
            <h3 className={`text-xl font-bold ${headingText}`}>Who We Are</h3>
          </div>
          <p className={`leading-7 ${mutedText}`}>
            EV Range Converter was founded by Sohaib Saeed, a Cloud Data Engineer and Data
            Analyst. The platform was built at the intersection of big data precision and
            sustainable technology.
          </p>
          <p className={`mt-3 leading-7 ${mutedText}`}>
            By applying rigorous data engineering principles and analytical methodologies to EV
            performance metrics, every calculation is backed by solid, reliable data architecture.
          </p>
        </section>
      </div>

      <section className={`mt-6 rounded-2xl border p-6 sm:p-8 ${panelClass}`}>
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${
                darkMode ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-50 text-emerald-700'
              }`}>
                <BatteryCharging size={22} />
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider ${
                  darkMode ? 'text-emerald-300' : 'text-emerald-700'
                }`}>
                  The Realistic Usable Range Standard
                </p>
                <h3 className={`text-2xl font-bold ${headingText}`}>RURS</h3>
              </div>
            </div>
            <p className={`leading-7 ${mutedText}`}>
              At the core of our platform is the Realistic Usable Range Standard. Everyday EV
              usage is rarely about draining a battery from 100% to 0%.
            </p>
            <p className={`mt-4 leading-7 ${mutedText}`}>
              Instead, we emphasize the 20-80% state-of-charge rule, the optimal charging
              window recommended for maintaining long-term battery health.
            </p>
          </div>

          <div className={`rounded-2xl border p-5 ${
            darkMode ? 'border-emerald-500/20 bg-emerald-500/[0.06]' : 'border-emerald-100 bg-emerald-50/80'
          }`}>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className={`text-sm font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
                20%
              </span>
              <div className={`h-3 overflow-hidden rounded-full ${darkMode ? 'bg-white/10' : 'bg-white'}`}>
                <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
              </div>
              <span className={`text-sm font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                80%
              </span>
            </div>
            <p className={`mt-4 text-sm leading-6 ${mutedText}`}>
              Our calculators are designed around usable range metrics that mirror how electric
              vehicles are actually driven and maintained in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex items-center gap-3">
          <div className={`grid h-10 w-10 place-items-center rounded-xl ${
            darkMode ? 'bg-purple-500/15 text-purple-300' : 'bg-purple-50 text-purple-700'
          }`}>
            <Database size={20} />
          </div>
          <h3 className={`text-xl font-bold ${headingText}`}>Why Choose Us?</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className={`rounded-2xl border p-5 ${panelClass}`}>
              <CheckCircle2 className={darkMode ? 'text-emerald-300' : 'text-emerald-600'} size={22} />
              <h4 className={`mt-4 text-base font-bold ${headingText}`}>{reason.title}</h4>
              <p className={`mt-2 text-sm leading-6 ${mutedText}`}>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`mt-6 rounded-2xl border p-6 sm:p-7 ${panelClass}`}>
        <div className="flex items-start gap-4">
          <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl ${
            darkMode ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-50 text-blue-700'
          }`}>
            <Mail size={20} />
          </div>
          <div>
            <h3 className={`text-xl font-bold ${headingText}`}>Get in Touch</h3>
            <p className={`mt-3 leading-7 ${mutedText}`}>
              We are constantly working to improve our calculators and expand our resources.
              If you have questions, feedback, or suggestions for new tools, we would love to
              hear from you.
            </p>
            <p className={`mt-4 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Thank you for relying on EV Range Converter for your electric vehicle metrics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
