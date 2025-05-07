import { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const nebula1Ref = useRef<HTMLDivElement>(null);
  const nebula2Ref = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate nebula color and position on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      // Parallax and color shift
      if (nebula1Ref.current) {
        nebula1Ref.current.style.transform = `translateY(${progress * 60}px) scale(1.1)`;
        nebula1Ref.current.style.filter = `blur(80px) hue-rotate(${progress * 60}deg)`;
      }
      if (nebula2Ref.current) {
        nebula2Ref.current.style.transform = `translateY(${-progress * 40}px) scale(1.05)`;
        nebula2Ref.current.style.filter = `blur(100px) hue-rotate(${progress * 120}deg)`;
      }
    };

    // Starfield generation
    if (starfieldRef.current && starfieldRef.current.childElementCount === 0) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 1.2 + 0.3;
        star.className = 'absolute rounded-full bg-white opacity-60 pointer-events-none';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = `${0.2 + Math.random() * 0.6}`;
        star.style.filter = `blur(${Math.random() * 1.5}px)`;
        starfieldRef.current.appendChild(star);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Animated Nebula/Gradient Layers */}
      <div
        ref={nebula1Ref}
        className="absolute w-[120vw] h-[120vh] left-[-10vw] top-[-20vh]"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(80,180,255,0.22) 0%, rgba(120,0,255,0.13) 60%, transparent 100%)',
          transition: 'transform 0.6s cubic-bezier(.4,0,.2,1), filter 0.8s cubic-bezier(.4,0,.2,1)',
        }}
      />
      <div
        ref={nebula2Ref}
        className="absolute w-[100vw] h-[100vh] left-[-5vw] top-[20vh]"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(255,80,200,0.18) 0%, rgba(0,0,80,0.10) 70%, transparent 100%)',
          transition: 'transform 0.7s cubic-bezier(.4,0,.2,1), filter 0.9s cubic-bezier(.4,0,.2,1)',
        }}
      />
      {/* Subtle Starfield */}
      <div ref={starfieldRef} className="absolute inset-0" />
      {/* Overlay for contrast and tech feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
    </div>
  );
};

export default SpaceBackground; 