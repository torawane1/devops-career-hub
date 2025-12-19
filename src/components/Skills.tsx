import { 
  Container, 
  Cloud, 
  GitBranch, 
  Database, 
  Terminal as TerminalIcon,
  Server,
  Monitor,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'primary',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'Azure', 'AWS', 'Jenkins', 'Ansible'],
    },
    {
      title: 'Languages & Scripts',
      icon: TerminalIcon,
      color: 'secondary',
      skills: ['Shell Script', 'PowerShell', 'Python', 'YAML', 'C'],
    },
    {
      title: 'Tools & Platforms',
      icon: Layers,
      color: 'primary',
      skills: ['Git', 'Prometheus', 'Helm', 'Flux', 'PostgreSQL'],
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      color: 'primary',
      skills: ['Linux', 'Windows'],
    },
  ];

  const allSkills = [
    'Docker', 'Kubernetes', 'GIT', 'Terraform', 'Ansible', 'Jenkins',
    'Prometheus', 'YAML', 'PostgreSQL', 'AWS', 'Azure', 'Linux', 'Windows',
    'Shell Script', 'Python', 'Helm', 'Flux', 'SigNoz', 'GitOps', 'CI/CD'
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-header text-2xl font-bold">
          <span className="text-secondary">kubectl get</span> skills
        </h2>

        {/* Skill Cloud */}
        <div className="terminal-window mb-12">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-muted-foreground text-sm">tech-stack.yaml</span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill, index) => (
                <span 
                  key={skill}
                  className="tech-badge"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="terminal-window card-glow">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-muted-foreground text-sm">
                  {category.title.toLowerCase().replace(/\s+/g, '-')}.yml
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${
                    category.color === 'primary' ? 'bg-primary/10 text-primary' :
                    category.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                        category.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/20' :
                        category.color === 'secondary' ? 'bg-secondary/10 text-secondary border border-secondary/20' :
                        'bg-accent/10 text-accent border border-accent/20'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
