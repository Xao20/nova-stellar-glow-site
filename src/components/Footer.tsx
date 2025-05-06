
import { Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'GitHub', href: '#' },
  ];

  return (
    <footer className="relative bg-nova-darker pt-16 pb-8">
      {/* Star decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="absolute left-1/4 top-4 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
        <div className="absolute left-1/2 top-8 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute left-3/4 top-2 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute left-1/5 top-10 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1.1s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="max-w-xs">
            <a 
              href="#home" 
              className="text-2xl font-bold text-white flex items-center mb-4"
            >
              <span className="text-gradient">NOVA</span>
              <span className="text-nova-cyan ml-1">.</span>
            </a>
            <p className="text-gray-400">
              Exploring the cosmos, one pixel at a time. Join us on a journey through the digital universe.
            </p>
            <div className="mt-6 flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-nova-magenta mx-1" />
              <span>and</span>
              <Star size={14} className="text-nova-accent mx-1" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-nova-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-nova-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-nova-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-nova-accent transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-nova-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-nova-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nova Headquarters</li>
              <li>123 Cosmic Avenue</li>
              <li>Stellar City, SC 12345</li>
              <li className="pt-2">info@nova-stellar.com</li>
            </ul>
          </div>
        </div>
        
        <div className={cn(
          "border-t border-gray-800 mt-12 pt-6",
          "flex flex-col md:flex-row justify-between items-center"
        )}>
          <p className="text-gray-500 text-sm">
            © {currentYear} Nova. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
