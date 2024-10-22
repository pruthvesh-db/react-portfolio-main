import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Hero } from './Hero/Hero'
import { About } from './About/About'
import { Experience } from './Experience/Experience'
import { Contact } from './Contact/Contact'
import { useLocation } from 'react-router-dom';

export const Pruthvesh = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log('Current Path:', currentPath);
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
