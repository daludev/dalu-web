import { Globe, Smartphone, Database, Zap, Shield, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t, tArray } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('services.fullstack.title'),
      description: t('services.fullstack.description'),
      features: tArray('services.fullstack.features'),
      deliverables: t('services.fullstack.deliverables')
    },
    {
      icon: Smartphone,
      title: t('services.ui.title'),
      description: t('services.ui.description'),
      features: tArray('services.ui.features'),
      deliverables: t('services.ui.deliverables')
    },
    {
      icon: Database,
      title: t('services.database.title'),
      description: t('services.database.description'),
      features: tArray('services.database.features'),
      deliverables: t('services.database.deliverables')
    },
    {
      icon: Zap,
      title: t('services.api.title'),
      description: t('services.api.description'),
      features: tArray('services.api.features'),
      deliverables: t('services.api.deliverables')
    },
    {
      icon: Shield,
      title: t('services.security.title'),
      description: t('services.security.description'),
      features: tArray('services.security.features'),
      deliverables: t('services.security.deliverables')
    },
    {
      icon: Headphones,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: tArray('services.consulting.features'),
      deliverables: t('services.consulting.deliverables')
    }
  ];

  return (
    <section id="services" className="section-padding scroll-offset">
      <div className="container-responsive">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="card-service group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-primary p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-accent">Deliverables:</span>
                  <span className="text-muted-foreground">{service.deliverables}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {t('services.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;