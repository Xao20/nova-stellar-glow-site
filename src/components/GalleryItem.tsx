
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  className?: string;
}

const GalleryItem = ({
  title,
  description,
  imageSrc,
  alt,
  className
}: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg group cursor-pointer",
        "transform transition-all duration-500",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-80">
        <img 
          src={imageSrc} 
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy" // Add lazy loading for better performance
        />
        
        {/* Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-nova-darker/90 to-transparent",
          "transition-opacity duration-500",
          isHovered ? "opacity-80" : "opacity-70"
        )}></div>
      </div>
      
      {/* Content */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-5",
        "transform transition-transform duration-500",
        isHovered ? "translate-y-0" : "translate-y-8"
      )}>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        
        <p className={cn(
          "text-gray-300 transition-all duration-500",
          isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
        )}>
          {description}
        </p>
        
        <div className={cn(
          "mt-3 w-10 h-0.5 bg-nova-accent",
          "transition-all duration-500",
          isHovered ? "w-20" : "w-10"
        )}></div>
      </div>
    </div>
  );
};

export default GalleryItem;
