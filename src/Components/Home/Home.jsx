import React from 'react'
import { Top } from "../../index.js"
import About from './About.jsx'
import ParticlesContainer from './ParticleContainer.jsx'

function Home() {
    return (
        <div>
            <ParticlesContainer />
            <Top />
            <About/>
            
        </div>
    )
}

export default Home