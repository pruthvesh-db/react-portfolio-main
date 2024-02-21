import React from "react";
import {  BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { name, imageSrc, description, skills, demo, source },
}) => {
  return (
    

    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${name}`}
        className={styles.image}
      />
      <h3 className={styles.nametitle}>{name}</h3>
      <p className={styles.description}>{description}</p>
      {/* <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul> */}
      
 
      <div className={styles.links}>    
     
        {/* <a href={demo} className={styles.link}>
          Visit Profile
        </a> */}
        {/* <a className={styles.link}> */}
        
            <a className={styles.link}>
              <Link to={demo}> Visit Profile </Link>
            </a>
      </div>
    </div>

  );
};
