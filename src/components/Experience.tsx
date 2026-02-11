import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'VML MAP',
      location: 'Copenhagen, Denmark',
      period: 'June 2024 – Present',
      status: 'current',
      highlights: [
        'Architected and maintained multi-region Azure infrastructure using Terraform, implementing remote state management, state locking, and modular design patterns to ensure scalability and zero-drift environments.',
        'Orchestrated production-grade Kubernetes (AKS) clusters, implementing rigorous readiness/liveness probes, and NGINX Ingress controllers for seamless traffic management.',
        'Designed and implemented comprehensive observability stacks using SigNoz, defining SLOs/SLIs and tuning alerts to reduce fatigue while ensuring 99.9% system availability.',
        'Championed GitOps practices using Flux CD for continuous delivery, enabling automated drift detection and rapid rollback capabilities for microservices architectures.',
        'Hardened cluster security through strict RBAC policies and workload identity federation for secure cloud resource access.',
      ],
      tech: ['Azure', 'Terraform', 'Kubernetes', 'Flux', 'Helm', 'KEDA', 'SigNoz', 'Powershell'],
    },
    {
      title: 'Solutions Delivery Consultant',
      company: 'IBM Denmark ApS',
      location: 'Copenhagen, Denmark',
      period: 'October 2023 – June 2024',
      status: 'completed',
      highlights: [
        'Led the migration of stateful workloads (verify Directory/LDAP) to Azure Kubernetes Service, designing highly available storage solutions and implementing robust backup/restore strategies.',
        'Engineered a peer-to-peer replication topology within AKS to ensure data consistency and high availability across availability zones.',
        'Executed complex database migrations from DB2 to PostgreSQL on Azure, optimizing query performance and ensuring data integrity with zero downtime cutover strategies.',
        'Developed custom Kubernetes Operators to automate complex operational tasks, significantly reducing manual toil and improving deployment reliability.',
      ],
      tech: ['Azure', 'Kubernetes', 'PostgreSQL', 'DB2', 'LDAP', 'Powershell', 'Ansible'],
    },
    {
      title: 'Technical Account Manager (Student Assistant)',
      company: 'IBM Denmark ApS',
      location: 'Copenhagen, Denmark',
      period: 'March 2022 – September 2023',
      status: 'completed',
      highlights: [
        'Owned technical enterprise relationships, driving incident resolution through rigorous Root Cause Analysis (RCA) and detailed postmortem documentation.',
        'Provided architectural guidance on cloud migrations and best practices, focusing on cost optimization, security compliance, and operational excellence.',
        'Diagnosed and resolved complex production incidents, reducing Mean Time to Resolution (MTTR) by collaborating effectively with engineering and support teams.',
        'Identified and remediated recurring issues to improve overall system stability and customer satisfaction.',
      ],
      tech: ['IBM Cloud', 'Customer Relations', 'Trusted Advisor'],
    },
    {
      title: 'Software Services Engineer',
      company: 'IBM India Pvt Ltd',
      location: 'Pune, India',
      period: 'April 2017 – January 2021',
      status: 'completed',
      highlights: [
        highlights: [
          'Specialized in Identity Access Management (IAM) and DevSecOps, implementing secure authentication flows (SSO, MFA, OIDC/SAML) for enterprise applications.',
          'Managed and secured IBM Security Verify Access/Directory deployments, hardening network perimeters with reverse proxies, WAFs, and mutual TLS (mTLS) configurations.',
          'Deep troubleshooting of network latency and connectivity issues using TCP dump analysis and packet inspection to ensure optimal application performance.',
          'Designed High Availability (HA) architectures for critical identity services, utilizing distributed session caching and load balancing strategies to maintain 99.99% uptime.',
        ],
        tech: ['Reverse Proxy', 'Python', 'Ansible', 'Kubernetes', 'TCP/IP', 'LDAP', 'SSL', 'Distributed Cache', 'HTTP Headers, Cookies, Sessions', 'Backup & Disaster Recovery'],
    },
    {
      title: 'Software Engineer - SQL Developer',
      company: 'Yardi',
      location: 'Pune, India',
      period: 'June 2016 – March 2017',
      status: 'completed',
      highlights: [
        'Optimized critical SQL queries and database schemas, resulting in measurable performance improvements for high-traffic core applications.',
        'Automated data migration and transformation tasks using complex SQL scripts and stored procedures, ensuring data accuracy and consistency.',
        'Identified and resolved database bottlenecks through query plan analysis and index optimization.',
      ],
      tech: ['SQL', 'Database Optimization', 'Data Migration'],
    },
    {
      title: 'Student Intern (Project Sponsorship)',
      company: 'CDAC India',
      location: 'Pune, India',
      period: 'August 2015 – April 2016',
      status: 'completed',
      highlights: [
        'Worked on sponsored engineering project',
        'Applied theoretical knowledge to real-world applications',
      ],
      tech: ['Research', 'Development'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-header text-2xl font-bold">
          <span className="text-secondary">git log</span> --experience
        </h2>

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Pipeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16 md:pl-20">
                {/* Pipeline node */}
                <div className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 bg-background ${exp.status === 'current'
                    ? 'border-primary animate-pulse-glow'
                    : 'border-secondary'
                  }`} />

                {/* Connector */}
                <div className="absolute left-[26px] md:left-[34px] top-8 w-6 md:w-8 h-0.5 bg-border" />

                {/* Experience Card */}
                <div className="terminal-window card-glow overflow-hidden">
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <span className="ml-4 text-muted-foreground text-xs md:text-sm truncate">
                      {exp.company.toLowerCase().replace(/\s+/g, '-')}.log
                    </span>
                    {exp.status === 'current' && (
                      <span className="ml-auto px-2 py-0.5 text-xs bg-primary/20 text-primary rounded">
                        RUNNING
                      </span>
                    )}
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
