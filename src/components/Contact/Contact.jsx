import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import { useParams } from 'react-router-dom';

export const Contact = () => {

  const { id } = useParams();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

    {projects.map((abt) => {

          return abt.id == id  && <ul className={styles.links}>
          <li className={styles.link}>
              <img src={getImageUrl("contact/call.png")} alt="Call icon" />
              <a href={'tel:'+`${abt.contact}`}>{abt.contact}</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href={'mailto:'+`${abt.emailId}`}>{abt.emailId}</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href={'https://www.'+`${abt.linkedIn}`}>{abt.linkedIn}</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href={'https://www.'+`${abt.github}`}>{abt.github}</a>
            </li>
          </ul>
        })}









      {/* <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/call.png")} alt="Call icon" />
          <a href="+91 94082 88929">+91 94082 88929</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:chochapruthvesh@email.com">chochapruthvesh@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/pruthveshchocha/">linkedin.com/in/pruthveshchocha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/pruthveshchocha">github.com/pruthveshchocha</a>
        </li>
      </ul> */}

    </footer>
  );
};
