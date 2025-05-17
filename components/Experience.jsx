import React from "react";
import styles from "./Experience.module.css";

import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import graphqlImg from "../../assets/skills/graphql.png";
import reactImg from "../../assets/skills/react.png";
import nodeImg from "../../assets/skills/node.png";



const skills = [
  { title: "HTML", image: htmlImg },
  { title: "CSS", image: cssImg },
   { title: "JavaScript", image: graphqlImg },
  { title: "React", image: reactImg },
  { title: "Java", image: nodeImg },
 
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skill.image} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};