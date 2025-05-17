// src/components/Education/Education.jsx
import React from "react";
import styles from "./Education.module.css";

const educationData = [
  {
    institute: "Malla Reddy College of Engineering and Technology",
    degree: "B.Tech in Information Technology",
    period: "2022 – 2026",
    cgpa: "8.88",
  },
  {
    institute: "Sri Chaitanya Junior Kalasala",
    degree: "Intermediate",
    period: "2020 – 2022",
    cgpa: "9.28",
  },
  {
    institute: "Pratibha High School",
    degree: "Secondary Education",
    period: "2019 – 2020",
    cgpa: "9.8",
  },
];

export const Education = () => (
  <section className={styles.container} id="education">
    <h2 className={styles.title}>Education</h2>
    <ul className={styles.list}>
      {educationData.map((item, idx) => (
        <li key={idx} className={styles.card}>
          <div className={styles.header}>
            <h3 className={styles.institute}>{item.institute}</h3>
            <span className={styles.period}>{item.period}</span>
          </div>
          <p className={styles.degree}>{item.degree}</p>
          {item.cgpa && <span className={styles.detail}>CGPA: {item.cgpa}</span>}
          {item.percentage && <span className={styles.detail}>Percentage: {item.percentage}</span>}
        </li>
      ))}
    </ul>
  </section>
);
