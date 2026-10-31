import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/umeshtorawane/' },
    { label: 'GitHub', href: 'https://github.com/torawane1' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="page">
        <div className="hud-frame px-4 py-12 md:px-10 md:py-20">
          <p className="eyebrow">Open a channel // Transmit to</p>
          <a
            href="mailto:torawane.umesh@gmail.com"
            className="glow-text mt-5 block font-mono text-[6vw] leading-none transition-colors hover:text-signal md:text-[5.6vw] xl:text-[4.75rem]"
          >
            torawane.umesh@gmail.com
          </a>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <span className="text-muted-foreground">Copenhagen, Denmark</span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium transition-colors hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
