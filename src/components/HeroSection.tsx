import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/professional-headshot.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle section-padding">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <p className="text-accent font-medium text-lg">{t('hero.subtitle')}</p>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('hero.title.part1')}
                <span className="text-primary block">{t('hero.title.part2')}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                {t('hero.cta.primary')}
              </button>
              <button className="btn-outline">
                {t('hero.cta.secondary')}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20"></div>
              <img
                src={profileImage}
                alt="Professional developer headshot"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;