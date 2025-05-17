import React from "react";
import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.jpg";
import linkedinIcon from "../../assets/contact/linkedinIcon.jpg";
import githubIcon from "../../assets/contact/githubIcon.jpg";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>CONTACT</h2>
        <p className={styles.subheading}>Feel free to reach out!</p>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <img src={emailIcon} alt="Email icon" />
            <a href="mailto:ravulanamratha98@gmail.com" className={styles.link}>
              ravulanamratha98@email.com
            </a>
          </li>
          <li className={styles.contactItem}>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a
              href="https://www.linkedin.com/in/namratha-ravula"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              linkedin.com/namratha-ravula
            </a>
          </li>
          <li className={styles.contactItem}>
            <img src={githubIcon} alt="Github icon" />
            <a
              href="https://github.com/Ravula9819/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              github.com/namratha-ravula
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
