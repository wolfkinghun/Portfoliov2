import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const images = [
    getImageUrl("hero/DSC_5411.jpg"),
    getImageUrl("Me.png"),
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Full and short text for toggling
  const fullText =
    "Üdv, Kaszás István vagyok! Több mint 5 éve foglalkozom szoftverfejlesztéssel és teszteléssel, ahol a precizitás és a hatékonyság mindig kiemelt szerepet kap. Emellett szenvedélyem a videóvágás, ahol a kreativitás és a részletekre való odafigyelés ugyanolyan fontos számomra. Célom, hogy mindig minőségi munkát végezzek, legyen szó egy jól működő alkalmazásról vagy egy vizuálisan lenyűgöző videóról.";
  
  const shortText = fullText.substring(0, 100) + "...";

  useEffect(() => {
    setIsFlipping(true);
    let flipInterval = setInterval(() => {
      setFlipCount((prev) => prev + 1);
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 400); // Gyorsabb váltás

    setTimeout(() => {
      clearInterval(flipInterval);
      setIsFlipping(false);
    }, 800); // Kétszer fordul meg, aztán megáll

    return () => clearInterval(flipInterval);
  }, []);

  const handleClick = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipCount((prev) => prev + 1);

    setTimeout(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      setIsFlipping(false);
    }, 500);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Üdvözöllek az oldalamon</h1>
        <p className={styles.description}>
          {isExpanded ? fullText : shortText}
          <button
            className={styles.expandBtn}
            onClick={handleExpandClick}
          >
            {isExpanded ? "Kevesebb" : "Tovább"}
          </button>
        </p>
        <a href="mailto:istvanforcod@gmail.com" className={styles.contactBtn}>
          Lépj kapcsolatba velem
        </a>
      </div>
      <div className={styles.imageWrapper} onClick={handleClick}>
        <div 
          className={`${styles.flipContainer} ${isFlipping ? styles.flipping : ""}`} 
          style={{ transform: `rotateY(${flipCount * 180}deg)` }}
        >
          <img src={images[0]} alt="Hero 1" className={`${styles.heroImg} ${currentImage === 0 ? styles.visible : styles.hidden}`} />
          <img src={images[1]} alt="Hero 2" className={`${styles.heroImg} ${currentImage === 1 ? styles.visible : styles.hidden}`} />
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
