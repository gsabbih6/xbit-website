import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import CTASection from '@/app/components/CTASection';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Xbit Innovations — our mission, our approach to technology consulting, and why businesses trust us to build their future.',
};

const VALUES = [
  {
    title: 'Engineering Excellence',
    description:
      'Every system we build is designed for the long run — clean architecture, exhaustive testing, and documentation that empowers your team.',
  },
  {
    title: 'Client Partnership',
    description:
      "We don't disappear after deployment. We embed with your team, understand your business, and iterate until the product is right.",
  },
  {
    title: 'Transparent Communication',
    description:
      'No black boxes. Weekly demos, shared repositories, and honest timelines — because trust is built through visibility.',
  },
];

const TECH_STACK = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Python',
  'Flutter',
  'AWS',
  'XRP Ledger',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'GROMACS',
  'OpenMM',
  'FastAPI',
  'Machine Learning',
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

      {/* Page Hero */}
      <section className="bg-brand-dark pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 30% 60%, oklch(72% 0.14 180 / 0.05) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-sm uppercase tracking-[0.2em] text-brand-primary font-medium mb-4 block">
            ABOUT US
          </span>
          <h1
            className="font-display font-bold text-[oklch(95%_0.005_230)] leading-[1.08] max-w-3xl whitespace-pre-line"
            style={{
              fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 4.5rem)',
            }}
          >
            {'Building the Future,\nOne Line of Code at a Time'}
          </h1>
          <p className="text-[oklch(60%_0.01_230)] text-lg md:text-xl leading-relaxed max-w-2xl mt-6">
            We exist to bridge the gap between enterprise-grade technology and
            the businesses that need it most — delivering Silicon Valley
            execution to companies everywhere.
          </p>
        </div>
      </section>

      {/* Mission section — light bg */}
      <section className="bg-brand-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Story — 3/5 width */}
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary mb-4 block">
                Our Story
              </span>
              <h2
                className="font-display font-bold text-brand-dark leading-tight mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)' }}
              >
                Born in Arkansas, Built for the World
              </h2>
              <div className="space-y-5 text-[oklch(35%_0.01_230)] text-base leading-relaxed">
                <p>
                  Xbit Innovations was founded with a clear observation: the
                  technology available to mid-market businesses wasn&apos;t
                  keeping pace with what enterprises had access to. The tools
                  were either too expensive, too generic, or required teams most
                  growing companies couldn&apos;t hire.
                </p>
                <p>
                  We set out to change that. Based in Arkansas, we bring the
                  rigor of enterprise software engineering — clean architecture,
                  automated testing, CI/CD pipelines, and security-first
                  thinking — to companies that deserve better technology without
                  the enterprise price tag.
                </p>
                <p>
                  Our mission is simple: build software that genuinely solves
                  problems. Not feature-bloated platforms, not cookie-cutter
                  templates — but thoughtfully architected systems designed
                  around how your business actually works.
                </p>
              </div>
            </div>

            {/* Values — 2/5 width */}
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary mb-6 block">
                Our Values
              </span>
              <div className="space-y-8">
                {VALUES.map((value, i) => (
                  <div
                    key={value.title}
                    className="relative pl-6 border-l-2 border-brand-primary/30"
                  >
                    <span className="text-[oklch(75%_0.01_230)] text-xs font-semibold uppercase tracking-[0.15em] mb-1 block">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-brand-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[oklch(40%_0.01_230)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Founder section — dark */}
      <section className="bg-brand-dark py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 40% 50% at 70% 40%, oklch(72% 0.14 180 / 0.04) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary mb-4 block">
              Leadership
            </span>
            <h2
              className="font-display font-bold text-[oklch(92%_0.01_230)] leading-tight mb-2"
              style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)' }}
            >
              Engineering &amp; Research
            </h2>
            <p className="text-brand-primary text-sm font-medium mb-6">
              Built by computational scientists and senior engineers
            </p>
            <p className="text-[oklch(60%_0.01_230)] text-lg leading-relaxed mb-6">
              Our core team brings together expertise in computational science, chemical
              engineering, and structure-based drug discovery. We specialize in molecular
              dynamics simulations, machine learning-driven property prediction, and
              building complex, scalable software systems.
            </p>
            <p className="text-[oklch(50%_0.01_230)] text-base leading-relaxed mb-8">
              Before forming Xbit Innovations, our leadership built production
              software at scale — from engineering systems at Walmart Inc. to
              computational drug discovery pipelines at Eli Lilly and Merck. We
              bring deep infrastructure experience in HPC pipeline design,
              automation, and large-scale molecular data management. This rare
              combination of Fortune 500 engineering rigor and academic research
              excellence powers every product and consulting engagement at Xbit.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                'Ph.D., Computational Science',
                'Walmart Inc.',
                'Eli Lilly',
                'Merck',
                'NIH SBIR Grantee',
              ].map((credential) => (
                <span
                  key={credential}
                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-[oklch(18%_0.01_230)] text-[oklch(55%_0.01_230)] border border-[oklch(22%_0.01_230)]"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack — light */}
      <section className="bg-brand-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary mb-3 block">
              Technology
            </span>
            <h2
              className="font-display font-bold text-brand-dark leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)' }}
            >
              Our Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                className="group card-hover bg-white rounded-xl px-5 py-4 border border-[oklch(90%_0.005_230)] text-center"
              >
                <span className="font-display text-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors duration-200">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      </main>
      <Footer />
    </>
  );
}
