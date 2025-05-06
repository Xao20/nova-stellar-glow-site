
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Feature from '@/components/Feature';
import ServiceCard from '@/components/ServiceCard';
import GalleryItem from '@/components/GalleryItem';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Star, Rocket, Globe, Layers, Code, ArrowRight, Download, ExternalLink } from 'lucide-react';

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
  
  // Features data
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Stellar Performance",
      description: "Optimized for speed and efficiency across the cosmos."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Quantum Launch",
      description: "Deploy projects faster than the speed of light."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universal Compatibility",
      description: "Works seamlessly across all planetary systems."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Nebula Architecture",
      description: "Built on cutting-edge cosmic technology."
    }
  ];
  
  // Services data
  const services = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Cosmic Design",
      description: "Revolutionary design patterns inspired by celestial bodies and cosmic phenomena."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Stellar Development",
      description: "Cutting-edge development using the latest technologies from across the universe."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Orbit Deployment",
      description: "Fast and reliable deployment services to launch your projects into the stratosphere."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Galactic Marketing",
      description: "Expand your reach across the universe with our comprehensive marketing solutions."
    }
  ];
  
  // Gallery data
  const galleryItems = [
    {
      title: "Nebula Interface",
      description: "A revolutionary UI design inspired by cosmic nebulae",
      imageSrc: "https://picsum.photos/id/1/800/600",
      alt: "Nebula Interface screenshot"
    },
    {
      title: "Stellar Dashboard",
      description: "Analytics dashboard with cosmic-inspired visualization",
      imageSrc: "https://picsum.photos/id/2/800/600",
      alt: "Stellar Dashboard screenshot"
    },
    {
      title: "Nova App",
      description: "Mobile application with space-themed components",
      imageSrc: "https://picsum.photos/id/3/800/600",
      alt: "Nova App screenshot"
    },
    {
      title: "Galaxy Portfolio",
      description: "Beautiful portfolio site with interstellar animations",
      imageSrc: "https://picsum.photos/id/4/800/600",
      alt: "Galaxy Portfolio screenshot"
    }
  ];
  
  return (
    <div className="min-h-screen bg-nova-dark text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-hero-glow z-0"></div>
        
        {/* Content */}
        <div className="container mx-auto relative z-10 stagger-animation">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Discover the <span className="text-gradient">Stellar</span> Experience
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Embark on a cosmic journey through digital innovation and creative exploration.
              We build experiences that transcend the ordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="px-8 py-6 bg-nova-purple hover:bg-nova-purple/90 text-white rounded-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="px-8 py-6 border-nova-purple/50 text-white hover:bg-nova-purple/10 rounded-lg"
              >
                Learn More
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="mt-16 animate-bounce">
              <a 
                href="#about" 
                className="inline-block text-gray-400 hover:text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-nova-dark to-transparent z-10"></div>
      </section>
      
      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className="py-20 md:py-32 px-4 relative opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">NovaMind</span>
            </h2>
            
            <p className="text-gray-300">
              At NovaMind, we blend cutting-edge technology with cosmic creativity to deliver digital experiences that are out of this world. Our mission is to push the boundaries of what's possible in the digital universe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              variant="ghost"
              className="text-nova-accent hover:text-nova-magenta hover:bg-transparent group"
            >
              Discover our story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        id="services" 
        ref={servicesRef}
        className="py-20 md:py-32 px-4 bg-nova-darker relative opacity-0 transition-opacity duration-1000"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-nova-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-80 h-80 bg-nova-magenta/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            
            <p className="text-gray-300">
              We offer a comprehensive range of digital services to help your business reach new cosmic heights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section 
        id="gallery" 
        ref={galleryRef}
        className="py-20 md:py-32 px-4 relative opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h2>
            
            <p className="text-gray-300">
              Explore our cosmic portfolio of stellar projects that push the boundaries of digital innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={index}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                alt={item.alt}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              variant="outline" 
              className="border-nova-accent text-nova-accent hover:bg-nova-accent/10 group"
            >
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 bg-nova-darker relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nova-purple/20 rounded-full blur-3xl opacity-70"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h2>
            
            <p className="text-gray-300">
              Ready to start your cosmic journey? Get in touch with us today.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
