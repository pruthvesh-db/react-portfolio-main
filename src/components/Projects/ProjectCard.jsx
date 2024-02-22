import React from "react";
import {  BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";


export const ProjectCard = ({
  
  project: {id, name, imageSrc, description, skills, demo, source },
}) => {
  
  return (
    
    <div className={`${styles.wrapper} ${styles.anim}`}>
      <div className={styles.imgArea}>
        <div className={styles.innerArea}>
          <img src={getImageUrl(imageSrc)} alt="" />
        </div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.about}>{description}</div>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.fb}><i className="fab fa-facebook-f"></i></a>
        <a href="#" className={styles.twitter}><i className="fab fa-twitter"></i></a>
        </div>
      <div className={styles.buttons}>
       
        <button><Link to={`/portfolio/${id}`} > Visit Profile </Link></button>
      </div>
      
        </div>


  );
};
