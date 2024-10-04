import React, { useState, useEffect } from "react";


import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import skills from "../../../data/skills.json";

// import history from "../../data/history.json";
// import history from "../../../data/history.json";

import { getImageUrl } from "../../utils";
import { useParams } from 'react-router-dom';

export const Experience = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/data/skills.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const skillsdata = await response.json();
      setData(skillsdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [historyData, sethistoryData] = useState([]);

  useEffect(() => {
    fetchhistoryData();
  }, []);

  const fetchhistoryData = async () => {
    try {
      const response = await fetch('/data/history.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const historydata = await response.json();
      sethistoryData(historydata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const { id } = useParams();
  
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {data.map((skill, index) => {
            return skill.id == id &&
              <section>
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
              </section>;
          })}
        </div>
        <ul className={styles.history}>
          {historyData.map((historyItem, index) => {
            return historyItem.id == id  && <section>
              <li key={index} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.organisation}`}</h3>
                  <h4>{`${historyItem.role}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={index}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
              </section>;
          })}
        </ul>
      </div>
    </section>
  );
};
