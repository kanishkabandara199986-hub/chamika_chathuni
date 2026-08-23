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
    <motion.section
      id={id}
      className={twMerge(
        clsx("py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10", className)
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
