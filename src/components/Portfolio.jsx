import React, { useEffect } from 'react'
import { Navbar } from './Navbar/Navbar'
import { Hero } from './Hero/Hero'
import { About } from './About/About'
import { Experience } from './Experience/Experience'
import { Contact } from './Contact/Contact'
import styles from "./portfolio.module.css";


export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.zoomout}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
    </div>
  )
}
