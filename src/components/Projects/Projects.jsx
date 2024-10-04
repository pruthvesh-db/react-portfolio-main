import React, { useState, useEffect } from "react";

import styles from "./Projects.module.css";

// import projects from "../../data/projects.json";
// import projectsdata from "../../../data/projects.json";

import { ProjectCard } from "./ProjectCard";



export const Projects = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('data/projects.json');
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
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Core Team</h2>
      <div className={styles.projects}>
        {data.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
