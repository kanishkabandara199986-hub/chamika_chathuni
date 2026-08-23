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
        className="max-w-4xl mx-auto rounded-sm overflow-hidden shadow-2xl border-2 border-[var(--color-gold)]/30 relative bg-[var(--color-ivory)] p-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="aspect-video w-full relative">
          {/* Using a placeholder iframe since exact maps link isn't provided. This centers on Ampara */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126601.21731671231!2d81.60334816912388!3d7.291772099951664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5a3c104dbfc89%3A0xc0c8ff0a9f5d3db8!2sAmpara!5e0!3m2!1sen!2slk!4v1714571932626!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 sepia-[0.3] hue-rotate-[320deg] hover:grayscale-0 hover:sepia-0 transition-all duration-1000"
          ></iframe>
        </div>
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
