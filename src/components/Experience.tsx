import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Sr. DevOps Release Engineer',
      company: 'VML MAP',
      location: 'Copenhagen, Denmark',
      period: 'June 2024 – Present',
      status: 'current',
      highlights: [
        'Drive Proof of Concept (POC) initiatives for new Azure features and DevOps tools',
        'Manage production releases end-to-end, from planning to monitoring',
        'Implement and maintain Infrastructure as Code (IaC) using Terraform',
        'Manage Kubernetes (AKS) clusters with Flux and Helm, adopting GitOps',
        'Monitor system performance using SigNoz as observability solution',
      ],
      tech: ['Azure', 'Terraform', 'Kubernetes', 'Flux', 'Helm', 'SigNoz'],
    },
    {
      title: 'Solutions Delivery Consultant',
      company: 'IBM Denmark ApS',
      location: 'Copenhagen, Denmark',
      period: 'October 2023 – June 2024',
      status: 'completed',
      highlights: [
        'Orchestrated migration of Verify Directory (LDAP) to Azure Kubernetes Service',
        'Designed peer-to-peer replication topology in AKS for scalability',
        'Executed data migration from DB2 to PostgreSQL on Azure Cloud',
        'Leveraged Kubernetes operators for optimized containerized deployments',
      ],
      tech: ['Azure', 'Kubernetes', 'PostgreSQL', 'DB2', 'LDAP'],
    },
    {
      title: 'Technical Account Manager (Student Assistant)',
      company: 'IBM Denmark',
      location: 'Copenhagen, Denmark',
      period: 'March 2022 – September 2023',
      status: 'completed',
      highlights: [
        'Managed technical relationships with enterprise clients',
        'Provided technical guidance on IBM cloud solutions',
      ],
      tech: ['IBM Cloud', 'Customer Relations'],
    },
    {
      title: 'Software Services Engineer',
      company: 'IBM India Pvt. Ltd.',
      location: 'Pune, India',
      period: 'April 2017 – January 2021',
      status: 'completed',
      highlights: [
        'Specialization in Identity Access Management domain',
        'Product expertise in IBM Security Verify Access (SSO, MFA, Federation) & Verify Directory (LDAP)',
        'Deployment experience of ISVA & ISVD with on-prem and cloud solutions',
        'Strong knowledge of SSL implementation and troubleshooting',
        'Maintaining high availability of SSO components using Distributed cache management',
      ],
      tech: ['Python', 'Ansible', 'Kubernetes', 'Wireshark', 'AWS', 'EC2', 'S3'],
    },
    {
      title: 'Software Engineer - SQL Developer',
      company: 'Yardi',
      location: 'Pune, India',
      period: 'June 2016 – March 2017',
      status: 'completed',
      highlights: [
        'Analyze existing SQL queries for performance improvements',
        'Identify and fix performance bottlenecks in SQL queries, database design, and system configuration',
        'Develop procedures and scripts for data migration',
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
                <div className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 bg-background ${
                  exp.status === 'current' 
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
