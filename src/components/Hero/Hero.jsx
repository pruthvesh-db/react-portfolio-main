import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useParams } from 'react-router-dom';
import projects from "../../data/projects.json";



export const Hero = () => {
  
  const { id } = useParams();
  
  
  return (
    <section>
    
      
        
        {projects.map((abt) => {

          return abt.id == id  && <section className={styles.container}>
          
          <div className={styles.content}>
          <h1 className={styles.title}>{abt.selfIntro}</h1>
          <p className={styles.description}>{abt.tagline}</p>
          <a href={'mailto:'+`${abt.emailId}`} className={styles.contactBtn}> Contact Me </a>
          </div>
          
          <img
          src={getImageUrl(`${abt.imageSrc}`)}
          alt="Hero image of me"
          className={styles.heroImg}/>
      
          </section>
        })}
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
          </section>
          
        
  );
};




