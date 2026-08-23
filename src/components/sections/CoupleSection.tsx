import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";

export function CoupleSection() {
  return (
    <Section id="couple" className="bg-[var(--color-ivory)] pb-0 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-pattern-dots pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-gold)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Bride & Groom
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-maroon)] font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Two Hearts, One Soul
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8 lg:gap-16 relative z-10">
        
        {/* Groom Profile */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-sm w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-64 h-80 rounded-t-[100px] rounded-b-sm overflow-hidden mb-6 border-4 border-[var(--color-champagne)] shadow-xl group">
            <div className="absolute inset-0 bg-[var(--color-maroon)]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
             {/* Using gallery_1 for individual profiles for now as placeholders, ideally we'd have separate ones */}
            <img 
              src="/assets/images/gallery_1.png" 
              alt={weddingData.couple.groom.name}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <p className="font-traditional text-xs tracking-widest text-[var(--color-gold)] mb-2 uppercase">The Groom</p>
          <h3 className="font-heading text-4xl text-[var(--color-maroon)] font-bold mb-4">{weddingData.couple.groom.fullName}</h3>
          <div className="font-body text-sm text-[var(--color-dark-brown)] leading-relaxed">
            {weddingData.couple.groom.parents.split('\n').map((line, i) => (
              <span key={i} className={i === 0 ? "block font-traditional text-xs tracking-widest uppercase mb-1" : "block font-medium"}>{line}</span>
            ))}
          </div>
        </motion.div>

        {/* Center Divider */}
        <motion.div 
          className="hidden md:flex flex-col items-center justify-center shrink-0"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent" />
          <div className="my-4 font-traditional text-3xl text-[var(--color-gold)] italic">&</div>
          <div className="w-[1px] h-32 bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-gold)] to-transparent" />
        </motion.div>
        
        {/* Mobile Center Divider */}
        <div className="md:hidden font-traditional text-4xl text-[var(--color-gold)] italic my-4">&</div>

        {/* Bride Profile */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-sm w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-64 h-80 rounded-t-[100px] rounded-b-sm overflow-hidden mb-6 border-4 border-[var(--color-champagne)] shadow-xl group">
             <div className="absolute inset-0 bg-[var(--color-maroon)]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
             {/* Using gallery_1 for individual profiles for now as placeholders */}
            <img 
              src="/assets/images/gallery_1.png" 
              alt={weddingData.couple.bride.name}
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <p className="font-traditional text-xs tracking-widest text-[var(--color-gold)] mb-2 uppercase">The Bride</p>
          <h3 className="font-heading text-4xl text-[var(--color-maroon)] font-bold mb-4">{weddingData.couple.bride.fullName}</h3>
          <div className="font-body text-sm text-[var(--color-dark-brown)] leading-relaxed">
            {weddingData.couple.bride.parents.split('\n').map((line, i) => (
              <span key={i} className={i === 0 ? "block font-traditional text-xs tracking-widest uppercase mb-1" : "block font-medium"}>{line}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
