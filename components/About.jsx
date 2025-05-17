import React from "react";

import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon}
            alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
  src={serverIcon}
  alt="Server icon"
  style={{ width: "60px", height: "60px", padding: "2px", marginRight: "16px" }}
/>


            <div className={styles.aboutItemText}>
              <h3>Java Developer</h3>
              <p>
                Aspiring Java developer with a solid grasp of core Java concepts and a passion for learning and building practical projects

            </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};