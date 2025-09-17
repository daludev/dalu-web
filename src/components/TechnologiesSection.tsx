import { Code2, Database, Server, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TechnologiesSection = () => {
  const { t, tArray } = useLanguage();

  const technologies = [
    {
      icon: Code2,
      name: 'React',
      description: t('tech.react.description'),
      color: 'from-blue-500 to-cyan-400',
      skills: tArray('tech.react.skills')
    },
    {
      icon: Server,
      name: 'Node.js',
      description: t('tech.node.description'),
      color: 'from-green-500 to-emerald-400',
      skills: tArray('tech.node.skills')
    },
    {
      icon: Database,
      name: 'Supabase',
      description: t('tech.supabase.description'),
      color: 'from-emerald-500 to-teal-400',
      skills: tArray('tech.supabase.skills')
    },
    {
      icon: Zap,
      name: 'FastAPI',
      description: t('tech.fastapi.description'),
      color: 'from-amber-500 to-orange-400',
      skills: tArray('tech.fastapi.skills')
    }
  ];

  return (
    <section id="technologies" className="section-padding scroll-offset bg-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('tech.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="card-elegant group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-full h-full text-white" />
                </div>

                {/* Technology name */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tech.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2">
                  {tech.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional expertise note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-xl px-8 py-6 shadow-subtle">
            <div className="text-accent">
              <Code2 size={24} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-1">{t('tech.expertise.title')}</h4>
              <p className="text-muted-foreground text-sm">
                {t('tech.expertise.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;