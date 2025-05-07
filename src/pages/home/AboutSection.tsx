
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Rocket, Globe, Layers } from 'lucide-react';
import Feature from '@/components/Feature';

const AboutSection = ({ refProp }: { refProp: React.RefObject<HTMLDivElement> }) => {
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

  return (
    <section 
      id="about" 
      ref={refProp}
      className="py-20 md:py-32 px-4 relative opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
            About <span className="text-gradient">NovaMind</span>
          </h2>
          
          <p className="text-xl text-white bg-black/30 p-4 rounded-lg shadow-md">
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
            className="text-nova-pink hover:text-nova-purple hover:bg-transparent group font-bold bg-black/30 py-3 px-6 rounded-md"
          >
            Discover our story
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
