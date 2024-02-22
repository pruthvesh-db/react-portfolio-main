import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import abouts from "../../data/about.json";
import { useParams } from 'react-router-dom';

export const About = () => {

  const { id } = useParams();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/img3.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          {abouts.map((about, index) => {

          return about.id == id  && <li key={index} className={styles.aboutItem}>

            <img src={getImageUrl(about.iconUrl)} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{about.title}</h3>
              <p>
                {about.description}
              </p>
            </div>

          </li>  
        })}
        </ul>
      </div>
    </section>
  );
};
