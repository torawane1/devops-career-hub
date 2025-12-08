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
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Terraform', level: 90 },
        { name: 'Azure', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Jenkins', level: 85 },
        { name: 'Ansible', level: 75 },
      ],
    },
    {
      title: 'Languages & Scripts',
      icon: TerminalIcon,
      color: 'secondary',
      skills: [
        { name: 'Shell Script', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'YAML', level: 95 },
        { name: 'C', level: 60 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Layers,
      color: 'accent',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Prometheus', level: 80 },
        { name: 'Helm', level: 85 },
        { name: 'Flux', level: 85 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      color: 'primary',
      skills: [
        { name: 'Linux', level: 90 },
        { name: 'Windows', level: 80 },
      ],
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

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className={`${
                          category.color === 'primary' ? 'text-primary' :
                          category.color === 'secondary' ? 'text-secondary' :
                          'text-accent'
                        }`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${
                            category.color === 'primary' ? 'bg-primary' :
                            category.color === 'secondary' ? 'bg-secondary' :
                            'bg-accent'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(catIndex * 200) + (index * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
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
