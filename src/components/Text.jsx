import React, { useState } from "react";
import Typewriter from "typewriter-effect"
export const Text = () => {

    return (
        <div className="text-animation">
            <span>
            <Typewriter
            options={{loop : true,}}
            onInit={(typewriter) => {
                typewriter
                .typeString("Front-End Developer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("3D/2D Animator.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Content Creator.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("React Developer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Game Developer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Graphics Designer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("VFX Artist")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
        />
        
        </span>
        </div>
    )
}