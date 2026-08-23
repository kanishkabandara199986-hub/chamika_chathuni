import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PETAL_COUNT = 30;

export function FloatingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const petals = containerRef.current.children;

    // Set initial properties and create infinite falling animations
    for (let i = 0; i < petals.length; i++) {
      const petal = petals[i];
      
      // Randomize initial positions
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * -window.innerHeight; // Start above screen
      const scale = 0.3 + Math.random() * 0.4; // Random scale
      const duration = 10 + Math.random() * 15; // 10 to 25 seconds fall time
      
      gsap.set(petal, {
        x: startX,
        y: startY,
        scale: scale,
        rotation: Math.random() * 360,
        opacity: 0.4 + Math.random() * 0.4,
      });

      // Animate falling down
      gsap.to(petal, {
        y: window.innerHeight + 100,
        ease: "none",
        duration: duration,
        repeat: -1,
        delay: Math.random() * -duration, // Stagger starts
      });

      // Add a swaying motion (horizontal)
      gsap.to(petal, {
        x: `+=${50 + Math.random() * 100}`,
        rotation: `+=${90 + Math.random() * 180}`,
        ease: "sine.inOut",
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
      });
    }

    // Handle window resize
    const handleResize = () => {
      // Re-trigger animations or just adjust positions if necessary
      // For now, infinite loop handles most resizing gracefully
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: PETAL_COUNT }).map((_, i) => (
        <div key={i} className="absolute top-0 left-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Elegant teardrop petal shape */}
            <path 
              d="M12 0C12 0 20 5 20 12C20 19 12 24 12 24C12 24 4 19 4 12C4 5 12 0 12 0Z" 
              fill="var(--color-maroon)" 
              fillOpacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
