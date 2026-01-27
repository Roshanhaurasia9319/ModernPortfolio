import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FreelanceProjects from './components/FreelanceProjects'

function App() {
  return (
    < >
    <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <FreelanceProjects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </>
      
   
  )
}

export default App
