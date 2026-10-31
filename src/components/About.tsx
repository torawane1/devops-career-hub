import Section from './Section';

const About = () => {
  const education = [
    {
      degree: 'Master of Science, Technology Management',
      school: 'Aalborg University',
      place: 'Copenhagen, Denmark',
      date: 'June 2023',
      coursework: [
        'Machine Learning',
        'Cyber Security',
        'User Experience and Ethics',
        'Internet Services and Governance',
        'Entrepreneurship',
      ],
    },
    {
      degree: 'Bachelor of Engineering, Information Technology',
      school: 'Pune University',
      place: 'Pune, India',
      date: 'May 2016',
      coursework: [
        'Data Structure & Algorithms',
        'Object Oriented Programming',
        'Operating Systems',
        'Databases',
        'Computer Networks',
      ],
    },
  ];

  return (
    <Section id="about" number="01 // Crew dossier" title="About">
      <p className="max-w-3xl text-2xl leading-snug md:text-4xl">
        Hi, I'm Umesh. I'm a passionate Senior DevOps engineer in Copenhagen, with expertise in building and managing cloud
        infrastructure at scale.
      </p>
      <div className="mt-8 grid max-w-3xl gap-6 text-muted-foreground md:grid-cols-2">
        <p>
          Currently at WPP Enterprise Solutions, I drive infrastructure automation, manage Kubernetes clusters with GitOps, and ensure
          reliable production releases.
        </p>
        <p>
          With a Master's in Technology Management and a Bachelor's in Information Technology, I bridge the gap between
          technical excellence and strategic thinking.
        </p>
      </div>

      <h3 className="eyebrow mt-14">Education</h3>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.school} className="hud-hover border-t border-primary/40 pt-4">
            <p className="font-medium">{item.degree}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.school}, {item.place} · {item.date}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Coursework: {item.coursework.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
