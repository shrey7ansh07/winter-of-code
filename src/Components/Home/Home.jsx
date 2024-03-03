import React from 'react'
import Timeline from './Timeline.jsx'
import { Top } from "../../index.js"
import About from './About.jsx'
import ParticlesContainer from './ParticleContainer.jsx'

function Home() {
    return (
        <div>
            <ParticlesContainer />
            <Top />
            <About/>
            <Timeline/>
        </div>
    )
}

export default Home