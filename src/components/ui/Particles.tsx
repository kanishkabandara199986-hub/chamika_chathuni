import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function CustomParticles({ count = 80 }: { count?: number }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // This loads the slim version of tsparticles which includes everything needed for constellations
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: false },
              onHover: { enable: false },
              resize: { enable: true },
            },
          },
          particles: {
            color: {
              value: "#d4af37", // var(--color-gold)
            },
            links: {
              color: "#d4af37",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800
              },
              value: count,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

// Default export if needed, or simply re-export as Particles to match old name
export { CustomParticles as Particles };
