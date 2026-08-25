import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  autoPlay?: boolean;
}

export function AudioPlayer({ autoPlay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Auto-play prevented by browser. User interaction needed.", err);
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/assets/audio/background-music.mp3" 
        loop 
        preload="auto"
      />
      
      <motion.button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[var(--color-ivory)] text-[var(--color-maroon)] rounded-full flex items-center justify-center shadow-lg border-2 border-[var(--color-gold)] hover:bg-[var(--color-champagne)] transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Music size={20} />
          </motion.div>
        ) : (
          <VolumeX size={20} />
        )}
      </motion.button>
    </>
  );
}
