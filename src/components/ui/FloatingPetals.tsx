import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PETAL_COUNT = 30;

export function FloatingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const activePetalCount = isMobile ? Math.floor(PETAL_COUNT / 2) : PETAL_COUNT;
    const petals = Array.from(containerRef.current.children).slice(0, activePetalCount);

    // Hide the unused petals if on mobile
    if (isMobile) {
      for (let i = activePetalCount; i < containerRef.current.children.length; i++) {
        (containerRef.current.children[i] as HTMLElement).style.display = 'none';
      }
    }

    // Set initial properties and create infinite falling animations
    for (let i = 0; i < petals.length; i++) {
      const petal = petals[i];
      
      // Randomize initial positions
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * -window.innerHeight; // Start above screen
      const scale = 0.3 + Math.random() * 0.5; // Random scale
      const duration = 15 + Math.random() * 20; // 15 to 35 seconds fall time (slower)
      
      gsap.set(petal, {
        x: startX,
        y: startY,
        scale: scale,
        rotation: Math.random() * 360,
        opacity: 0.3 + Math.random() * 0.5,
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
        x: `+=${50 + Math.random() * 150}`,
        rotation: `+=${90 + Math.random() * 270}`,
        ease: "sine.inOut",
        duration: 4 + Math.random() * 5,
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
      className="fixed inset-0 pointer-events-none z-[50] overflow-hidden"
      aria-hidden="true"
      style={{ transform: 'translateZ(0)' }}
    >
      {Array.from({ length: PETAL_COUNT }).map((_, i) => (
        <div key={i} className="absolute top-0 left-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            {/* Elegant teardrop petal shape */}
            <path 
              d="M12 0C12 0 20 5 20 12C20 19 12 24 12 24C12 24 4 19 4 12C4 5 12 0 12 0Z" 
              fill={i % 3 === 0 ? "var(--color-gold)" : "var(--color-maroon)"}
              fillOpacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
