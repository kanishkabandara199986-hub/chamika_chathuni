import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function FloralDecorations() {
  // A beautiful elegant floral corner SVG
  const FloralCornerSVG = ({ className }: { className?: string }) => (
    <svg 
      width="200" 
      height="200" 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke="var(--color-gold)" strokeWidth="1.5" fill="none">
        {/* Main curved vine */}
        <path d="M0,0 C50,20 100,50 150,150" />
        
        {/* Leaves along the vine */}
        <path d="M30,12 C40,25 60,10 50,0 C40,5 35,15 30,12 Z" fill="var(--color-gold)" fillOpacity="0.2" />
        <path d="M60,25 C75,40 90,20 80,10 C70,15 65,30 60,25 Z" fill="var(--color-gold)" fillOpacity="0.2" />
        <path d="M90,45 C110,65 130,40 115,25 C100,35 95,55 90,45 Z" fill="var(--color-gold)" fillOpacity="0.2" />
        <path d="M115,75 C140,100 160,70 145,50 C125,65 120,90 115,75 Z" fill="var(--color-gold)" fillOpacity="0.2" />

        {/* Small decorative dots/berries */}
        <circle cx="20" cy="40" r="2" fill="var(--color-maroon)" />
        <circle cx="50" cy="60" r="3" fill="var(--color-maroon)" />
        <circle cx="80" cy="90" r="2" fill="var(--color-maroon)" />
        <circle cx="120" cy="120" r="2.5" fill="var(--color-maroon)" />
        
        {/* Subtle Heart integrated in vine */}
        <path d="M35 85 C 35 80, 45 80, 45 85 C 45 90, 35 95, 35 95 C 35 95, 25 90, 25 85 C 25 80, 35 80, 35 85 Z" fill="var(--color-maroon)" fillOpacity="0.4" stroke="none" />
      </g>
    </svg>
  );

  const WeddingRings = ({ className }: { className?: string }) => (
    <div className={`flex items-center justify-center opacity-60 ${className}`}>
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="20" r="14" stroke="var(--color-gold)" strokeWidth="2.5" fill="transparent" />
        <circle cx="38" cy="20" r="14" stroke="var(--color-gold)" strokeWidth="2.5" fill="transparent" />
        {/* Diamond on left ring */}
        <path d="M22 2 L25 5 L22 8 L19 5 Z" fill="var(--color-gold)" stroke="var(--color-maroon)" strokeWidth="0.5" />
      </svg>
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true" style={{ transform: 'translateZ(0)' }}>
      {/* Top Left */}
      <FloralCornerSVG className="absolute top-0 left-0 opacity-80" />
      
      {/* Top Right */}
      <FloralCornerSVG className="absolute top-0 right-0 opacity-80 scale-x-[-1]" />
      
      {/* Bottom Left */}
      <FloralCornerSVG className="absolute bottom-0 left-0 opacity-80 scale-y-[-1]" />
      
      {/* Bottom Right */}
      <FloralCornerSVG className="absolute bottom-0 right-0 opacity-80 scale-x-[-1] scale-y-[-1]" />
      
      {/* Top Center Rings */}
      <WeddingRings className="absolute top-2 left-1/2 -translate-x-1/2" />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30 -z-10" />
      
      {/* Bottom Center Rings */}
      <WeddingRings className="absolute bottom-2 left-1/2 -translate-x-1/2" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30 -z-10" />

      {/* Scattered Floating Global Hearts */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`global-heart-${i}`}
          className="absolute text-[var(--color-maroon)] opacity-20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <Heart size={Math.random() * 10 + 15} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
