import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const Index = () => {
  useDocumentTitle();

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <TechnologiesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
