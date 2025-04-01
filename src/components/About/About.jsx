import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Rólam</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("Me.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Frontend fejlesztő vagyok, tapasztalattal rendelkezem reszponzív és optimalizált weboldalak készítésében.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Tapasztalatom van gyors és optimalizált back-end rendszerek és API-k fejlesztésében.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              UI tervezőként több weboldal designját készítettem el, és design rendszereket alakítottam ki, amelyek segítettek az egységes vizuális élmény megteremtésében és a felhasználói élmény javításában.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
