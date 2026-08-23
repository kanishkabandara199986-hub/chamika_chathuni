import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";
import { Section } from "../ui/Section";
import { Particles } from "../ui/Particles";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.date.iso).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <Section className="bg-[var(--color-maroon)] text-[var(--color-ivory)] relative overflow-hidden text-center py-24 md:py-32 !max-w-none">
      <Particles count={30} />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 bg-pattern-kandyan pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.p 
          className="font-traditional tracking-[0.2em] text-[var(--color-gold)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Counting Down to Forever
        </motion.p>
        
        <motion.h2 
          className="font-heading text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {weddingData.date.fullDate}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
            >
              <div className="w-20 h-24 md:w-28 md:h-32 border border-[var(--color-gold)]/30 rounded-sm flex items-center justify-center bg-[var(--color-maroon)]/50 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-heading text-4xl md:text-6xl font-light text-[var(--color-gold)] relative z-10">
                  {block.value.toString().padStart(2, '0')}
                </span>
                
                {/* Corner accents */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-[var(--color-gold)]/50" />
                <div className="absolute top-1 right-1 w-1 h-1 bg-[var(--color-gold)]/50" />
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-[var(--color-gold)]/50" />
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-[var(--color-gold)]/50" />
              </div>
              <span className="font-traditional tracking-widest text-xs uppercase mt-4 text-[var(--color-champagne)]">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
