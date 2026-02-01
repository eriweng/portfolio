import { Terminal, Briefcase, GraduationCap } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('about.exp_1.company'),
      role: t('about.exp_1.role'),
      period: t('about.exp_1.period'),
      description: [
        t('about.exp_1.desc_1'),
        t('about.exp_1.desc_2'),
        t('about.exp_1.desc_3'),
        t('about.exp_1.desc_4')
      ]
    },
    {
      company: t('about.exp_2.company'),
      role: t('about.exp_2.role'),
      period: t('about.exp_2.period'),
      description: [
        t('about.exp_2.desc_1'),
        t('about.exp_2.desc_2'),
        t('about.exp_2.desc_3')
      ]
    },
    {
      company: t('about.exp_3.company'),
      role: t('about.exp_3.role'),
      period: t('about.exp_3.period'),
      description: [
        t('about.exp_3.desc_1'),
        t('about.exp_3.desc_2')
      ]
    }
  ];

  const educations = [
    {
      school: t('about.edu_1.school'),
      degree: t('about.edu_1.degree'),
      status: t('about.edu_1.status')
    },
    {
      school: t('about.edu_2.school'),
      degree: t('about.edu_2.degree'),
      status: t('about.edu_2.status')
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Left Column: Summary & Skills */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              {t('about.title').split(' ')[0]} <span className="text-accent">{t('about.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <div className="prose prose-invert text-muted text-lg leading-relaxed mb-10">
              <p>
                <Trans i18nKey="about.summary_1">
                    With 4-5 years of cross-disciplinary experience, currently serving as a <span className="text-text font-medium">Digital Platform Specialist</span> at KING TONY.
                </Trans>
              </p>
              <p>
                <Trans i18nKey="about.summary_2">
                    Specializing in transforming <span className="text-text font-medium">Media Design</span> backgrounds into precise <span className="text-text font-medium">UI/UX Implementations</span>. I leverage rigorous logic from HR & Sales domains to ensure data consistency and process efficiency.
                </Trans>
              </p>
              <p>
                <Trans i18nKey="about.summary_3">
                    Focusing on <span className="text-text font-medium">Shopify Development</span> and <span className="text-text font-medium">React/Node.js</span> Full Stack solutions. Capable of building testing sites from scratch, integrating third-party APIs, and handling complex membership logic to optimize global market conversions.
                </Trans>
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-accent" /> {t('about.skillsTitle')}
            </h3>
            
            <div className="space-y-4 mb-10">
              <div>
                <h4 className="text-text font-medium mb-2">{t('about.skills.frontend.title')}</h4>
                <p className="text-muted text-sm border-l-2 border-border pl-3">
                  {t('about.skills.frontend.desc')}
                </p>
              </div>
              <div>
                <h4 className="text-text font-medium mb-2">{t('about.skills.backend.title')}</h4>
                <p className="text-muted text-sm border-l-2 border-border pl-3">
                  {t('about.skills.backend.desc')}
                </p>
              </div>
              <div>
                <h4 className="text-text font-medium mb-2">{t('about.skills.platform.title')}</h4>
                <p className="text-muted text-sm border-l-2 border-border pl-3">
                  {t('about.skills.platform.desc')}
                </p>
              </div>
              <div>
                <h4 className="text-text font-medium mb-2">{t('about.skills.tools.title')}</h4>
                <p className="text-muted text-sm border-l-2 border-border pl-3 whitespace-pre-line">
                  {t('about.skills.tools.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-accent" /> {t('about.experienceTitle')}
            </h3>

            <div className="space-y-8 border-l border-border pl-6 ml-3 mb-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></span>
                  <div className="mb-2">
                    <h4 className="text-lg font-bold text-text">{exp.role}</h4>
                    <div className="text-sm text-accent mb-1">{exp.company}</div>
                    <span className="text-xs font-mono text-muted">{exp.period}</span>
                  </div>
                  <ul className="text-sm text-muted list-disc list-inside space-y-1 marker:text-muted/50">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" /> {t('about.educationTitle')}
            </h3>

            <div className="grid gap-4">
              {educations.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-primary/40 border border-border flex justify-between items-center hover:border-accent/30 transition-colors">
                  <div>
                    <h4 className="font-bold text-text">{edu.school}</h4>
                    <p className="text-sm text-muted">{edu.degree}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-secondary text-muted">{edu.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
