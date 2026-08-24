import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark-brown)] text-[var(--color-ivory)] py-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-kandyan opacity-5 pointer-events-none" />
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-12 h-px bg-[var(--color-gold)]/50 mb-8" />
        
        <p className="font-traditional tracking-widest text-xs uppercase text-[var(--color-gold)] mb-4">
          Made with <span className="text-[var(--color-maroon)] text-base">♥</span> for
        </p>
        
        <h2 className="font-heading text-2xl text-[var(--color-ivory)] mb-8">
          {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
        </h2>
        
        <div className="font-body text-[9px] text-white/40 flex flex-col gap-1 uppercase tracking-wider">
          <p>A beautiful digital invitation by Wedora</p>
          <p className="opacity-50">Wedora by Bandara Studio</p>
        </div>
      </motion.div>
    </footer>
  );
}
