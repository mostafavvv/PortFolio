import React from 'react'


import About from '../component/about/About'
import Contact from '../component/contact/Contact'
import Footer from '../component/footer/Footer'
import Navbar from '../component/navbar/Navbar'
import Project from '../component/project/Project'
import Skills from '../component/skills/Skills'

const Home = () => {
  return (
    <div >
        <div >
            <Navbar />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    </div>
  )
}

export default Home
