import { useState, useEffect, lazy, Suspense } from "react";
import { Preloader } from "./components/sections/Preloader";
import { Hero } from "./components/sections/Hero";
import { FloatingPetals } from "./components/ui/FloatingPetals";
import { FloralDecorations } from "./components/ui/FloralDecorations";

// Lazy load below-the-fold components for better performance
const CoupleSection = lazy(() => import("./components/sections/CoupleSection").then(module => ({ default: module.CoupleSection })));
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

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-dark-brown)] font-body selection:bg-[var(--color-gold)] selection:text-[var(--color-maroon)] relative">
      <Preloader isVisible={showPreloader} onComplete={() => setShowPreloader(false)} />
      
      {!showPreloader && (
        <>
          <FloralDecorations />
          <FloatingPetals />
          
          <main className="relative z-10">
            <Hero />
            <Suspense fallback={null}>
              <CoupleSection />
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
