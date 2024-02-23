import React from "react";
import {  BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fawhatsapp } from '@fortawesome/free-solid-svg-icons';


export const ProjectCard = ({
  
  project: {id, name, imageSrc, emailId, whatsapp, description,},
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
        <a href={'mailto:'+`${emailId}`} className={styles.fb}><i className="fa-solid fa-envelope"></i></a>
        <a href={'http://wa.me/'+`${whatsapp}`} className={styles.twitter}><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      <div className={styles.buttons}>

        {/* <a href="http://"></a> */}
       
        <button><Link to={`/portfolio/${id}`} > Visit Profile </Link></button>
      </div>
      
        </div>


  );
};


{/* <i class="fa-duotone fa-envelope"></i>
<i class="fa-brands fa-whatsapp" style="color: #63E6BE;"></i>
<i class="fa-brands fa-whatsapp"></i>
<i class="fa-solid fa-envelope"></i> */}