
import { useRef, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from './home/HeroSection';
import AboutSection from './home/AboutSection';
import ServicesSection from './home/ServicesSection';
import GallerySection from './home/GallerySection';
import ContactSection from './home/ContactSection';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Fix the animation issue by removing opacity-0 class after component mounts
    const sections = [aboutRef, servicesRef, galleryRef];
    
    // Add visible class to sections
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;
      
      sections.forEach(ref => {
        if (ref.current && scrollPosition > ref.current.offsetTop) {
          ref.current.classList.add('animate-fade-in');
          ref.current.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on mount
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-nova-dark text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      <HeroSection />
      <AboutSection refProp={aboutRef} />
      <ServicesSection refProp={servicesRef} />
      <GallerySection refProp={galleryRef} />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
