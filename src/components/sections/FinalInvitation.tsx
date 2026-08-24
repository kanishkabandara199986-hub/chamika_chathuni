import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";

export function FinalInvitation() {
  return (
    <Section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center !max-w-none px-0 overflow-hidden">


      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 py-24 border-2 border-[var(--color-gold)] bg-[var(--color-ivory)] rounded-sm shadow-2xl relative overflow-hidden">
        {/* Subtle Kandyan Pattern inside the card */}
        <div className="absolute inset-0 bg-pattern-kandyan opacity-[0.03] pointer-events-none" />
        
        {/* Premium Inner Border */}
        <div className="absolute inset-3 border border-[var(--color-gold)]/30 pointer-events-none" />

        {/* Traditional Corner SVGs */}
        <svg className="absolute top-4 left-4 opacity-70" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L40,0 C20,0 0,20 0,40 Z" fill="var(--color-gold)" fillOpacity="0.1" />
          <path d="M2,2 L38,2 C18,2 2,18 2,38 Z" stroke="var(--color-gold)" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="3" fill="var(--color-maroon)" />
        </svg>
        <svg className="absolute top-4 right-4 opacity-70 scale-x-[-1]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L40,0 C20,0 0,20 0,40 Z" fill="var(--color-gold)" fillOpacity="0.1" />
          <path d="M2,2 L38,2 C18,2 2,38 2,38" stroke="var(--color-gold)" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="3" fill="var(--color-maroon)" />
        </svg>
        <svg className="absolute bottom-4 left-4 opacity-70 scale-y-[-1]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L40,0 C20,0 0,20 0,40 Z" fill="var(--color-gold)" fillOpacity="0.1" />
          <path d="M2,2 L38,2 C18,2 2,38 2,38" stroke="var(--color-gold)" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="3" fill="var(--color-maroon)" />
        </svg>
        <svg className="absolute bottom-4 right-4 opacity-70 scale-x-[-1] scale-y-[-1]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L40,0 C20,0 0,20 0,40 Z" fill="var(--color-gold)" fillOpacity="0.1" />
          <path d="M2,2 L38,2 C18,2 2,38 2,38" stroke="var(--color-gold)" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="3" fill="var(--color-maroon)" />
        </svg>

        {/* Elegant Top Center Motif */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center text-[var(--color-gold)] opacity-80">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
            <path d="M12 2L15 12L24 12L16 17L19 24L12 19L5 24L8 17L0 12L9 12L12 2Z" fill="currentColor" />
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 pt-8"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-maroon)] font-bold mb-6">
            {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
          </h2>
          
          <p className="font-body text-lg text-[var(--color-dark-brown)] max-w-lg mx-auto leading-relaxed mb-10 italic">
            "Together with our families, we look forward to celebrating the beginning of our forever with you."
          </p>

          <div className="flex flex-col gap-2 font-traditional tracking-widest text-sm uppercase text-[var(--color-maroon)] mb-12">
            <span>{weddingData.date.fullDate}</span>
            <span className="text-[var(--color-gold)]">{weddingData.date.time}</span>
            <span>{weddingData.venue.name}, {weddingData.venue.location.split(',')[0]}</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="rsvp" 
              smooth={true} 
              duration={800}
              className="py-4 px-8 bg-[var(--color-maroon)] text-[var(--color-ivory)] font-traditional tracking-widest text-xs uppercase hover:bg-[var(--color-dark-brown)] transition-colors rounded-sm cursor-pointer shadow-md"
            >
              RSVP Now
            </Link>
            <a 
              href={weddingData.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border border-[var(--color-gold)] text-[var(--color-maroon)] font-traditional tracking-widest text-xs uppercase hover:bg-[var(--color-champagne)] transition-colors rounded-sm shadow-md"
            >
              Get Directions
            </a>
          </div>

          {/* Elegant Bottom Center Motif */}
          <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 flex items-center justify-center text-[var(--color-gold)] opacity-80 mt-12 w-full">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2 scale-y-[-1]">
              <path d="M12 2L15 12L24 12L16 17L19 24L12 19L5 24L8 17L0 12L9 12L12 2Z" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
