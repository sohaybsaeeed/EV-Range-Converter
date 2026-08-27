import { Check, Scale } from 'lucide-react';
import TrustPageShell from './TrustPageShell';

interface TermsOfUseProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const sections = [
  {
    title: 'Acceptance of These Terms',
    paragraphs: [
      'These Terms of Use govern your access to and use of evrangeconverter.com, including the EV range converter, the RURS reference material, and every related page on this website. By visiting or using the website, you agree to these terms.',
      'If you do not agree with any part of these terms, please stop using the website. We may refer to EV Range Converter as “we”, “us”, or “our”, and to you as “you” or “the user”.',
    ],
  },
  {
    title: 'What the Service Provides',
    paragraphs: [
      'EV Range Converter is a free informational tool. It converts electric vehicle range figures between the RURS, EPA, WLTP, CLTC, and NEDC standards, and it can apply optional adjustments for cold weather and more demanding driving styles.',
      'The website requires no account, no sign-up, and no payment. All calculations run in your browser, and the figures you enter are not stored on our servers.',
    ],
  },
  {
    title: 'Estimates Only — No Professional Advice',
    paragraphs: [
      'All results are approximations produced by fixed conversion factors derived from published test-cycle data and industry analysis. They are not manufacturer specifications, official homologation figures, or guarantees of the range any specific vehicle will achieve.',
      'Actual range depends on the vehicle, battery age and condition, tyre choice, payload, terrain, traffic, ambient temperature, climate control use, charging habits, and driving style. Treat every result as a planning reference only.',
      'Nothing on this website is engineering, financial, legal, safety, or purchasing advice. Always confirm figures with the vehicle manufacturer or the relevant regulator before relying on them for a purchase, a journey, or any other decision.',
    ],
  },
  {
    title: 'Permitted Use',
    paragraphs: [
      'You may use the converter for personal, educational, editorial, and internal business purposes, and you may share links to its pages, including links that pre-fill a conversion.',
      'If you reproduce results elsewhere, please present them as estimates and credit EV Range Converter as the source.',
    ],
  },
  {
    title: 'Things You Agree Not to Do',
    paragraphs: [
      'You agree not to interfere with the website or the servers and networks that deliver it; not to attempt unauthorised access to any part of the service; not to introduce malware or other harmful code; and not to use automated tools to scrape, overload, or disrupt the site.',
      'You also agree not to copy the website in order to pass it off as your own, not to remove attribution or legal notices, not to interfere with or artificially inflate advertising displayed on the site, and not to use the service in a way that breaks any applicable law or regulation.',
    ],
  },
  {
    title: 'Intellectual Property',
    paragraphs: [
      'The design, text, layout, code, and original methodology of this website — including the Realistic Usable Range Standard (RURS) framework — belong to EV Range Converter and are protected by intellectual property law. These terms grant you a limited, revocable, non-exclusive licence to view and use the site; they do not transfer ownership of anything.',
      'EPA, WLTP, CLTC, and NEDC are the names of test procedures and standards administered by independent bodies. They are referenced here for identification and comparison only. This website is not affiliated with, endorsed by, or sponsored by any regulator, standards body, or vehicle manufacturer.',
    ],
  },
  {
    title: 'Advertising and Third-Party Services',
    paragraphs: [
      'This website is supported by advertising and may display ads served by Google AdSense or comparable providers. Advertisements are supplied by third parties, and their presence next to any content is not an endorsement, review, or recommendation by us.',
      'The site also relies on third parties for hosting, fonts, analytics, and security. Those providers operate under their own terms and privacy policies, and we do not control their content or availability.',
      'Any dealings you have with an advertiser or other third party are between you and that party. We are not responsible for their products, services, offers, or conduct.',
    ],
  },
  {
    title: 'External Links',
    paragraphs: [
      'Some pages link to external websites, such as advertising preference controls or industry opt-out resources. Those links are provided for convenience, and we do not control or take responsibility for the content, accuracy, or practices of any external site. Review the terms and policies of any website you visit.',
    ],
  },
  {
    title: 'Privacy',
    paragraphs: [
      'Your use of this website is also governed by our Privacy Policy, which explains what limited technical information is processed, how browser local storage remembers your display mode and distance unit, and the choices available to you regarding cookies and personalised advertising. The Privacy Policy is incorporated into these terms by reference.',
    ],
  },
  {
    title: 'Availability of the Service',
    paragraphs: [
      'We aim to keep the converter online and accurate, but we provide it without any commitment to uninterrupted availability. We may change, suspend, update, or discontinue any feature, conversion factor, or page at any time, with or without notice, including for maintenance or to reflect improved data.',
    ],
  },
  {
    title: 'Disclaimer of Warranties',
    paragraphs: [
      'The website and all content are provided “as is” and “as available”, without warranties of any kind, whether express or implied. To the fullest extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement.',
      'We do not warrant that the service will be uninterrupted, error-free, secure, or free of harmful components, or that any result, figure, or description will be accurate, complete, current, or suitable for your purposes.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, EV Range Converter and anyone involved in producing this website will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost data, or lost opportunities, arising out of your use of or inability to use the website.',
      'This includes any loss connected to a stranded vehicle, a missed charging stop, a purchasing decision, or any other reliance on an estimate published here. Where liability cannot be excluded by law, it is limited to the minimum extent the law permits.',
      'Some jurisdictions do not allow certain exclusions or limitations, so parts of this section may not apply to you.',
    ],
  },
  {
    title: 'Indemnity',
    paragraphs: [
      'You agree to indemnify and hold harmless EV Range Converter and its operators from any claim, loss, liability, or reasonable expense arising from your misuse of the website, your breach of these terms, or your violation of any law or third-party right.',
    ],
  },
  {
    title: 'Changes to These Terms',
    paragraphs: [
      'We may revise these Terms of Use to reflect changes to the website, our service providers, or legal requirements. The effective date shown on this page identifies the current version, and continued use of the website after a revision means the updated terms apply to your future use.',
    ],
  },
  {
    title: 'Governing Law and Severability',
    paragraphs: [
      'These terms are governed by the laws applicable at the operator’s principal place of business, without regard to conflict-of-law rules, and subject to any mandatory consumer protections available to you where you live.',
      'If any provision of these terms is found unenforceable, it will be limited or removed to the minimum extent necessary, and the remaining provisions will stay in full force. Our failure to enforce a provision is not a waiver of it. These terms, together with the Privacy Policy, form the entire agreement between you and us regarding the website.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'For questions about these Terms of Use, or about data and privacy, email sohaibbeforward@gmail.com or use the contact page at evrangeconverter.com/contactus. Please do not include sensitive personal information in your message.',
    ],
  },
];

const highlights = [
  'The converter is free and needs no account.',
  'Every figure is an estimate, never a guarantee.',
  'Advertising keeps the tool free to use.',
  'Personal use and link sharing are welcome.',
];

export default function TermsOfUse({ darkMode, setDarkMode }: TermsOfUseProps) {
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600';

  const aside = (
    <div className={`rounded-[1.75rem] border p-6 ${
      darkMode
        ? 'border-white/[0.08] bg-white/[0.035]'
        : 'border-black/[0.06] bg-white/90 shadow-[0_18px_60px_rgba(42,69,55,0.07)]'
    }`}>
      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
        The short version
      </p>
      <ul className="mt-5 space-y-4">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
              darkMode ? 'bg-emerald-300/10 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
            }`}>
              <Check size={12} />
            </span>
            <span className={mutedText}>{item}</span>
          </li>
        ))}
      </ul>
      <div className={`mt-5 space-y-3 border-t pt-5 text-sm font-semibold ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <a className="block hover:text-emerald-500 hover:underline" href="/privacypolicy">Read the Privacy Policy</a>
        <a className="block hover:text-emerald-500 hover:underline" href="/aboutus">About EV Range Converter</a>
      </div>
      <p className={`mt-5 border-t pt-5 text-xs leading-5 ${darkMode ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
        This summary is for convenience only. The numbered sections are the terms that apply.
      </p>
    </div>
  );

  return (
    <TrustPageShell
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      title="Terms of Use"
      description="The terms that apply when you use the EV Range Converter, including how our range estimates should be interpreted, what you may do with them, and the limits of our responsibility."
      path="/termsofuse"
      eyebrow="Plain terms for a free tool"
      icon={<Scale size={14} />}
      aside={aside}
    >
      <div className={`mb-9 flex flex-wrap items-center justify-between gap-3 border-b pb-6 ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <p className={`text-sm leading-6 ${mutedText}`}>These terms apply to evrangeconverter.com and its related pages.</p>
        <p className={`rounded-full px-3 py-1.5 text-xs font-bold ${darkMode ? 'bg-white/[0.06] text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Effective August 27, 2026</p>
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
