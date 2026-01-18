import { Briefcase, CheckCircle, Target } from 'lucide-react';

const ProjectWork = () => {
  const projects = [
    {
      title: 'Azure DevOps Configuration & Variable Group Migration',
      role: 'DevOps Engineer',
      environment: 'Azure DevOps, YAML Pipelines, Git, Multi-Environment Setup',
      color: 'from-blue-500 to-cyan-500',
      icon: '⚙️',
      workDone: [
        'Migrated 100+ Azure DevOps variable groups into Git-based YAML configuration templates to improve maintainability and version control.',
        'Designed a structured config repository with environment separation (dev, stage, prod, test).',
        'Updated multiple CI/CD pipelines to reference the new configuration templates.',
        'Validated pipeline executions across environments to ensure zero regression.',
        'Reduced configuration duplication and enabled easier onboarding for new services.',
      ],
      impact: [
        'Improved release reliability and traceability',
        'Enabled infrastructure and app configuration as code',
        'Reduced manual errors during releases',
      ],
    },
    {
      title: 'CI/CD Pipeline Optimization & Release Process Improvements',
      role: 'DevOps Engineer',
      environment: 'Azure DevOps Pipelines, YAML, Terraform, Docker',
      color: 'from-green-500 to-emerald-500',
      icon: '🚀',
      workDone: [
        'Improved release pipelines by refactoring YAML definitions and removing legacy configurations.',
        'Investigated and fixed pipeline failures related to variable resolution, secret handling, and date formatting issues.',
        'Standardized pipeline stages for build, deploy, and validation.',
        'Assisted teams in splitting large releases into phased rollouts to reduce risk.',
        'Supported Terraform execution exclusively through pipelines, ensuring compliance and auditability.',
      ],
      impact: [
        'Faster and more predictable deployments',
        'Reduced production deployment risks',
        'Better pipeline readability and reuse',
      ],
    },
    {
      title: 'Cloud Infrastructure & Terraform Automation',
      role: 'DevOps Engineer',
      environment: 'Microsoft Azure, Terraform',
      color: 'from-purple-500 to-pink-500',
      icon: '☁️',
      workDone: [
        'Supported infrastructure provisioning and changes using Terraform executed via CI/CD pipelines.',
        'Assisted in debugging Terraform plan/apply failures across environments.',
        'Ensured correct state handling and environment isolation.',
        'Helped teams comply with internal policies by enforcing pipeline-only Terraform execution.',
      ],
      impact: [
        'Consistent infrastructure deployments',
        'Reduced configuration drift',
        'Improved security and governance',
      ],
    },
    {
      title: 'Environment Performance & Database Issue Investigation',
      role: 'DevOps Engineer',
      environment: 'Stage & QA Environments',
      color: 'from-orange-500 to-yellow-500',
      icon: '🔍',
      workDone: [
        'Collaborated with QA teams to investigate performance issues in stage environments.',
        'Identified required metrics and logs for DevOps-side investigation (DB latency, query execution time, pipeline logs).',
        'Assisted in narrowing down bottlenecks at database and application integration level.',
        'Provided actionable insights to development teams for fixes.',
      ],
      impact: [
        'Faster root cause analysis',
        'Reduced QA blockers before production releases',
      ],
    },
    {
      title: 'Access Management & Developer Enablement',
      role: 'DevOps Engineer',
      environment: 'Azure DevOps, GitHub, Internal Access Systems',
      color: 'from-indigo-500 to-blue-500',
      icon: '🔐',
      workDone: [
        'Handled multiple access and permission requests for developers and support teams.',
        'Configured secure access to pipelines, repositories, and variables.',
        'Supported GitHub Copilot license requests and coordination with approvers.',
        'Enabled smooth onboarding for new developers by resolving access blockers quickly.',
      ],
      impact: [
        'Improved developer productivity',
        'Reduced onboarding delays',
        'Maintained security compliance',
      ],
    },
    {
      title: 'Platform Support & Incident Resolution',
      role: 'DevOps Engineer',
      environment: 'Catalyst, IT Support, Application Platforms',
      color: 'from-red-500 to-pink-500',
      icon: '🛠️',
      workDone: [
        'Resolved platform-related tickets including authentication, environment access, and deployment issues.',
        'Supported internal tools and applications used across multiple teams.',
        'Acted as a bridge between developers, QA, and infrastructure teams.',
        'Ensured timely resolution of service requests and incidents.',
      ],
      impact: [
        'High operational stability',
        'Strong cross-team collaboration',
        'Reduced downtime and support escalations',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-header text-2xl font-bold">
          <span className="text-secondary">cat</span> project-work.md
        </h2>

        {/* Projects banner */}
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-muted-foreground text-sm">project-summary.log</span>
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Briefcase className="w-6 h-6 text-terminal-green" />
              <span className="text-lg font-semibold text-terminal-green">
                {projects.length} Key Projects Delivered
              </span>
              <Briefcase className="w-6 h-6 text-terminal-green" />
            </div>
            <p className="text-muted-foreground text-sm">
              Real-world DevOps engineering experiences across cloud infrastructure, CI/CD, and platform operations
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="terminal-window hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-muted-foreground text-sm">project-{index + 1}.yml</span>
              </div>
              
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-2 py-1 bg-muted rounded text-muted-foreground">
                        <strong>Role:</strong> {project.role}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong className="text-foreground">Environment:</strong> {project.environment}
                    </p>
                  </div>
                </div>

                {/* Work Done Section */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-terminal-green mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Work Done:
                  </h4>
                  <ul className="space-y-2">
                    {project.workDone.map((work, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-terminal-green flex-shrink-0">→</span>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Section */}
                <div>
                  <h4 className="text-sm font-semibold text-terminal-yellow mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Impact:
                  </h4>
                  <ul className="space-y-1">
                    {project.impact.map((imp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-terminal-yellow flex-shrink-0">✓</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
