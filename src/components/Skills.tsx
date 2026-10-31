import Section from './Section';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'Azure', 'AWS', 'Jenkins', 'Ansible', 'GitOps', 'CI/CD'],
    },
    {
      title: 'Languages & Scripts',
      skills: ['Shell Script', 'PowerShell', 'Python', 'YAML', 'C'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Prometheus', 'SigNoz', 'Helm', 'Flux', 'PostgreSQL'],
    },
    {
      title: 'Operating Systems',
      skills: ['Linux', 'Windows'],
    },
  ];

  return (
    <Section id="skills" number="04 // Onboard systems" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="hud-hover border-t border-primary/40 pt-4">
            <h3 className="eyebrow">{category.title}</h3>
            <p className="mt-3 text-xl leading-snug md:text-2xl">{category.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
