import { Award, Shield, Cloud, CheckCircle, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Microsoft Certified Azure DevOps Expert',
      code: 'AZ-400',
      provider: 'Microsoft',
      color: 'from-blue-500 to-cyan-500',
      icon: '🔷',
      issuedDate: 'N/A',
      expiryDate: 'N/A',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C01',
      provider: 'Amazon Web Services',
      color: 'from-orange-500 to-yellow-500',
      icon: '☁️',
      issuedDate: 'N/A',
      expiryDate: 'May 5, 2027',
    },
    {
      name: 'AWS Certified Developer – Associate',
      code: 'DVA-C02',
      provider: 'Amazon Web Services',
      color: 'from-orange-500 to-yellow-500',
      icon: '👨‍💻',
      issuedDate: 'N/A',
      expiryDate: 'May 5, 2027',
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      code: 'TA-003',
      provider: 'HashiCorp',
      color: 'from-purple-500 to-pink-500',
      icon: '🏗️',
      issuedDate: 'N/A',
      expiryDate: 'May 20, 2026',
    },
    {
      name: 'IBM Certified Deployment Professional',
      code: 'IBM-DP',
      provider: 'IBM',
      color: 'from-blue-600 to-blue-400',
      icon: '🔵',
      issuedDate: 'Feb 17, 2023',
      expiryDate: 'N/A',
    },
    {
      name: 'IBM Certified Associate SRE - Cloud',
      code: 'IBM-SRE',
      provider: 'IBM',
      color: 'from-blue-600 to-blue-400',
      icon: '🛡️',
      issuedDate: 'Mar 17, 2023',
      expiryDate: 'N/A',
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-header text-2xl font-bold">
          <span className="text-secondary">ls -la</span> certifications/
        </h2>

        {/* Achievement unlocked banner */}
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-muted-foreground text-sm">achievements.log</span>
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-terminal-yellow" />
              <span className="text-lg font-semibold text-terminal-yellow">
                {certifications.length} Certifications Unlocked
              </span>
              <Award className="w-6 h-6 text-terminal-yellow" />
            </div>
            <p className="text-muted-foreground text-sm">
              Verified credentials from industry leaders
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Verify with{' '}
              <a
                href="https://www.credly.com/users/umesh-sanjay-torawane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Credly
              </a>
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="cert-badge group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`cert-icon bg-gradient-to-br ${cert.color}`}>
                <span>{cert.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-foreground text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{cert.provider}</p>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground">
                  {cert.code}
                </span>
                <div className="flex flex-col gap-1 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Issued: {cert.issuedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
