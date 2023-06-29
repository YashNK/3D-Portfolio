import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Languages ,StarsCanvas} from "./components"


const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <div className="bg-hero-pattern relative z-0 bg-cover bg-contain bg-center">
            {/* <StarsCanvas /> */}
            <Hero />
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <div className="bg-hero-pattern relative z-0 bg-cover bg-contain bg-center">
          <Languages />
          {/* <StarsCanvas /> */}
          </div>
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
