
import { Star, Code, Rocket, Globe } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = ({ refProp }: { refProp: React.RefObject<HTMLDivElement> }) => {
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

  return (
    <section 
      id="services"
      ref={refProp}
      className="py-20 md:py-32 px-4 bg-nova-darker relative opacity-0 transition-opacity duration-1000"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-nova-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-nova-magenta/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
            Our <span className="text-gradient">Services</span>
          </h2>
          
          <p className="text-xl text-white bg-black/30 p-4 rounded-lg shadow-md">
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
  );
};

export default ServicesSection;
