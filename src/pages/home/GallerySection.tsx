
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import GalleryItem from '@/components/GalleryItem';

const GallerySection = ({ refProp }: { refProp: React.RefObject<HTMLDivElement> }) => {
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
    <section 
      id="gallery"
      ref={refProp}
      className="py-20 md:py-32 px-4 relative opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
            Our <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="text-xl text-white bg-black/30 p-4 rounded-lg shadow-md">
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
            className="border-nova-pink text-nova-pink hover:bg-nova-pink/10 group font-bold"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
