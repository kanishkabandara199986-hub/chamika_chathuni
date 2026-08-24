import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../../data/weddingData";

interface PreloaderProps {
  onComplete: () => void;
  isVisible: boolean;
}

export function Preloader({ onComplete, isVisible }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-maroon)] text-[var(--color-ivory)] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Traditional Kandyan Background Pattern */}
          <div className="absolute inset-0 bg-pattern-kandyan opacity-10 pointer-events-none" />
          
          {/* Center Glowing Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[var(--color-gold)] opacity-[0.03] blur-[100px] pointer-events-none" />

          {/* Traditional Corner Ornaments */}
          <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[var(--color-gold)] opacity-70 rounded-tl-xl" />
          <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-[var(--color-gold)] opacity-70 rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-[var(--color-gold)] opacity-70 rounded-bl-xl" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[var(--color-gold)] opacity-70 rounded-br-xl" />

          {/* Sun Motif */}
          <div className="absolute top-10 left-10 opacity-30 md:opacity-50 pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="20" stroke="var(--color-gold)" strokeWidth="4" />
              <circle cx="50" cy="50" r="10" fill="var(--color-gold)" />
              {Array.from({ length: 16 }).map((_, i) => (
                <path key={i} d="M50 25 L46 5 L54 5 Z" fill="var(--color-gold)" transform={`rotate(${i * 22.5} 50 50)`} />
              ))}
            </svg>
          </div>
          
          {/* Moon Motif */}
          <div className="absolute top-10 right-10 opacity-30 md:opacity-50 pointer-events-none">
            <svg width="55" height="55" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 10 A 40 40 0 1 1 20 50 A 30 30 0 1 0 60 10 Z" fill="var(--color-gold)" />
              <circle cx="35" cy="30" r="3" fill="var(--color-gold)" />
            </svg>
          </div>

          {/* Side Vine Borders */}
          <div className="absolute top-0 bottom-0 left-2 md:left-8 flex flex-col justify-around opacity-20 pointer-events-none overflow-hidden">
            {Array.from({ length: Math.ceil(window.innerHeight / 120) || 8 }).map((_, i) => (
              <svg key={`l-${i}`} width="30" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                <path d="M20,0 C40,30 0,60 20,90 C40,120 20,120 20,120" stroke="var(--color-gold)" strokeWidth="2" fill="none" />
                <path d="M20,30 C30,35 35,25 20,20 Z" fill="var(--color-gold)" />
                <path d="M10,60 C0,55 -5,65 10,70 Z" fill="var(--color-gold)" />
                <path d="M25,90 C35,95 40,85 25,80 Z" fill="var(--color-gold)" />
              </svg>
            ))}
          </div>
          <div className="absolute top-0 bottom-0 right-2 md:right-8 flex flex-col justify-around opacity-20 pointer-events-none scale-x-[-1] overflow-hidden">
            {Array.from({ length: Math.ceil(window.innerHeight / 120) || 8 }).map((_, i) => (
              <svg key={`r-${i}`} width="30" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                <path d="M20,0 C40,30 0,60 20,90 C40,120 20,120 20,120" stroke="var(--color-gold)" strokeWidth="2" fill="none" />
                <path d="M20,30 C30,35 35,25 20,20 Z" fill="var(--color-gold)" />
                <path d="M10,60 C0,55 -5,65 10,70 Z" fill="var(--color-gold)" />
                <path d="M25,90 C35,95 40,85 25,80 Z" fill="var(--color-gold)" />
              </svg>
            ))}
          </div>

          {/* Subtle Particles and Hearts */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute rounded-full bg-[var(--color-gold)]"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`heart-${i}`}
                className="absolute text-[var(--color-gold)]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: Math.random() * 10 + 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              >
                <Heart size={Math.random() * 15 + 10} fill="currentColor" fillOpacity="0.5" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* Traditional Kandyan Lotus Motif */}
            <motion.div 
              className="mb-10 text-[var(--color-gold)] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer rings */}
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
                {/* Petals */}
                <path d="M50 12 C 55 25, 65 35, 88 50 C 65 65, 55 75, 50 88 C 45 75, 35 65, 12 50 C 35 35, 45 25, 50 12 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
                <path d="M23 23 C 35 30, 40 40, 50 6 C 60 40, 65 30, 77 23 C 70 35, 60 40, 94 50 C 60 60, 70 65, 77 77 C 65 70, 60 60, 50 94 C 40 60, 35 70, 23 77 C 30 65, 40 60, 6 50 C 40 40, 30 35, 23 23 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
                {/* Inner core */}
                <circle cx="50" cy="50" r="12" fill="currentColor" />
                <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="6" fill="var(--color-maroon)" />
              </svg>
            </motion.div>

            <motion.p 
              className="font-traditional tracking-[0.3em] uppercase text-sm mb-6 text-[var(--color-gold)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {weddingData.title}
            </motion.p>
            
            <div className="text-center font-heading leading-none">
              <motion.h1 
                className="text-6xl md:text-8xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
              >
                {weddingData.couple.groom.name}
              </motion.h1>
              <motion.span 
                className="block text-4xl md:text-5xl font-traditional text-[var(--color-gold)] my-2 italic"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                &
              </motion.span>
              <motion.h1 
                className="text-6xl md:text-8xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                {weddingData.couple.bride.name}
              </motion.h1>
            </div>

            <motion.div 
              className="mt-12 font-traditional tracking-widest text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              {weddingData.date.fullDate.toUpperCase()}
            </motion.div>

            <motion.button
              onClick={onComplete}
              className="mt-16 px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] font-traditional tracking-widest uppercase text-xs hover:bg-[var(--color-gold)] hover:text-[var(--color-maroon)] transition-all duration-500 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              Open Invitation
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
