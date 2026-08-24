import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { Quote } from "lucide-react";

const initialWishes: { name: string; message: string }[] = [];

export function GuestWishes() {
  const [wishes, setWishes] = useState(initialWishes);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setWishes([{ name: newName, message: newMessage }, ...wishes]);
      setNewName("");
      setNewMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Section className="bg-[var(--color-ivory)] relative">
      <div className="absolute inset-0 bg-pattern-dots pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          className="font-traditional tracking-widest text-[var(--color-gold)] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Guestbook
        </motion.p>
        <motion.h2 
          className="font-heading text-4xl md:text-5xl text-[var(--color-maroon)] font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Leave a Wish
        </motion.h2>
        <motion.p 
          className="font-body text-[var(--color-dark-brown)]/80 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          A few words, a lifetime of memories.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-lg border border-[var(--color-gold)]/20">
            <h3 className="font-heading text-2xl text-[var(--color-maroon)] mb-6">Write to the Couple</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-2">Your Name</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required 
                  className="w-full bg-transparent border-b border-[var(--color-gold)]/50 py-2 px-0 focus:outline-none focus:border-[var(--color-maroon)] transition-colors font-body text-[var(--color-dark-brown)] placeholder:text-[var(--color-dark-brown)]/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block font-traditional text-xs tracking-widest uppercase text-[var(--color-maroon)] mb-2">Your Wish</label>
                <textarea 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--color-gold)]/50 py-2 px-0 focus:outline-none focus:border-[var(--color-maroon)] transition-colors font-body text-[var(--color-dark-brown)] resize-none placeholder:text-[var(--color-dark-brown)]/30"
                  placeholder="Wishing you a lifetime of happiness..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-4 py-3 bg-[var(--color-maroon)] text-[var(--color-ivory)] font-traditional tracking-widest text-sm uppercase hover:bg-[var(--color-dark-brown)] transition-colors rounded-sm flex justify-center items-center"
              >
                {isSubmitting ? "Sending..." : "Send Wish"}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Wishes Display */}
        <motion.div
          className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence>
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-sm shadow-md border border-[var(--color-gold)]/10 relative group"
              >
                <Quote className="absolute top-4 right-4 text-[var(--color-gold)]/20 rotate-180" size={32} />
                <p className="font-body text-sm text-[var(--color-dark-brown)] italic leading-relaxed mb-4 relative z-10">
                  "{wish.message}"
                </p>
                <p className="font-traditional tracking-widest uppercase text-xs text-[var(--color-maroon)] font-semibold">
                  - {wish.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </Section>
  );
}
