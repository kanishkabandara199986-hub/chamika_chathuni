import { useState, useEffect, lazy, Suspense } from "react";
import Lenis from "lenis";
import { Preloader } from "./components/sections/Preloader";
import { Hero } from "./components/sections/Hero";
import { FloatingPetals } from "./components/ui/FloatingPetals";
import { FloralDecorations } from "./components/ui/FloralDecorations";
import { Particles } from "./components/ui/Particles";
import { AudioPlayer } from "./components/ui/AudioPlayer";

// Lazy load below-the-fold components for better performance

const Countdown = lazy(() => import("./components/sections/Countdown").then(module => ({ default: module.Countdown })));
const LoveStory = lazy(() => import("./components/sections/LoveStory").then(module => ({ default: module.LoveStory })));
const WeddingEvents = lazy(() => import("./components/sections/WeddingEvents").then(module => ({ default: module.WeddingEvents })));
const RSVP = lazy(() => import("./components/sections/RSVP").then(module => ({ default: module.RSVP })));
const MapSection = lazy(() => import("./components/sections/MapSection").then(module => ({ default: module.MapSection })));
const GuestWishes = lazy(() => import("./components/sections/GuestWishes").then(module => ({ default: module.GuestWishes })));
const FinalInvitation = lazy(() => import("./components/sections/FinalInvitation").then(module => ({ default: module.FinalInvitation })));
const Footer = lazy(() => import("./components/sections/Footer").then(module => ({ default: module.Footer })));

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [playAudio, setPlayAudio] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Lenis for smooth scrolling only on non-touch devices
  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = 
      ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0) ||
      (window.matchMedia("(pointer: coarse)").matches);

    if (isTouchDevice) {
      return; // Skip Lenis on mobile for better native scrolling and to prevent jump-to-top bugs
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Ensure we start at the top when entering the site
      window.scrollTo(0, 0);
    }
  }, [showPreloader]);

  const handleEnterSite = () => {
    setShowPreloader(false);
    setPlayAudio(true);
  };

  return (
    <div className="bg-[var(--color-ivory)] bg-pattern-kandyan min-h-screen text-[var(--color-dark-brown)] font-body selection:bg-[var(--color-gold)] selection:text-[var(--color-maroon)] relative">
      <Preloader isVisible={showPreloader} onComplete={handleEnterSite} />
      
      {!showPreloader && (
        <>
          <AudioPlayer autoPlay={playAudio} />
          <FloralDecorations />
          <FloatingPetals />
          <Particles count={isMobile ? 25 : 80} />
          
          <main className="relative z-10">
            <Hero />
            <Suspense fallback={null}>

              <Countdown />
              <LoveStory />
              <WeddingEvents />
              <RSVP />
              <MapSection />
              <GuestWishes />
              <FinalInvitation />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
