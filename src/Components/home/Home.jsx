import React from 'react'
import Intro from '../intro/Intro'
import About from '../about/About'
import Skill from '../skills/Skill'
import Services from '../services/Services'
import Footer from '../footer/Footer'
import Work from '../work/Work'
import Contacts from '../contact/Contacts'
const Home = () => {
    return (
        <>
            <Intro />
            <About />
            <Skill />
            <Services />
            <Work />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home
