import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: "#050816",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },

          color: {
            value: ["#8b5cf6", "#22d3ee"],
          },

          links: {
            enable: true,
            distance: 160,
            color: "#8b5cf6",
            opacity: 0.25,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.6,
          },

          size: {
            value: {
              min: 2,
              max: 5,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            onClick: {
              enable: true,
              mode: "push",
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.7,
              },
            },

            push: {
              quantity: 4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;