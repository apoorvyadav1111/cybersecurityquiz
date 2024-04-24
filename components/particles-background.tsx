"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadFull} from 'tsparticles';
import { useEffect } from "react";


const ParticlesContainer = ({children, color}:{children: React.ReactNode, color:string}) => {

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
            // await loadSlim(engine);
            //await loadBasic(engine);
        })
    }, []);
    return <>
    <Particles 
        className='particles'
        id='tsparticles' 
        // Remove the 'init' prop
        options={{
            fullScreen: {
                enable: true,
                zIndex: -1,
                
            },
            fpsLimit: 120,
            background: {
                color: {
                    value: ''
                }
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    }
                },
                modes: {
                    push:{
                        quantity: 10,
                        
                    },
                    repulse: {
                        distance: 150,
                        duration: 1.5
                    },
                }
            },
            particles: {
                twinkle: {
                    particles: {
                        enable: true,
                        frequency: 0.05,
                        opacity: 0.5
                    }
                },
                color:{
                    value:color
                },
                links: {
                    color: color,
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1.5
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: false,
                    speed: 0.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150
                },
                opacity: {
                    value: 1
                },
                shape: {
                    type: ['line','circle'],
                },
                size: {
                    value:{
                        min:1,
                        max:2
                    }
                }
            },
            detectRetina: true
        }}
        />
            {children}
        </>
}

export { ParticlesContainer }