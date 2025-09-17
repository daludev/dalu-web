import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.technologies': 'Technologies',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.theme': 'Theme',
    
    // Hero Section
    'hero.subtitle': 'Professional Web Developer',
    'hero.title.part1': 'Crafting Digital',
    'hero.title.part2': 'Excellence',
    'hero.description': 'I build sophisticated web applications with modern technologies, delivering reliable solutions that drive business growth and user engagement.',
    'hero.cta.primary': 'Get In Touch',
    'hero.cta.secondary': 'View My Work',
    
    // Technologies Section
    'tech.title': 'Core Technologies',
    'tech.subtitle': 'Leveraging cutting-edge technologies to build robust, scalable, and maintainable applications that meet modern business requirements.',
    'tech.react.description': 'Modern frontend framework for building dynamic, responsive user interfaces with component-based architecture.',
    'tech.react.skills': ['Hooks & Context', 'TypeScript Integration', 'Performance Optimization', 'Testing'],
    'tech.node.description': 'Server-side JavaScript runtime for building scalable backend applications and RESTful APIs.',
    'tech.node.skills': ['Express.js', 'Authentication', 'API Development', 'Middleware'],
    'tech.supabase.description': 'Modern backend-as-a-service providing real-time databases, authentication, and storage solutions.',
    'tech.supabase.skills': ['PostgreSQL', 'Real-time Data', 'Auth & Security', 'Storage Management'],
    'tech.fastapi.description': 'High-performance Python framework for building modern APIs with automatic interactive documentation.',
    'tech.fastapi.skills': ['Python Development', 'API Documentation', 'Performance Tuning', 'Data Validation'],
    'tech.expertise.title': 'Full-Stack Expertise',
    'tech.expertise.description': 'Comprehensive experience across frontend, backend, and database technologies',
    
    // Services Section
    'services.title': 'Professional Services',
    'services.subtitle': 'Comprehensive web development services designed to help businesses build reliable, scalable applications that drive growth and success.',
    'services.fullstack.title': 'Full-Stack Web Development',
    'services.fullstack.description': 'End-to-end web application development using modern frameworks and best practices. From responsive frontends to robust backend systems.',
    'services.fullstack.features': ['React & TypeScript Development', 'Node.js Backend Architecture', 'Database Design & Optimization', 'API Development & Integration'],
    'services.fullstack.deliverables': 'Complete web application with documentation',
    'services.ui.title': 'Responsive UI/UX Design',
    'services.ui.description': 'Creating beautiful, intuitive user interfaces that work seamlessly across all devices and provide exceptional user experiences.',
    'services.ui.features': ['Mobile-First Design Approach', 'Cross-Browser Compatibility', 'Performance Optimization', 'Accessibility Standards'],
    'services.ui.deliverables': 'Pixel-perfect responsive designs',
    'services.database.title': 'Database Architecture',
    'services.database.description': 'Designing and implementing scalable database solutions with Supabase, PostgreSQL, and other modern database technologies.',
    'services.database.features': ['Database Schema Design', 'Query Optimization', 'Real-time Data Sync', 'Backup & Security Implementation'],
    'services.database.deliverables': 'Optimized database with documentation',
    'services.api.title': 'API Development',
    'services.api.description': 'Building high-performance RESTful APIs with FastAPI and Node.js, including comprehensive documentation and testing.',
    'services.api.features': ['RESTful API Design', 'Authentication & Authorization', 'Rate Limiting & Security', 'Automated Testing'],
    'services.api.deliverables': 'Production-ready API with docs',
    'services.security.title': 'Security Implementation',
    'services.security.description': 'Implementing robust security measures to protect applications and user data with industry-standard practices.',
    'services.security.features': ['Authentication Systems', 'Data Encryption', 'Security Auditing', 'Compliance Standards'],
    'services.security.deliverables': 'Secure application architecture',
    'services.consulting.title': 'Consulting & Support',
    'services.consulting.description': 'Providing technical guidance, code reviews, and ongoing support to help teams build better web applications.',
    'services.consulting.features': ['Technical Architecture Review', 'Code Quality Assessment', 'Performance Optimization', 'Team Training & Mentoring'],
    'services.consulting.deliverables': 'Actionable recommendations & support',
    'services.cta.title': 'Ready to Start Your Project?',
    'services.cta.subtitle': 'Let\'s discuss how I can help bring your vision to life with professional, reliable web development services.',
    'services.cta.button': 'Start a Conversation',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to bring your ideas to life? I\'d love to hear about your project and discuss how we can create something extraordinary together.',
    'contact.intro.title': 'Get In Touch',
    'contact.intro.description': 'I\'m always excited to discuss new projects and opportunities. Whether you need a complete web application, technical consulting, or just want to chat about technology, feel free to reach out.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.availability.title': 'Currently Available',
    'contact.availability.description': 'Accepting new projects for Q1 2024. Typical response time is within 4-6 hours during business hours.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company (Optional)',
    'contact.form.message': 'Project Details',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.company': 'Your Company Name',
    'contact.form.placeholder.message': 'Tell me about your project, timeline, and requirements...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.success.title': 'Message Sent Successfully!',
    'contact.success.description': 'Thank you for reaching out. I\'ll get back to you within 24 hours.',
    
    // Footer
    'footer.description': 'Crafting exceptional web experiences with modern technologies and professional expertise.',
    'footer.links': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': 'Professional Portfolio. All rights reserved.',
    'footer.built': 'Built with',
    'footer.tech': 'using React & TypeScript'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.technologies': 'Tecnologías',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',
    'nav.theme': 'Tema',
    
    // Hero Section
    'hero.subtitle': 'Desarrollador Web Profesional',
    'hero.title.part1': 'Creando Excelencia',
    'hero.title.part2': 'Digital',
    'hero.description': 'Construyo aplicaciones web sofisticadas con tecnologías modernas, entregando soluciones confiables que impulsan el crecimiento empresarial y el engagement de usuarios.',
    'hero.cta.primary': 'Contáctame',
    'hero.cta.secondary': 'Ver Mi Trabajo',
    
    // Technologies Section
    'tech.title': 'Tecnologías Principales',
    'tech.subtitle': 'Aprovechando tecnologías de vanguardia para construir aplicaciones robustas, escalables y mantenibles que satisfacen los requisitos empresariales modernos.',
    'tech.react.description': 'Framework frontend moderno para construir interfaces de usuario dinámicas y responsivas con arquitectura basada en componentes.',
    'tech.react.skills': ['Hooks y Context', 'Integración TypeScript', 'Optimización de Rendimiento', 'Testing'],
    'tech.node.description': 'Runtime de JavaScript del lado del servidor para construir aplicaciones backend escalables y APIs RESTful.',
    'tech.node.skills': ['Express.js', 'Autenticación', 'Desarrollo de APIs', 'Middleware'],
    'tech.supabase.description': 'Backend-as-a-service moderno que proporciona bases de datos en tiempo real, autenticación y soluciones de almacenamiento.',
    'tech.supabase.skills': ['PostgreSQL', 'Datos en Tiempo Real', 'Auth y Seguridad', 'Gestión de Almacenamiento'],
    'tech.fastapi.description': 'Framework de Python de alto rendimiento para construir APIs modernas con documentación interactiva automática.',
    'tech.fastapi.skills': ['Desarrollo Python', 'Documentación de APIs', 'Optimización de Rendimiento', 'Validación de Datos'],
    'tech.expertise.title': 'Experiencia Full-Stack',
    'tech.expertise.description': 'Experiencia integral en tecnologías frontend, backend y bases de datos',
    
    // Services Section
    'services.title': 'Servicios Profesionales',
    'services.subtitle': 'Servicios integrales de desarrollo web diseñados para ayudar a las empresas a construir aplicaciones confiables y escalables que impulsen el crecimiento y el éxito.',
    'services.fullstack.title': 'Desarrollo Web Full-Stack',
    'services.fullstack.description': 'Desarrollo de aplicaciones web de extremo a extremo utilizando frameworks modernos y mejores prácticas. Desde frontends responsivos hasta sistemas backend robustos.',
    'services.fullstack.features': ['Desarrollo React y TypeScript', 'Arquitectura Backend Node.js', 'Diseño y Optimización de BD', 'Desarrollo e Integración de APIs'],
    'services.fullstack.deliverables': 'Aplicación web completa con documentación',
    'services.ui.title': 'Diseño UI/UX Responsivo',
    'services.ui.description': 'Creando interfaces de usuario hermosas e intuitivas que funcionan perfectamente en todos los dispositivos y proporcionan experiencias excepcionales.',
    'services.ui.features': ['Enfoque Mobile-First', 'Compatibilidad Cross-Browser', 'Optimización de Rendimiento', 'Estándares de Accesibilidad'],
    'services.ui.deliverables': 'Diseños responsivos pixel-perfect',
    'services.database.title': 'Arquitectura de Bases de Datos',
    'services.database.description': 'Diseñando e implementando soluciones de bases de datos escalables con Supabase, PostgreSQL y otras tecnologías modernas.',
    'services.database.features': ['Diseño de Esquemas de BD', 'Optimización de Consultas', 'Sincronización en Tiempo Real', 'Implementación de Backup y Seguridad'],
    'services.database.deliverables': 'Base de datos optimizada con documentación',
    'services.api.title': 'Desarrollo de APIs',
    'services.api.description': 'Construyendo APIs RESTful de alto rendimiento con FastAPI y Node.js, incluyendo documentación integral y testing.',
    'services.api.features': ['Diseño de APIs RESTful', 'Autenticación y Autorización', 'Rate Limiting y Seguridad', 'Testing Automatizado'],
    'services.api.deliverables': 'API lista para producción con docs',
    'services.security.title': 'Implementación de Seguridad',
    'services.security.description': 'Implementando medidas de seguridad robustas para proteger aplicaciones y datos de usuarios con prácticas estándar de la industria.',
    'services.security.features': ['Sistemas de Autenticación', 'Encriptación de Datos', 'Auditoría de Seguridad', 'Estándares de Cumplimiento'],
    'services.security.deliverables': 'Arquitectura de aplicación segura',
    'services.consulting.title': 'Consultoría y Soporte',
    'services.consulting.description': 'Proporcionando orientación técnica, revisiones de código y soporte continuo para ayudar a los equipos a construir mejores aplicaciones web.',
    'services.consulting.features': ['Revisión de Arquitectura Técnica', 'Evaluación de Calidad de Código', 'Optimización de Rendimiento', 'Entrenamiento y Mentoría de Equipos'],
    'services.consulting.deliverables': 'Recomendaciones accionables y soporte',
    'services.cta.title': '¿Listo para Comenzar tu Proyecto?',
    'services.cta.subtitle': 'Hablemos sobre cómo puedo ayudarte a dar vida a tu visión con servicios profesionales y confiables de desarrollo web.',
    'services.cta.button': 'Iniciar una Conversación',
    
    // Contact Section
    'contact.title': 'Trabajemos Juntos',
    'contact.subtitle': '¿Listo para dar vida a tus ideas? Me encantaría conocer sobre tu proyecto y discutir cómo podemos crear algo extraordinario juntos.',
    'contact.intro.title': 'Ponte en Contacto',
    'contact.intro.description': 'Siempre estoy emocionado de discutir nuevos proyectos y oportunidades. Ya sea que necesites una aplicación web completa, consultoría técnica, o simplemente quieras charlar sobre tecnología, no dudes en contactarme.',
    'contact.info.email': 'Correo',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.availability.title': 'Actualmente Disponible',
    'contact.availability.description': 'Aceptando nuevos proyectos para Q1 2024. Tiempo de respuesta típico es de 4-6 horas durante horario laboral.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.company': 'Empresa (Opcional)',
    'contact.form.message': 'Detalles del Proyecto',
    'contact.form.placeholder.name': 'Juan Pérez',
    'contact.form.placeholder.email': 'juan@ejemplo.com',
    'contact.form.placeholder.company': 'Nombre de tu Empresa',
    'contact.form.placeholder.message': 'Cuéntame sobre tu proyecto, cronograma y requisitos...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.success.title': '¡Mensaje Enviado Exitosamente!',
    'contact.success.description': 'Gracias por contactarme. Te responderé dentro de 24 horas.',
    
    // Footer
    'footer.description': 'Creando experiencias web excepcionales con tecnologías modernas y experiencia profesional.',
    'footer.links': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.copyright': 'Portafolio Profesional. Todos los derechos reservados.',
    'footer.built': 'Construido con',
    'footer.tech': 'usando React y TypeScript'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) return savedLanguage;
    
    const browserLanguage = navigator.language.toLowerCase();
    return browserLanguage.startsWith('es') ? 'es' : 'en';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations['en']];
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value || key;
  };

  const tArray = (key: string): string[] => {
    const value = translations[language][key as keyof typeof translations['en']];
    if (Array.isArray(value)) {
      return value;
    }
    return [value || key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};