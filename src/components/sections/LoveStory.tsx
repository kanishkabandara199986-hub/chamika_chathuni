import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";
import { Heart, Sparkles, Star } from "lucide-react";

const icons = [Heart, Sparkles, Star];

export function LoveStory() {
  return (
    <Section id="story" className="bg-[var(--color-champagne)] relative">
      <div className="absolute inset-0 bg-pattern-kandyan opacity-5 pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-maroon)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Love Story
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-dark-brown)] font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A Journey of Two Hearts
        </motion.h2>
        <motion.p 
          className="font-body text-[var(--color-dark-brown)]/80 italic max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Every beautiful love story has a beginning… this is ours.
        </motion.p>
      </div>

      <div className="relative max-w-3xl mx-auto py-10">
        {/* Central glowing line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent -translate-x-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="flex flex-col gap-12 md:gap-24">
          {weddingData.loveStory.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className={`relative flex items-center md:justify-between w-full ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-ivory)] border-2 border-[var(--color-gold)] shadow-[0_0_10px_rgba(212,175,55,0.5)] -translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                />

                {/* Content Box */}
                <motion.div 
                  className={`w-full ml-12 md:ml-0 md:w-[45%] flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                >
                  <div className="bg-[var(--color-ivory)] p-6 rounded-sm shadow-md border border-[var(--color-gold)]/20 relative w-full group hover:border-[var(--color-gold)]/50 transition-colors overflow-hidden">
                    {/* Small dot connecting to line on desktop */}
                    <div className={`hidden md:block absolute top-1/2 w-8 h-px bg-[var(--color-gold)]/50 -translate-y-1/2 ${isEven ? '-right-8' : '-left-8'}`} />
                    
                    {/* Romantic faded icon watermark */}
                    <div className={`absolute top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none transition-opacity duration-700 group-hover:opacity-10 text-[var(--color-maroon)] ${isEven ? 'right-6 md:left-6 md:right-auto' : 'right-6'}`}>
                      <Icon size={80} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <span className="font-traditional text-xl text-[var(--color-gold)] mb-2 block">{milestone.year}</span>
                      <h3 className="font-heading text-2xl font-bold text-[var(--color-maroon)] mb-2">{milestone.title}</h3>
                      <p className="font-body text-sm text-[var(--color-dark-brown)] leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
