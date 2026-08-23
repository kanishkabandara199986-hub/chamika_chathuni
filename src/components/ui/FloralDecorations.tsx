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
      </g>
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {/* Top Left */}
      <FloralCornerSVG className="absolute top-0 left-0 opacity-80" />
      
      {/* Top Right */}
      <FloralCornerSVG className="absolute top-0 right-0 opacity-80 scale-x-[-1]" />
      
      {/* Bottom Left */}
      <FloralCornerSVG className="absolute bottom-0 left-0 opacity-80 scale-y-[-1]" />
      
      {/* Bottom Right */}
      <FloralCornerSVG className="absolute bottom-0 right-0 opacity-80 scale-x-[-1] scale-y-[-1]" />
      
      {/* Optional Top Center and Bottom Center border extensions if needed, but corners are elegant enough */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-50" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-50" />
    </div>
  );
}
