import { Server, Cloud, GitBranch, Container } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Container, label: 'Containerization', desc: 'Docker & Kubernetes' },
    { icon: Cloud, label: 'Cloud Platforms', desc: 'Azure & AWS' },
    { icon: GitBranch, label: 'GitOps', desc: 'Flux & Helm' },
    { icon: Server, label: 'IaC', desc: 'Terraform & Ansible' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-header text-2xl font-bold">
          <span className="text-secondary">cat</span> about.md
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Text */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="ml-4 text-muted-foreground text-sm">README.md</span>
            </div>
            <div className="terminal-body text-sm leading-relaxed space-y-4">
              <p>
                <span className="text-secondary"># </span>
                <span className="text-primary font-semibold">Hi, I'm Umesh!</span>
              </p>
              <p className="text-muted-foreground">
                A passionate <span className="text-foreground">DevOps Engineer</span> based in Copenhagen, Denmark, with expertise in building and managing cloud infrastructure at scale.
              </p>
              <p className="text-muted-foreground">
                With a <span className="text-foreground">Master's in Technology Management</span> from Aalborg University and <span className="text-foreground">Bachelor's in Information Technology</span> from Pune University, I bridge the gap between technical excellence and strategic thinking.
              </p>
              <p className="text-muted-foreground">
                Currently at <span className="text-primary">VML MAP</span>, I drive infrastructure automation, manage Kubernetes clusters with GitOps, and ensure reliable production releases.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label}
                className="terminal-window card-glow group cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
            <span className="text-secondary">$</span> tree education/
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="terminal-window p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-secondary/10 text-secondary">
                  <span className="text-lg">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Master of Science</h4>
                  <p className="text-primary text-sm">Technology Management</p>
                  <p className="text-muted-foreground text-sm">Aalborg University • June 2023</p>
                  <p className="text-muted-foreground text-xs mt-1">Copenhagen, Denmark</p>
                </div>
              </div>
            </div>
            <div className="terminal-window p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-secondary/10 text-secondary">
                  <span className="text-lg">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Engineering</h4>
                  <p className="text-primary text-sm">Information Technology</p>
                  <p className="text-muted-foreground text-sm">Pune University • May 2016</p>
                  <p className="text-muted-foreground text-xs mt-1">Pune, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="terminal-window p-6">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <span className="text-secondary">▸</span> Graduate
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Machine Learning
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Cyber Security
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> User Experience and Ethics
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Internet Services and Governance
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Entrepreneurship
                </li>
              </ul>
            </div>
            <div className="terminal-window p-6">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <span className="text-secondary">▸</span> Undergraduate
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Data Structure & Algorithms
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Object Oriented Programming
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Operating Systems
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Databases
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-secondary">•</span> Computer Networks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
