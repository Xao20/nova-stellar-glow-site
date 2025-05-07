
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon,
  className 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "group relative p-6 overflow-hidden cursor-pointer",
      "transform transition-all duration-500 hover:-translate-y-2",
      className
    )}>
      {/* Background layers */}
      <div className="absolute inset-0 bg-nova-black rounded-lg z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-nova-pink/20 to-nova-purple/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" 
           style={{ 
             boxShadow: '0 0 15px 2px rgba(251, 37, 118, 0.3), inset 0 0 15px rgba(251, 37, 118, 0.3)',
           }}>
      </div>
      
      {/* Content */}
      <div className="relative z-30">
        <div className="text-nova-pink mb-4 transform transition-all duration-500 group-hover:scale-110">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white">
          {title}
        </h3>
        
        <p className="text-gray-300">
          {description}
        </p>
        
        <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-nova-pink font-medium flex items-center">
            Learn more 
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
