import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#technologies', label: t('nav.technologies') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-primary">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center gap-1"
              aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
            >
              <Globe size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground uppercase">
                {language === 'en' ? 'ES' : 'EN'}
              </span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-muted-foreground" />
              ) : (
                <Sun size={18} className="text-muted-foreground" />
              )}
            </button>

            <button className="btn-accent flex items-center gap-2">
              <Download size={18} />
              {t('nav.resume')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Controls Row */}
              <div className="flex items-center justify-between py-2">
                <span className="text-foreground font-medium">{t('nav.theme')}</span>
                <div className="flex items-center gap-3">
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 flex items-center gap-1"
                    aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
                  >
                    <Globe size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground uppercase">
                      {language === 'en' ? 'ES' : 'EN'}
                    </span>
                  </button>
                  
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {theme === 'light' ? (
                      <Moon size={18} className="text-muted-foreground" />
                    ) : (
                      <Sun size={18} className="text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <button className="btn-accent w-full flex items-center justify-center gap-2">
                <Download size={18} />
                {t('nav.resume')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;