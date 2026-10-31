import { Plus } from 'lucide-react';
import Section from './Section';

const ProjectWork = () => {
    const projects = [
        {
            title: 'Azure DevOps Configuration & Variable Group Migration',
            role: 'DevOps Engineer',
            environment: 'Azure DevOps, YAML Pipelines, Git, Multi-Environment Setup',
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
            title: 'Kubernetes Observability Platform – SigNoz on AKS',
            role: 'DevOps Engineer',
            environment: 'Azure Kubernetes Service, SigNoz, Helm, Flux, Kustomize (GitOps), OpenTelemetry',
            workDone: [
                'Set up a POC observability platform using SigNoz on Azure Kubernetes Service (AKS).',
                'Deployed SigNoz using Helm charts and managed configurations with Flux and Kustomize (GitOps).',
                'Configured OpenTelemetry collectors to capture logs, metrics, and distributed traces from Kubernetes workloads.',
                'Built dashboards and alerts for application performance and cluster health monitoring.',
            ],
            impact: [
                'Enabled end-to-end observability across Kubernetes applications and infrastructure',
                'Improved incident investigation, debugging speed, and operational visibility for engineering teams',
            ],
        },
        {
            title: 'Azure Front Door – Custom Domain Automation & Concurrency Control',
            role: 'DevOps Engineer',
            environment: 'Azure Front Door, Terraform, Azure Blob Storage, CI/CD Pipelines',
            workDone: [
                'Automated Azure Front Door custom domain association using Terraform.',
                'Analyzed frequent CI/CD pipeline failures caused by Front Door resources being locked by other running pipelines.',
                'Designed and implemented concurrency control using Azure Blob Storage lease mechanism.',
                'Integrated lease-based locking into pipelines to coordinate access across parallel deployments.',
                'Implemented validation and fallback handling for lease acquisition and release.',
            ],
            impact: [
                'Eliminated pipeline failures caused by resource contention',
                'Enabled multiple pipelines to run concurrently without deployment conflicts',
                'Improved deployment reliability, speed, and developer productivity',
            ],
        },
        {
            title: 'Self-Service Environment Provisioning Platform',
            role: 'DevOps Engineer',
            environment: 'Azure DevOps Pipelines, Feature-Branch Deployments, Backend & Frontend Services',
            workDone: [
                'Designed and implemented self-service provisioning pipelines to enable developers and QA to create on-demand environments.',
                'Built a universal provisioning pipeline supporting feature-branch–based deployments for isolated testing.',
                'Automated environment reset and back-deployment with required application data.',
                'Integrated deployment of backend and frontend services using latest or feature-specific builds.',
                'Standardized environment setup workflows to remove manual DevOps intervention.',
            ],
            impact: [
                'Enabled developers and QA to provision environments independently without waiting on DevOps',
                'Reduced environment setup time from hours/days to minutes',
                'Increased developer productivity and faster feature validation',
                'Eliminated repetitive manual environment preparation requests',
            ],
        },
    ];

    return (
        <Section id="projects" number="03 // Operations" title="Projects" aside="Selected work from my DevOps roles.">
            <div className="border-t border-primary/40">
                {projects.map((project, index) => (
                    <details key={project.title} open={index === 0} className="ledger-row hud-hover border-b border-border py-5">
                        <summary>
                            <div className="flex flex-1 gap-4">
                                <span className="pt-1.5 font-mono text-xs text-primary">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="ledger-title text-xl font-medium leading-tight transition-colors md:text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                                        {project.environment}
                                    </p>
                                </div>
                            </div>
                            <Plus className="ledger-toggle" />
                        </summary>

                        <div className="mt-6 grid gap-6 md:grid-cols-5 md:gap-8 md:pl-8">
                            <div className="md:col-span-2">
                                <h4 className="eyebrow !text-signal">Impact</h4>
                                <ul className="mt-3 space-y-2 font-medium leading-snug">
                                    {project.impact.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:col-span-3">
                                <h4 className="eyebrow">Work done</h4>
                                <ul className="mt-3 list-disc space-y-2 pl-4 text-[15px] leading-relaxed text-muted-foreground marker:text-primary">
                                    {project.workDone.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </details>
                ))}
            </div>
        </Section>
    );
};

export default ProjectWork;
