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
                .typeString("Front-End Developer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("3D/2D Animator.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Content Creator.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("React Developer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Game Developer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Graphics Designer.")
                .pauseFor(1500)
                .deleteAll()
                .typeString("VFX Artist")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
        />
        
        </span>
        </div>
    )
}