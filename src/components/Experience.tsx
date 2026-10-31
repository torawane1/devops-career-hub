import { Plus } from 'lucide-react';
import Section from './Section';

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const CURRENT_BAR = 'bg-signal shadow-[0_0_14px_hsl(var(--signal)/0.7)]';
const WORK_BAR = 'bg-primary/70';
const STUDY_BAR = 'border border-primary bg-primary/10';

const now = new Date();
const today = now.getFullYear() + now.getMonth() / 12;

const toYear = (date: string) => {
  const [month, year] = date.trim().toLowerCase().split(' ');
  return month === 'present' ? today : Number(year) + MONTHS.indexOf(month) / 12;
};

const Experience = () => {
  const experiences = [
    {
      title: 'Sr. DevOps Engineer',
      company: 'WPP Enterprise Solutions',
      location: 'Copenhagen, Denmark',
      period: 'June 2024 – Present',
      highlights: [
        'Architected and maintained multi-region Azure infrastructure using Terraform, implementing remote state management, state locking, and modular design patterns to ensure scalability and zero-drift environments.',
        'Orchestrated production-grade Kubernetes (AKS) clusters, implementing rigorous readiness/liveness probes, and NGINX Ingress controllers for seamless traffic management.',
        'Designed and implemented comprehensive observability stacks using SigNoz, defining SLOs/SLIs and tuning alerts to reduce fatigue while ensuring 99.9% system availability.',
        'Championed GitOps practices using Flux CD for continuous delivery, enabling automated drift detection and rapid rollback capabilities for microservices architectures.',
        'Hardened cluster security through strict RBAC policies and workload identity federation for secure cloud resource access.',
      ],
      tech: ['Azure', 'Terraform', 'Kubernetes', 'Flux', 'Helm', 'Kustomize', 'SigNoz', 'Powershell'],
    },
    {
      title: 'Solutions Delivery Consultant',
      company: 'IBM Denmark ApS',
      location: 'Copenhagen, Denmark',
      period: 'October 2023 – June 2024',
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
      highlights: [
        'Worked on sponsored engineering project',
        'Applied theoretical knowledge to real-world applications',
      ],
      tech: ['Research', 'Development'],
    },
  ];

  const spans = experiences.map((exp) => {
    const [start, end] = exp.period.split('–').map(toYear);
    return { start, end };
  });
  const education = [
    { label: "Bachelor's degree, Pune University", start: toYear('January 2012'), end: toYear('May 2016') },
    { label: "Master's degree, Aalborg University", start: toYear('February 2021'), end: toYear('February 2023') },
  ];
  const first = Math.floor(Math.min(...spans.map((span) => span.start), ...education.map((item) => item.start)));
  const range = today - first;
  const position = (year: number) => `${((year - first) / range) * 100}%`;
  const ticks = Array.from({ length: Math.ceil(range / 2) }, (_, i) => first + 1 + i * 2).filter((year) => year < today);

  const timeline = [
    ...experiences.map((exp, index) => ({
      label: `${exp.title}, ${exp.company}`,
      style: exp.period.includes('Present') ? CURRENT_BAR : WORK_BAR,
      ...spans[index],
    })),
    ...education.map((item) => ({ ...item, style: STUDY_BAR })),
  ].sort((a, b) => a.start - b.start);

  return (
    <Section id="experience" number="02 // Mission log" title="Experience">
      {/* Career timeline, drawn to scale from the role dates */}
      <div aria-hidden="true" className="mb-10">
        <div className="relative h-5">
          {ticks.map((year) => (
            <span
              key={year}
              className="absolute -translate-x-1/2 font-mono text-[11px] text-muted-foreground"
              style={{ left: position(year) }}
            >
              {year}
            </span>
          ))}
        </div>
        <div className="relative border-t border-primary/40 pt-2">
          {ticks.map((year) => (
            <span key={year} className="absolute bottom-0 top-0 w-px bg-primary/15" style={{ left: position(year) }} />
          ))}
          <div className="relative space-y-1">
            {timeline.map((row) => (
              <div key={row.label} className="relative h-3">
                <span
                  className={`absolute h-full transition-[filter] duration-150 hover:brightness-150 ${row.style}`}
                  style={{ left: position(row.start), width: `${((row.end - row.start) / range) * 100}%` }}
                  title={row.label}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className={`h-2 w-4 ${CURRENT_BAR}`} />
            Current role
          </span>
          <span className="flex items-center gap-2">
            <span className={`h-2 w-4 ${WORK_BAR}`} />
            Work
          </span>
          <span className="flex items-center gap-2">
            <span className={`h-2 w-4 ${STUDY_BAR}`} />
            Education
          </span>
        </div>
      </div>

      <div className="border-t border-primary/40">
        {experiences.map((exp, index) => (
          <details key={exp.period} open={index < 2} className="ledger-row hud-hover border-b border-border py-5">
            <summary>
              <div className="grid flex-1 gap-1 md:grid-cols-9 md:gap-8">
                <p className="pt-1 font-mono text-xs text-muted-foreground md:col-span-3">{exp.period}</p>
                <div className="md:col-span-6">
                  <h3 className="ledger-title text-lg font-medium leading-snug transition-colors">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                </div>
              </div>
              <Plus className="ledger-toggle" />
            </summary>
            <div className="mt-4 grid md:grid-cols-9 md:gap-8">
              <div className="pr-9 md:col-span-6 md:col-start-4">
                <ul className="list-disc space-y-2 pl-4 text-[15px] leading-relaxed text-muted-foreground marker:text-primary">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">{exp.tech.join(' / ')}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
