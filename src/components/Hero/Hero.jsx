import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useParams } from 'react-router-dom';
// import projects from "../../data/projects.json";
// import projects from "../../../data/projects.json";



export const Hero = () => {
  
  const { id } = useParams();
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/data/projects.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const projectsdata = await response.json();
      setData(projectsdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <section>
    
      
        
        {data.map((abt) => {

          return abt.id == id  && <section className={styles.container}>
          
          <div className={styles.content}>
          <h1 className={`${styles.title} ${styles.anim}`}>{abt.selfIntro}</h1>
          <p className={styles.description}>{abt.tagline}</p>
          <a href={'mailto:'+`${abt.emailId}`} className={styles.contactBtn}> Contact Me </a>
          </div>
          
          <img
          src={getImageUrl(`${abt.imageSrc}`)}
          alt="Hero image of me"
          className={`${styles.heroImg} ${styles.anim}`}/>
      
          </section>
        })}
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
          </section>
          
        
  );
};




