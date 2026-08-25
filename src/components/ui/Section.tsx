import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function Section({ children, className, id, delay = 0 }: SectionProps) {
  return (
    <section id={id} className={twMerge(clsx("relative overflow-hidden", className))}>
      {/* Traditional Kandyan Frame & Ornaments for Every Section */}
      <div className="absolute inset-4 md:inset-8 border border-[var(--color-gold)]/20 pointer-events-none z-0 rounded-sm">
        {/* Ornamental Corners (Liyawel inspired) */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--color-gold)]/60 -translate-x-[2px] -translate-y-[2px] rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--color-gold)]/60 translate-x-[2px] -translate-y-[2px] rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--color-gold)]/60 -translate-x-[2px] translate-y-[2px] rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--color-gold)]/60 translate-x-[2px] translate-y-[2px] rounded-br-3xl" />
        
        {/* Corner inner dots */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[var(--color-gold)]/50" />
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--color-gold)]/50" />
        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[var(--color-gold)]/50" />
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[var(--color-gold)]/50" />

        {/* Center Top/Bottom Lotus Motifs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-gold)]/70">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 C 55 25, 65 35, 88 50 C 65 65, 55 75, 50 88 C 45 75, 35 65, 12 50 C 35 35, 45 25, 50 12 Z" fill="currentColor" />
            <circle cx="50" cy="50" r="12" fill="var(--color-ivory)" opacity="0.8" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[var(--color-gold)]/70">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 C 55 25, 65 35, 88 50 C 65 65, 55 75, 50 88 C 45 75, 35 65, 12 50 C 35 35, 45 25, 50 12 Z" fill="currentColor" />
            <circle cx="50" cy="50" r="12" fill="var(--color-ivory)" opacity="0.8" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
          </svg>
        </div>
      </div>

      <motion.div
        className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
