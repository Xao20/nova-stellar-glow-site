
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 stagger-animation">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block text-lg md:text-xl text-nova-purple bg-black/30 px-4 py-1 rounded-full font-semibold mb-3 animate-pulse-glow shadow-glow">Discover Innovation</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block mb-2 text-white drop-shadow-md">Welcome to</span>
              <span className="relative inline-block">
                <span className="text-gradient relative z-10 font-extrabold drop-shadow-[0_2px_10px_rgba(251,37,118,0.8)]">NovaMind Team</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-nova-pink to-nova-purple"></span>
                <div className="absolute -inset-2 rounded-lg bg-nova-purple/30 blur-xl opacity-80 -z-10 animate-pulse-glow"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-white drop-shadow-md mb-8 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            Embark on a cosmic journey through digital innovation and creative exploration.
            We build experiences that transcend the ordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="px-8 py-6 bg-nova-purple hover:bg-nova-purple/90 text-white rounded-lg text-lg font-bold shadow-glow"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="px-8 py-6 border-nova-purple/50 text-white hover:bg-nova-purple/10 rounded-lg text-lg font-bold shadow-md"
            >
              Learn More
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a 
              href="#about" 
              className="inline-block text-white hover:text-nova-pink bg-black/30 rounded-full p-3"
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
  );
};

export default HeroSection;
