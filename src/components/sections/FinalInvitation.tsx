import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";

export function FinalInvitation() {
  return (
    <Section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center !max-w-none px-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/gallery_2.png" 
          alt="Romantic Background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[var(--color-ivory)]/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 border border-[var(--color-gold)]/30 bg-white/50 backdrop-blur-sm rounded-sm shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[var(--color-gold)]" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[var(--color-gold)]" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[var(--color-gold)]" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--color-gold)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
              className="py-4 px-8 bg-[var(--color-maroon)] text-[var(--color-ivory)] font-traditional tracking-widest text-xs uppercase hover:bg-[var(--color-dark-brown)] transition-colors rounded-sm cursor-pointer"
            >
              RSVP Now
            </Link>
            <a 
              href={weddingData.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border border-[var(--color-gold)] text-[var(--color-maroon)] font-traditional tracking-widest text-xs uppercase hover:bg-[var(--color-champagne)] transition-colors rounded-sm"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
