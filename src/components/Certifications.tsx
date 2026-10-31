import Section from './Section';

const Certifications = () => {
  const certifications = [
    {
      name: 'KCNA: Kubernetes and Cloud Native Associate',
      code: 'KCNA',
      provider: 'The Linux Foundation',
      issuedDate: 'Oct 15, 2026',
      expiryDate: 'Oct 14, 2028',
    },
    {
      name: 'Microsoft Certified Azure DevOps Expert',
      code: 'AZ-400',
      provider: 'Microsoft',
    },
    {
      name: 'AWS Certified Developer – Associate',
      code: 'DVA-C02',
      provider: 'Amazon Web Services',
      issuedDate: 'May 5, 2024',
      expiryDate: 'May 5, 2027',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C01',
      provider: 'Amazon Web Services',
      issuedDate: 'Apr 5, 2024',
      expiryDate: 'May 5, 2027',
    },
    {
      name: 'IBM Certified Associate SRE - Cloud',
      code: 'IBM-SRE',
      provider: 'IBM',
      issuedDate: 'Mar 17, 2023',
    },
    {
      name: 'IBM Certified Deployment Professional',
      code: 'IBM-DP',
      provider: 'IBM',
      issuedDate: 'Feb 17, 2023',
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      code: 'TA-003',
      provider: 'HashiCorp',
      issuedDate: 'May 20, 2024',
      expiryDate: 'May 20, 2026',
    },
  ];

  const isExpired = (date?: string) => !!date && new Date(date) < new Date();

  const sorted = [...certifications].sort(
    (a, b) => Number(isExpired(a.expiryDate)) - Number(isExpired(b.expiryDate)),
  );

  return (
    <Section
      id="certifications"
      number="05 // Credentials"
      title="Certifications"
      aside={
        <a
          href="https://www.credly.com/users/umesh-sanjay-torawane"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          View Credly profile
        </a>
      }
    >
      <ul className="border-t border-primary/40">
        {sorted.map((cert) => {
          const expired = isExpired(cert.expiryDate);
          return (
            <li key={cert.code} className="hud-hover grid gap-1 border-b border-border py-4 md:grid-cols-9 md:gap-6">
              <div className="md:col-span-5">
                <h3 className={`font-medium leading-snug ${expired ? 'text-muted-foreground' : ''}`}>{cert.name}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{cert.provider}</p>
              </div>
              <p className="pt-0.5 font-mono text-xs text-muted-foreground md:col-span-1">{cert.code}</p>
              <p className="pt-0.5 font-mono text-xs leading-relaxed text-muted-foreground md:col-span-3 md:text-right">
                {cert.issuedDate && <span className="block">Issued {cert.issuedDate}</span>}
                {cert.expiryDate && (
                  <span className={`block ${expired ? 'text-signal' : ''}`}>
                    {expired ? 'Expired' : 'Expires'} {cert.expiryDate}
                  </span>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Certifications;
