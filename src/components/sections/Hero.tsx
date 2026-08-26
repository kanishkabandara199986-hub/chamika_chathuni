import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { weddingData } from "../../data/weddingData";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-champagne)]">
      {/* Background with texture and particles */}
      <div className="absolute inset-0 bg-pattern-kandyan opacity-20 pointer-events-none" />
      
      {/* Golden border frame */}
      <div className="absolute inset-4 md:inset-8 border-2 border-[var(--color-gold)]/30 pointer-events-none z-10 rounded-sm">
        {/* Ornamental Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)] -translate-x-[2px] -translate-y-[2px]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)] translate-x-[2px] -translate-y-[2px]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)] -translate-x-[2px] translate-y-[2px]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)] translate-x-[2px] translate-y-[2px]" />
      </div>

      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl mx-auto px-6 mt-16 md:mt-0">
        
        {/* Text Content */}
        <div className="text-center bg-[var(--color-ivory)]/80 backdrop-blur-sm p-6 md:p-10 w-full max-w-3xl rounded-sm shadow-xl relative mb-8">
          {/* Small corner accents on text box */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[var(--color-gold)]/50 rounded-full" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[var(--color-gold)]/50 rounded-full" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[var(--color-gold)]/50 rounded-full" />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-[var(--color-gold)]/50 rounded-full" />

          <motion.p 
            className="font-traditional tracking-[0.3em] uppercase text-xs md:text-sm text-[var(--color-gold)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {weddingData.title}
          </motion.p>
          
          <div className="font-heading text-[var(--color-maroon)] leading-none mb-6">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {weddingData.couple.groom.name}
            </motion.h1>
            <motion.div 
              className="text-3xl md:text-4xl font-traditional text-[var(--color-gold)] italic my-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              &
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {weddingData.couple.bride.name}
            </motion.h1>
          </div>

          <motion.p 
            className="font-body font-light text-sm md:text-base text-[var(--color-dark-brown)] mb-6 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            {weddingData.invitationMessage.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.p>

          <motion.div 
            className="pt-6 border-t border-[var(--color-gold)]/30 w-3/4 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "75%" }}
            transition={{ duration: 1.5, delay: 2.0 }}
          >
            <p className="font-traditional uppercase tracking-widest text-xs md:text-sm font-semibold">
              {weddingData.date.fullDate} • {weddingData.venue.name} • {weddingData.venue.location.split(',')[0]}
            </p>
          </motion.div>
        </div>

        {/* Main Visual - Image */}
        <motion.div 
          className="relative w-64 h-80 md:w-96 md:h-[30rem] overflow-hidden rounded-t-[100px] rounded-b-sm border-4 border-[var(--color-ivory)] shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }} // Delay after preloader
        >
          <motion.img 
            src="/assets/images/hero_couple.webp" 
            alt="Chamika and Chathuni"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width="400"
            height="500"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(104,26,42,0.2)] pointer-events-none" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-12 cursor-pointer z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Link to="story" smooth={true} duration={800} className="flex flex-col items-center group">
            <span className="font-traditional text-xs tracking-widest uppercase mb-2 text-[var(--color-dark-brown)] group-hover:text-[var(--color-maroon)] transition-colors">Explore Our Story</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-[var(--color-gold)] group-hover:text-[var(--color-maroon)] transition-colors" size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
