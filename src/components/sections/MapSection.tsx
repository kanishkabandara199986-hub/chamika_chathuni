import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";

export function MapSection() {
  return (
    <Section className="bg-[var(--color-champagne)] relative">
      <div className="text-center mb-12 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-maroon)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Find Your Way to Us
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-dark-brown)] font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {weddingData.venue.name}
        </motion.h2>
        <motion.div 
          className="flex items-center justify-center gap-2 font-body text-[var(--color-dark-brown)]/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <MapPin size={18} className="text-[var(--color-maroon)]" />
          <span>{weddingData.venue.location}</span>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto rounded-sm overflow-hidden shadow-2xl border-2 border-[var(--color-gold)]/30 relative bg-[var(--color-ivory)] p-2 group cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a 
          href={weddingData.venue.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video w-full relative overflow-hidden"
        >
          <img 
            src="/assets/images/hotel.webp" 
            alt={weddingData.venue.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
          />
          <div className="absolute inset-0 bg-[var(--color-maroon)]/0 group-hover:bg-[var(--color-maroon)]/20 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-[var(--color-ivory)] text-[var(--color-maroon)] py-3 px-6 rounded-full font-traditional tracking-widest text-xs shadow-xl flex items-center gap-2">
              <MapPin size={16} />
              Open in Maps
            </div>
          </div>
        </a>
      </motion.div>

      <motion.div 
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <a 
          href={weddingData.venue.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-4 px-8 bg-transparent border border-[var(--color-maroon)] text-[var(--color-maroon)] font-traditional tracking-widest text-sm uppercase hover:bg-[var(--color-maroon)] hover:text-[var(--color-ivory)] transition-colors rounded-sm"
        >
          Open in Google Maps
        </a>
      </motion.div>
    </Section>
  );
}
