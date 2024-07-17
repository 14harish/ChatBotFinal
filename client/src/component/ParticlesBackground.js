import React from 'react'
import Particles from 'react-tsparticles'
// import back from './assets/image.png'
// import particlesConfig from "../config/particles";

function ParticlesBackground() {
  return (
    <Particles
    // id="tsparticles"
    // init={particlesInit}
    // loaded={particlesLoaded}
    className='h-screen'
    options={
        {
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
              move: {
                direction: "none",
                out_mode: "out",
                speed: 2,
              },
              line_linked: {
                enable: true,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                },
              },
            },
            background: {
              color: {
                value: "#000000",
              },
            },
          }}
></Particles>
  )
}

export default ParticlesBackground