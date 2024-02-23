import React, { useEffect } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Hero } from './Hero/Hero'
import { About } from './About/About'
import { Experience } from './Experience/Experience'
import { Contact } from './Contact/Contact'


export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
    </div>
  )
}
