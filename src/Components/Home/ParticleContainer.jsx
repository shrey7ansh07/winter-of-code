import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles"; 

const ParticlesContainer = () => {
  const ParticlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const ParticlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className=" w-full h-full absolute translate-z-0 z-0"
      id="tsparticles"
      init={ParticlesInit}
      loaded={ParticlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00C2FF",
          },
          links: {
            color: "#0094ff",
            distance: 150,
            enable: true,
            opacity: 0,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'one',
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },

          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
        options: {
          polygon: {
            sides: 8, 
          },
          radius: 100,
          }},
          size: {
            value: {
              min: 3,
              max: 8,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
