
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const Feature = ({ 
  icon, 
  title, 
  description, 
  delay = 0, 
  className 
}: FeatureProps) => {
  return (
    <div 
      className={cn(
        "glass-effect p-6 relative overflow-hidden group",
        "transform transition-all duration-500 hover:-translate-y-2",
        "animate-fade-in opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-nova-purple/10 group-hover:bg-nova-purple/20 transition-all duration-500"></div>
      
      <div className="text-nova-cyan mb-4 relative z-10 group-hover:scale-110 transform transition-transform duration-500">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-white relative z-10">
        {title}
      </h3>
      
      <p className="text-gray-300 relative z-10">
        {description}
      </p>
      
      <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-nova-purple to-nova-magenta group-hover:h-full transition-all duration-500"></div>
    </div>
  );
};

export default Feature;
