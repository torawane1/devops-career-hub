import { ArrowRight } from 'lucide-react';
import profileImage from '@/assets/profile.webp';

const Hero = () => {
  const facts = [
    { label: 'Current post', value: 'Sr. DevOps Engineer, WPP Enterprise Solutions' },
    { label: 'Home port', value: 'Copenhagen, Denmark' },
    { label: 'Primary systems', value: 'Azure, Kubernetes, Terraform, GitOps' },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Planet horizon glow behind the title */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(ellipse_75%_70%_at_50%_0%,hsl(var(--primary)/0.2),transparent_72%)]"
      />

      <div className="page pb-16 pt-12 md:pb-24 md:pt-20">
        <p className="rise eyebrow">Personnel file // Sr. DevOps Engineer</p>
        <h1 className="rise glow-text mt-5 font-display text-[9vw] uppercase leading-[1.1] sm:text-[5.5vw] xl:text-[4.5rem]">
          <span className="block">Umesh</span>
          <span className="block text-primary">Torawane</span>
        </h1>

        <div className="rise mt-8 grid gap-8 [animation-delay:150ms] md:mt-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-xl text-xl leading-snug md:text-2xl">
              Senior DevOps engineer building and managing cloud infrastructure at scale, with Kubernetes, GitOps and reliable
              production releases.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-primary-foreground shadow-[0_0_24px_hsl(var(--primary)/0.4)] transition-shadow hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)]"
              >
                Open a channel
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#experience" className="link-underline text-sm font-medium">
                View mission log
              </a>
            </div>
          </div>

          <dl className="space-y-3 md:col-span-4 md:col-start-9">
            {facts.map((fact) => (
              <div key={fact.label} className="hud-hover border-t border-primary/30 pt-3">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo shown as a flight-deck viewport */}
        <div className="rise hud-frame mt-12 overflow-hidden [animation-delay:300ms] md:mt-16">
          <img
            src={profileImage}
            alt="Umesh Torawane working at a laptop in a dim room lit by a desk lamp"
            width={2000}
            height={1333}
            className="aspect-[4/3] w-full object-cover object-[40%_50%] sm:aspect-[21/9]"
          />
          <div className="scanlines" />
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="reticle absolute left-[42%] top-[34%] hidden h-56 w-56 text-primary/60 sm:block"
            style={{ translate: '-50% -50%' }}
          >
            <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 6" />
            <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="30 18" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 z-[1] flex flex-wrap justify-between gap-x-6 bg-gradient-to-t from-background/90 to-transparent p-3 pt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-primary md:p-4 md:text-xs">
            <span>Viewport 01</span>
            <span>55.68°N 12.57°E</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
