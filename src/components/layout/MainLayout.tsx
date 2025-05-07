import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SpaceBackground from '../effects/SpaceBackground';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '#home', label: 'Home' },
    { path: '#about', label: 'About' },
    { path: '#team', label: 'Team' },
    { path: '#gallery', label: 'Gallery' },
    { path: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('text-primary');
        } else {
          document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('text-primary');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Space Background */}
      <SpaceBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-primary-dark/80 backdrop-blur-lg border-b border-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a 
              href="#home" 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300"
              onClick={() => handleNavClick('#home')}
            >
              NovaMind
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`nav-link text-secondary-light hover:text-primary transition-colors duration-300 ${
                    location.hash === item.path ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button 
              className="md:hidden text-secondary-light hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-20 left-0 right-0 z-[99] bg-primary-dark/95 backdrop-blur-lg border-b border-secondary/20 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
                className={`nav-link text-secondary-light hover:text-primary transition-colors duration-300 ${
                  location.hash === item.path ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 