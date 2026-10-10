import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const description =
  'How Xbit Innovations LLC collects, uses, and shares information across its websites and apps, and how to request access or deletion.';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description,
  alternates: { canonical: 'https://xbitinnovations.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | Xbit Innovations',
    description,
    url: 'https://xbitinnovations.com/privacy',
    type: 'website',
  },
};

const linkClass =
  'text-brand-primary underline underline-offset-4 hover:text-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary';

const sections = [
  {
    id: 'scope',
    title: 'Who this policy covers',
    content: (
      <>
        <p>
          Xbit Innovations LLC (&ldquo;Xbit,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), based in Arkansas, United States, provides websites,
          mobile applications, web applications, and related services. This Privacy
          Policy applies to xbitinnovations.com and the Xbit apps and services that
          link to it (our &ldquo;Services&rdquo;).
        </p>
        <p>
          The information processed depends on the app, the features you use, and
          your choices. A reference to a feature or provider below applies where
          that feature or provider is used. An app may provide additional privacy
          notices explaining its particular practices; those notices supplement
          this policy. Services with a separate privacy policy are governed by
          that policy.
        </p>
      </>
    ),
  },
  {
    id: 'information',
    title: 'Information we collect',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-4 marker:text-brand-primary">
          <li>
            <strong className="text-brand-light">Information you provide.</strong>{' '}
            Contact details, such as your name, email address, phone number, and
            company; project details, budgets, support messages, and other
            information you submit. Where an app offers accounts or content
            features, this can include profile information, preferences, and
            content you choose to create, upload, or share.
          </li>
          <li>
            <strong className="text-brand-light">Device and usage information.</strong>{' '}
            Depending on the Service and its integrations, this can include IP
            address, device and operating system details, app version, language,
            identifiers, feature interactions, diagnostic logs, and crash reports.
            An IP address may indicate your approximate location. Website inquiry
            forms also send the page address, referring page, campaign parameters,
            and submission time so we can understand the source of a request.
          </li>
          <li>
            <strong className="text-brand-light">Connected services.</strong>{' '}
            If you choose a third-party sign-in or connection, we may receive the
            account identifier, profile details, email, or other information
            authorized through that service. The information depends on the
            permissions you grant and the feature you use.
          </li>
          <li>
            <strong className="text-brand-light">Purchases and transactions.</strong>{' '}
            Where a Service supports purchases, subscriptions, or payments, we may
            process purchase status, receipts, transaction identifiers, and details
            needed to deliver that feature. App stores and payment providers
            process payment information under their own notices. Financial or
            identity-verification features may require additional disclosures at
            the point of collection.
          </li>
          <li>
            <strong className="text-brand-light">Permission-based information.</strong>{' '}
            Features that use location, a camera, photos, a microphone, files, or
            contacts may process the information you authorize or select. The
            permission prompt and the app explain the purpose of access. You can
            manage supported permissions in your device settings.
          </li>
        </ul>
        <p>
          Please do not send passwords, recovery phrases, or unrelated sensitive
          information through our website contact forms or support email.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use information',
    content: (
      <>
        <p>
          We use information to provide the features you request, manage accounts
          and purchases where available, respond to inquiries, schedule meetings,
          provide support, and communicate about our Services. We also use relevant
          technical and usage information to understand performance, fix problems,
          improve features, prevent fraud and abuse, and meet legal obligations.
          Apps with advertising may use information for the advertising purposes
          described below.
        </p>
        <p>
          Where applicable law requires a legal basis, we process information to
          perform a contract with you, with your consent, to comply with legal
          obligations, or for legitimate interests such as operating and securing
          our Services, subject to your rights. Where processing relies on consent,
          you may withdraw it.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    title: 'Advertising, analytics, and cookies',
    content: (
      <>
        <p>
          Apps that display advertising may integrate Google AdMob or other
          advertising providers. In apps using AdMob, Google&apos;s advertising
          software can collect and share IP addresses, device or advertising
          identifiers, app interactions, and diagnostic information for ad
          delivery, measurement, analytics, and fraud prevention. The information
          collected depends on the software version, configuration, permissions,
          and privacy choices.
        </p>
        <p>
          Advertising providers may use cookies, software development kits (SDKs),
          web beacons, local storage, and similar technologies to collect
          information. Third parties may place or read cookies in your browser or
          use IP addresses and other identifiers as a result of ad serving.
          Personalized ads may use activity across apps and websites. Ads that are
          not personalized may still involve information processing for delivery,
          frequency limits, measurement, and security.
        </p>
        <p>
          Where an app uses analytics or crash-reporting services, those providers
          may process usage events, device information, identifiers, and
          diagnostics to help us understand and improve the app. Where a Service
          integrates Meta/Facebook login, advertising, or measurement tools, Meta
          may process information associated with that integration under its
          privacy policy and your settings.
        </p>
        <p>
          Learn more about{' '}
          <a className={linkClass} href="https://policies.google.com/technologies/partner-sites">
            how Google uses information from apps and sites that use its services
          </a>, the{' '}
          <a className={linkClass} href="https://policies.google.com/privacy">
            Google Privacy Policy
          </a>, and the{' '}
          <a className={linkClass} href="https://www.facebook.com/privacy/policy/">
            Meta Privacy Policy
          </a>.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'When information is shared',
    content: (
      <>
        <p>
          Information may be shared with providers that support hosting, storage,
          authentication, email, customer support, payments, analytics, and
          advertising, where those services are used. Our website inquiry workflow
          may use Google Sheets for storage. Meeting scheduling uses Calendly;
          loading or using its embedded calendar lets Calendly receive information
          from your browser. See the{' '}
          <a className={linkClass} href="https://calendly.com/legal/privacy-notice">
            Calendly Privacy Notice
          </a>.
        </p>
        <p>
          We may also share information when you direct us to, when required by
          law, to protect rights and safety or investigate abuse, or in connection
          with a merger, acquisition, or transfer of our business, subject to
          applicable protections. Content you intentionally publish or send to
          another person is available to the audience you choose.
        </p>
        <p>
          Advertising-related disclosures may be considered a &ldquo;sale,&rdquo;
          &ldquo;sharing,&rdquo; or &ldquo;targeted advertising&rdquo; under some
          privacy laws. Where those definitions apply, you may exercise applicable
          opt-out rights using the privacy controls provided by the Service or by
          contacting us. External sites and services have their own privacy
          practices.
        </p>
      </>
    ),
  },
  {
    id: 'choices',
    title: 'Your privacy choices',
    content: (
      <>
        <p>
          Use the privacy or consent settings offered in an app to manage available
          advertising and analytics choices. You can also manage app permissions,
          notifications, and tracking or advertising settings through your device,
          and manage cookies through your browser. Google offers additional{' '}
          <a className={linkClass} href="https://adssettings.google.com/">
            advertising settings
          </a>. Settings may vary by device and region; disabling a permission may
          prevent the related feature from working.
        </p>
        <p>
          Where consent is required for tracking, advertising, or access to device
          information, it must be obtained through the relevant consent flow. This
          policy does not itself provide that consent. You can decline optional
          information requests, disconnect linked accounts through the provider,
          and contact us about your privacy choices. Disconnecting an account or
          uninstalling an app does not automatically delete information already
          held by us or a provider.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Retention, security, and transfers',
    content: (
      <>
        <p>
          We retain personal information for as long as needed for the purposes
          described in this policy, including providing the Service, maintaining
          necessary business records, resolving disputes, preventing fraud, and
          meeting legal obligations. Retention depends on the type of information,
          the Service, the account relationship, and any required retention period.
          Information that is no longer needed is deleted or anonymized, subject
          to applicable requirements and backup retention cycles.
        </p>
        <p>
          We use reasonable technical and organizational measures intended to
          protect personal information. No system or method of transmission can
          guarantee complete security. Our Services and providers may process
          information in the United States and other countries, whose privacy laws
          may differ from those where you live. Where required, transfers are
          subject to appropriate legal safeguards.
        </p>
        <p>
          If you use a feature that submits transactions to a public blockchain,
          wallet addresses and transaction details may become publicly visible.
          Public blockchain records generally cannot be changed or deleted by us.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Access and other privacy rights',
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have rights to
          access, correct, delete, or obtain a copy of your personal information;
          restrict or object to certain processing; withdraw consent; or opt out
          of targeted advertising and qualifying sales or sharing. You may also
          have a right to appeal a decision or complain to your local data
          protection authority.
        </p>
        <p>
          Contact{' '}
          <a className={linkClass} href="mailto:info@xbitinnovations.com">
            info@xbitinnovations.com
          </a>{' '}
          with the app or Service name and your request. We may need to verify your
          identity before acting, and will respond within the period required by
          applicable law. If an exception prevents us from fulfilling a request,
          we will explain it. You may contact us at the same address to request a
          review of our decision.
        </p>
      </>
    ),
  },
  {
    id: 'data-deletion',
    title: 'Request account or data deletion',
    content: (
      <>
        <p>
          You can request deletion of an Xbit app account or personal information
          without signing in. Email{' '}
          <a className={linkClass} href="mailto:info@xbitinnovations.com?subject=Data%20deletion%20request">
            info@xbitinnovations.com with the subject &ldquo;Data deletion request&rdquo;
          </a>.
        </p>
        <ol className="list-decimal pl-5 space-y-3 marker:text-brand-primary">
          <li>Identify the app or Service you used.</li>
          <li>Include the email address or account identifier associated with it.</li>
          <li>Tell us whether to delete your account and associated data, or specific information.</li>
        </ol>
        <p>
          Do not include passwords, payment credentials, or recovery phrases. After
          any necessary identity verification, we will delete the requested
          information we control, except records we need to retain for legal,
          security, or fraud-prevention purposes. We will explain relevant
          exceptions and the status of your request. Where an app provides an
          in-app deletion option, you may use that as well.
        </p>
        <p>
          For data received through Facebook or another connected account, name
          that connection in your request. Removing the app from the provider&apos;s
          connected-app settings can stop future access but does not replace a
          deletion request to us. Information held independently by a third-party
          provider must be managed through that provider. Deleting an Xbit account
          does not by itself cancel an app-store subscription; manage subscriptions
          through the store where you purchased them.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children’s privacy',
    content: (
      <p>
        Our business website is intended for a general business audience. For an
        app, refer to its stated audience and any additional privacy notices for
        age-related information. Children&apos;s information is subject to
        additional legal protections, including parental consent where required.
        If you are a parent or guardian and believe a child has provided personal
        information without the required permission, contact us with the app name
        so we can investigate and arrange deletion where appropriate.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Updates and contact',
    content: (
      <>
        <p>
          We may update this policy as our Services or practices change. The date
          at the top identifies the latest revision. Where required, we will
          provide additional notice or seek consent for material changes.
        </p>
        <p>
          For privacy questions or requests, contact Xbit Innovations LLC,
          Arkansas, United States, at{' '}
          <a className={linkClass} href="mailto:info@xbitinnovations.com">
            info@xbitinnovations.com
          </a>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-brand-dark">
        <header className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-[oklch(22%_0.01_230)]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm uppercase tracking-[0.15em] text-brand-primary font-medium mb-4">
              Xbit Innovations LLC
            </p>
            <h1
              className="font-display font-bold text-brand-light leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 4.5rem)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-[oklch(75%_0.01_230)] leading-relaxed max-w-2xl mt-6">
              How we handle information across our websites and apps, and the
              choices available to you.
            </p>
            <p className="text-sm text-[oklch(65%_0.01_230)] mt-6">
              Effective and last updated: <time dateTime="2026-10-10">October 10, 2026</time>
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="Privacy policy sections" className="lg:sticky lg:top-28 self-start">
            <h2 className="text-sm font-semibold text-brand-light mb-5">On this page</h2>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-[oklch(70%_0.01_230)] hover:text-brand-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-12 md:space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2
                  id={`${section.id}-heading`}
                  className="font-display text-2xl md:text-3xl font-semibold text-brand-light mb-5 leading-tight"
                >
                  {section.title}
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-[oklch(75%_0.01_230)] wrap-break-word">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
