import { ExternalLink, ShieldCheck } from 'lucide-react';
import TrustPageShell from './TrustPageShell';

interface PrivacyPolicyProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const sections = [
  {
    title: 'Information We Collect',
    paragraphs: [
      'EV Range Converter is a free informational tool for comparing electric vehicle range standards. You can use the converter without creating an account or directly submitting personal information.',
      'When you visit the website, our hosting, analytics, security, or advertising providers may automatically process limited technical information. This may include your IP address, browser and device type, operating system, referring page, approximate location, pages viewed, timestamps, and interaction or diagnostic data.',
    ],
  },
  {
    title: 'Cookies and Local Storage',
    paragraphs: [
      'We use browser local storage to remember preferences such as light or dark display mode and your selected distance unit. This preference information remains on your device until you clear your browser data.',
      'We and our service providers may also use cookies, web beacons, pixels, IP addresses, and similar technologies to operate the site, measure traffic, prevent fraud, remember choices, and support advertising. You can control cookies through your browser settings, although disabling them may affect some features.',
    ],
  },
  {
    title: 'Google AdSense and Advertising',
    paragraphs: [
      'EV Range Converter may use Google AdSense and other third-party advertising services. Third-party vendors, including Google, may use cookies to serve, personalize, measure, and limit the frequency of ads based on your visit to this website and other websites.',
      'Google and its partners may receive information such as the page URL, IP address, device or browser information, and advertising identifiers. Depending on your location, settings, and consent choices, ads may be personalized or non-personalized.',
      'You can manage how Google personalizes ads in Google Ads Settings. You can also learn how Google uses information from sites that use its services and review industry opt-out choices through the links provided on this page.',
    ],
  },
  {
    title: 'How We Use Information',
    paragraphs: [
      'We use information to provide and maintain the converter, remember preferences, understand which pages and tools are useful, diagnose technical problems, improve performance and content, protect the site from abuse, comply with legal obligations, and support advertising that helps keep the website available without charge.',
      'We do not sell personal information for money. We do not ask users to submit sensitive personal information such as payment card details, government identifiers, health records, or precise geolocation through the converter.',
    ],
  },
  {
    title: 'Third-Party Services and Links',
    paragraphs: [
      'The website may rely on third parties for hosting, analytics, advertising, fonts, performance, or security. Those providers process information under their own privacy policies and terms.',
      'Our pages may contain links to external websites. EV Range Converter does not control and is not responsible for the privacy, security, or content practices of those websites. Review their policies before providing information to them.',
    ],
  },
  {
    title: 'Data Retention and Security',
    paragraphs: [
      'We retain information only for as long as reasonably necessary for the purposes described in this policy, including operational, security, reporting, and legal needs. Retention periods may differ for browser preferences, server logs, analytics data, and advertising data.',
      'We use reasonable administrative and technical measures to protect information. However, no website, network, or storage system can be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'Your Privacy Choices and Rights',
    paragraphs: [
      'You can clear local storage, delete or block cookies, use browser privacy controls, and change advertising personalization settings. Where required by law, you may also have rights to request access, correction, deletion, restriction, portability, or an objection to certain processing of your personal information.',
      'Privacy rights vary by location and may be subject to exceptions. We may need to verify a request before responding. You may also have the right to appeal a decision or contact your local data protection authority.',
    ],
  },
  {
    title: 'Children’s Privacy',
    paragraphs: [
      'EV Range Converter is intended for a general audience and is not directed to children under 13. We do not knowingly collect personal information directly from children under 13. If you believe a child has provided personal information through this website, contact us so the matter can be reviewed.',
    ],
  },
  {
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy to reflect changes to the website, service providers, legal requirements, or operating practices. The effective date on this page identifies the latest revision. Continued use of the website after an update means the revised policy applies to future use.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'For questions about this Privacy Policy or a privacy request, email privacy@evrangeconverter.com. Please do not include sensitive personal information in your message.',
    ],
  },
];

export default function PrivacyPolicy({ darkMode, setDarkMode }: PrivacyPolicyProps) {
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const aside = (
    <div className={`rounded-[1.75rem] border p-6 ${
      darkMode
        ? 'border-white/[0.08] bg-white/[0.035]'
        : 'border-black/[0.06] bg-white/90 shadow-[0_18px_60px_rgba(42,69,55,0.07)]'
    }`}>
      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
        Privacy resources
      </p>
      <div className="mt-5 space-y-3 text-sm font-semibold">
        <a className="flex items-center justify-between gap-2 hover:text-emerald-500" href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings <ExternalLink size={14} /></a>
        <a className="flex items-center justify-between gap-2 hover:text-emerald-500" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">Google partner sites <ExternalLink size={14} /></a>
        <a className="flex items-center justify-between gap-2 hover:text-emerald-500" href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">Advertising opt-outs <ExternalLink size={14} /></a>
      </div>
      <p className={`mt-5 border-t pt-5 text-xs leading-5 ${darkMode ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
        This policy describes current and anticipated website services. It does not guarantee approval by any advertising platform.
      </p>
    </div>
  );

  return (
    <TrustPageShell
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      title="Privacy Policy"
      description="How EV Range Converter handles information, browser preferences, cookies, analytics, advertising, and your privacy choices."
      path="/privacypolicy"
      eyebrow="Clear choices, transparent practices"
      icon={<ShieldCheck size={14} />}
      aside={aside}
    >
      <div className={`mb-9 flex flex-wrap items-center justify-between gap-3 border-b pb-6 ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <p className={`text-sm leading-6 ${mutedText}`}>This policy applies to evrangeconverter.com and its related pages.</p>
        <p className={`rounded-full px-3 py-1.5 text-xs font-bold ${darkMode ? 'bg-white/[0.06] text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Effective July 12, 2026</p>
      </div>
      <div className="space-y-9">
        {sections.map((section, index) => (
          <section key={section.title} className="grid gap-3 sm:grid-cols-[2.25rem_1fr]">
            <span className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-black ${
              darkMode ? 'bg-emerald-300/10 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
            }`}>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">{section.title}</h2>
              <div className={`mt-3 space-y-3 text-sm leading-7 sm:text-base ${mutedText}`}>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </section>
        ))}
      </div>
    </TrustPageShell>
  );
}
