import React, { useState } from "react";
import Typewriter from "typewriter-effect"
export const Text = () => {

    return (
        <div className="text-animation">
            <span>
            <Typewriter
            options={{loop : true,delay:25, }}
            onInit={(typewriter) => {
                typewriter
                .typeString("Html/CSS")
                .pauseFor(1500)
                .deleteAll()
                .typeString("C++")
                .pauseFor(1500)
                .deleteAll()
                .typeString("C Progaming")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Java")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Javascript")
                .pauseFor(1500)
                .deleteAll()
                .typeString("React")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Tailwind")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Three.js")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Canva")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Figma")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Blender")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Photoshop")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Krita")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Davinci Resolve")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Unity")
                .pauseFor(1500)
                .deleteAll()
                .typeString("After Effects")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Premier Pro")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
        />
        
        </span>
        </div>
    )
}