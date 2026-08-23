import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { weddingData } from "../../data/weddingData";
import { Check } from "lucide-react";

export function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <Section id="rsvp" className="bg-[var(--color-ivory)] relative">
      <div className="absolute inset-0 bg-pattern-dots pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-gold)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          RSVP
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-maroon)] font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Will You Celebrate With Us?
        </motion.h2>
        <motion.p 
          className="font-body text-[var(--color-dark-brown)]/80 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Your presence would make our special day even more memorable.
        </motion.p>
      </div>

      <motion.div 
        className="max-w-xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-[var(--color-gold)]/30 flex flex-col gap-6"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-2">Guest Name(s)</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-transparent border-b border-[var(--color-gold)]/50 py-2 px-0 focus:outline-none focus:border-[var(--color-maroon)] transition-colors font-body text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/30"
                  placeholder="Mr & Mrs Perera"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full bg-transparent border-b border-[var(--color-gold)]/50 py-2 px-0 focus:outline-none focus:border-[var(--color-maroon)] transition-colors font-body text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/30"
                    placeholder="+94 7X XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-2">Number of Guests</label>
                  <select 
                    className="w-full bg-transparent border-b border-[var(--color-gold)]/50 py-2 px-0 focus:outline-none focus:border-[var(--color-maroon)] transition-colors font-body text-[var(--color-dark-brown)]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-4">Will You Attend?</label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer group">
                    <input type="radio" name="attendance" value="accept" className="peer sr-only" defaultChecked />
                    <div className="text-center py-3 px-4 border border-[var(--color-gold)]/30 peer-checked:border-[var(--color-maroon)] peer-checked:bg-[var(--color-maroon)] peer-checked:text-[var(--color-ivory)] transition-all font-body text-sm rounded-sm">
                      Joyfully Accept
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer group">
                    <input type="radio" name="attendance" value="decline" className="peer sr-only" />
                    <div className="text-center py-3 px-4 border border-[var(--color-gold)]/30 peer-checked:border-[var(--color-maroon)] peer-checked:bg-[var(--color-maroon)] peer-checked:text-[var(--color-ivory)] transition-all font-body text-sm rounded-sm">
                      Regretfully Decline
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-2">Message for the Couple (Optional)</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-[var(--color-gold)]/50 py-2 px-0 focus:outline-none focus:border-[var(--color-maroon)] transition-colors font-body text-[var(--color-dark-brown)] resize-none placeholder:text-[var(--color-dark-brown)]/30"
                  placeholder="Can't wait to celebrate with you!"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full py-4 bg-[var(--color-maroon)] text-[var(--color-ivory)] font-traditional tracking-widest text-sm uppercase hover:bg-[var(--color-dark-brown)] transition-colors rounded-sm flex justify-center items-center h-14"
              >
                {isSubmitting ? (
                  <motion.div 
                    className="w-5 h-5 border-2 border-[var(--color-ivory)]/30 border-t-[var(--color-ivory)] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  "Send RSVP"
                )}
              </button>

              <div className="text-center mt-4">
                <p className="font-traditional text-xs tracking-widest uppercase text-[var(--color-dark-brown)]/50">Direct Contacts</p>
                <p className="font-body text-sm text-[var(--color-dark-brown)] mt-1">
                  Chamika: {weddingData.couple.groom.rsvp} <br/>
                  Chathuni: {weddingData.couple.bride.rsvp}
                </p>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-sm shadow-xl border border-[var(--color-gold)] flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Confetti simulation */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[var(--color-gold)]"
                  initial={{ 
                    x: "50%", 
                    y: "50%", 
                    opacity: 1 
                  }}
                  animate={{ 
                    x: `${50 + (Math.random() * 100 - 50)}%`, 
                    y: `${50 + (Math.random() * 100 - 50)}%`, 
                    opacity: 0,
                    scale: 0
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              ))}

              <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center mb-6 text-[var(--color-gold)]">
                <Check size={32} />
              </div>
              <h3 className="font-heading text-3xl font-bold text-[var(--color-maroon)] mb-4">Thank You!</h3>
              <p className="font-body text-[var(--color-dark-brown)]">
                Thank you for being part of our beautiful journey. ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
