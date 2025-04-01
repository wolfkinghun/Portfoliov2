import React, { useState, useMemo } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Memoize the menu button image to avoid recalculating it on every render
  const menuIcon = useMemo(() => {
    return menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png");
  }, [menuOpen]);

  // Optimized menu toggle
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuIcon}
          alt="menu-button"
          onClick={handleMenuToggle}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Rólam</a>
          </li>
          <li>
            <a href="#experience">Tapasztalat</a>
          </li>
          <li>
            <a href="#projects">Projektek</a>
          </li>
          <li>
            <a href="#contact">Kapcsolat</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
