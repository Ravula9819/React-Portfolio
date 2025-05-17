import React from 'react';
import styles from './Certificates.module.css';

import badge1 from '/src/assets/certificates/badge1.jpg';
import badge2 from '/src/assets/certificates/badge2.jpg';
import badge3 from '/src/assets/certificates/badge3.jpg';
import sih from '/src/assets/certificates/SIH.jpg';
import java from '/src/assets/certificates/java.jpg';
import html from '/src/assets/certificates/html.jpg';
import intel from '/src/assets/certificates/Intel.jpg';
import cambridge from '/src/assets/certificates/cambridge.jpg';
import techtinx from '/src/assets/certificates/techtirx.jpg';
import wadhwani from '/src/assets/certificates/wadhwani.jpg';
import sheets from '/src/assets/certificates/sheets.jpg';

const certificates = [
  { src: badge1, alt: "Badge 1" },
  { src: badge2, alt: "Badge 2" },
  { src: badge3, alt: "Badge 3" },
  { src: sih, alt: "SIH Certificate" },
  { src: java, alt: "Java Certificate" },
  { src: html, alt: "HTML Certificate" },
  { src: intel, alt: "Intel Certificate" },
  { src: cambridge, alt: "Cambridge Certificate" },
  { src: techtinx, alt: "Techtinx Certificate" },
  { src: wadhwani, alt: "Wadhwani Certificate" },
  { src: sheets, alt: "Sheets Certificate" },
];

export default function Certificates() {
  return (
    <section className={styles.certificatesSection}>
      <h2 className={styles.title}>CERTIFICATES</h2>
      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certItem}>
            <img src={cert.src} alt={cert.alt} className={styles.certImage} />
          </div>
        ))}
      </div>
    </section>
  );
}
