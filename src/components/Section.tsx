import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}

const Section = ({ id, number, title, aside, children }: SectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="page">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b border-primary/40 pb-4 md:mb-10">
          <div>
            <p className="eyebrow">{number}</p>
            <h2 className="glow-text mt-3 font-display text-2xl uppercase leading-none md:text-4xl">{title}</h2>
          </div>
          {aside && <div className="text-sm text-muted-foreground">{aside}</div>}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;
