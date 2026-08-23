import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";

export function WeddingEvents() {
  return (
    <Section id="events" className="bg-[var(--color-ivory)] relative">
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-gold)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Celebration
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-maroon)] font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join Us
        </motion.h2>
      </div>

      <motion.div 
        className="max-w-2xl mx-auto bg-white rounded-sm shadow-2xl border border-[var(--color-gold)]/30 relative overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle background pattern on hover */}
        <div className="absolute inset-0 bg-pattern-kandyan opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />
        
        {/* Top gold border accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-50" />

        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-maroon)] mb-2">Wedding Ceremony</h3>
          <div className="w-16 h-px bg-[var(--color-gold)] mb-8" />

          <div className="flex flex-col gap-6 w-full max-w-md font-body text-[var(--color-dark-brown)] mb-10">
            <div className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-full bg-[var(--color-champagne)] flex items-center justify-center shrink-0 group-hover/item:bg-[var(--color-gold)] transition-colors">
                <Calendar className="text-[var(--color-maroon)] group-hover/item:text-white transition-colors" size={20} />
              </div>
              <div className="text-left">
                <p className="font-traditional text-xs tracking-widest text-[var(--color-gold)] uppercase mb-1">Date</p>
                <p className="font-medium text-lg">{weddingData.date.fullDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-full bg-[var(--color-champagne)] flex items-center justify-center shrink-0 group-hover/item:bg-[var(--color-gold)] transition-colors">
                <Clock className="text-[var(--color-maroon)] group-hover/item:text-white transition-colors" size={20} />
              </div>
              <div className="text-left">
                <p className="font-traditional text-xs tracking-widest text-[var(--color-gold)] uppercase mb-1">Time</p>
                <p className="font-medium text-lg">{weddingData.date.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-full bg-[var(--color-champagne)] flex items-center justify-center shrink-0 group-hover/item:bg-[var(--color-gold)] transition-colors">
                <MapPin className="text-[var(--color-maroon)] group-hover/item:text-white transition-colors" size={20} />
              </div>
              <div className="text-left">
                <p className="font-traditional text-xs tracking-widest text-[var(--color-gold)] uppercase mb-1">Venue</p>
                <p className="font-medium text-lg">{weddingData.venue.name}</p>
                <p className="text-sm opacity-80">{weddingData.venue.location}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a 
              href={weddingData.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 bg-[var(--color-maroon)] text-[var(--color-ivory)] font-traditional tracking-widest text-xs uppercase hover:bg-[var(--color-dark-brown)] transition-colors rounded-sm text-center"
            >
              Get Directions
            </a>
            <button 
              className="flex-1 py-3 px-6 border border-[var(--color-gold)] text-[var(--color-maroon)] font-traditional tracking-widest text-xs uppercase hover:bg-[var(--color-champagne)] transition-colors rounded-sm text-center"
            >
              Add to Calendar
            </button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
