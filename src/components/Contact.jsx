import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          {t('contact.title').split(' ')[0]} <span className="text-accent">{t('contact.title').split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-muted text-lg mb-10">
          {t('contact.subtitle')}
        </p>

        <a
          href="mailto:wendyweng1223@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-text text-background rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-12"
        >
          <Mail />
          {t('contact.cta')}
        </a>

        <div className="flex justify-center gap-8">
          {[
            { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border text-muted hover:text-text hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
