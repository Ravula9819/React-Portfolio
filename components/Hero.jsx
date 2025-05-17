import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ravula Namratha</h1>
      <p
  className={styles.description}
  style={{
    textAlign: "justify",
    marginRight: "60px",
  }}
>
  I’m Ravula Namratha, a dedicated final-year B.Tech student specializing in Information Technology at Malla Reddy College of Engineering and Technology, currently holding a CGPA of 8.8. With strong expertise in frontend development, particularly React, JavaScript, HTML, CSS, and Java, I am committed to building efficient and scalable web applications. I thrive on continuous learning and applying my skills through real-world projects and internships to deliver impactful solutions.
</p>


        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          My Resume
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
