import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/daludev', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contacto@dalu.com.ar', label: 'Email' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-responsive">
        <div className="py-12 px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold">DALU</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold mb-4">{t('footer.links')}</h4>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <button 
                  onClick={() => document.querySelector('#technologies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {t('nav.technologies')}
                </button>
                <button 
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} {t('footer.copyright')}</p>
            <div className="flex items-center gap-1">
              <span>{t('footer.built')}</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>{t('footer.tech')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;