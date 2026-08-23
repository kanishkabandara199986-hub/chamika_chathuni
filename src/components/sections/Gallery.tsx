import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Section } from "../ui/Section";

const images = [
  { src: "/assets/images/hero_couple.png", alt: "Couple Portrait", className: "col-span-12 md:col-span-8 row-span-2" },
  { src: "/assets/images/gallery_1.png", alt: "Close up", className: "col-span-6 md:col-span-4 row-span-1" },
  { src: "/assets/images/gallery_2.png", alt: "Pre-wedding", className: "col-span-6 md:col-span-4 row-span-1" },
  // Duplicate images for masonry effect demonstration since we only generated 3
  { src: "/assets/images/gallery_1.png", alt: "Close up 2", className: "col-span-6 md:col-span-4 row-span-1 md:col-start-9" },
  { src: "/assets/images/gallery_2.png", alt: "Pre-wedding 2", className: "col-span-6 md:col-span-4 row-span-1 md:col-start-5" },
  { src: "/assets/images/hero_couple.png", alt: "Couple Portrait 2", className: "col-span-12 md:col-span-4 row-span-2" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="gallery" className="bg-[var(--color-champagne)] relative">
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-maroon)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Moments of Us
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-dark-brown)] font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A Lifetime of Memories
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative rounded-sm overflow-hidden group cursor-pointer ${img.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 * (index % 4) }}
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="absolute inset-0 bg-[var(--color-gold)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
              <ZoomIn className="text-white scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" size={32} />
            </div>
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-full object-contain rounded-sm border-2 border-[var(--color-gold)]/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
