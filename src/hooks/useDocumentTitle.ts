import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const useDocumentTitle = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      en: 'Professional Web Developer Portfolio | React, Node.js, Supabase Expert',
      es: 'Portafolio de Desarrollador Web Profesional | Experto en React, Node.js, Supabase'
    };

    const descriptions = {
      en: 'Experienced web developer specializing in React, Node.js, Supabase, and FastAPI. Building scalable, professional web applications that drive business growth.',
      es: 'Desarrollador web experimentado especializado en React, Node.js, Supabase y FastAPI. Construyendo aplicaciones web escalables y profesionales que impulsan el crecimiento empresarial.'
    };

    // Update document title
    document.title = titles[language];

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', titles[language]);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptions[language]);
    }
  }, [language]);
};