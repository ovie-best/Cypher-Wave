import styles from "./Header.module.css";

import Logo from "./Logo";
import Button from "./Button";
import PageNav from "./PageNav";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} ${styles.desktopnav}`}>
        <div className={styles.mobile}>
          <Logo />
        </div>

        <PageNav />
        <NavLink to="/contact">
          <Button>Contact Us</Button>
        </NavLink>
      </div>

      {isOpen && (
        <div className={`${styles.headerContent} ${styles.mobilenav}`}>
          <div className={styles.mobile}>
            <Logo />
          </div>

          <PageNav />
          <NavLink to="/contact">
            <Button>Contact Us</Button>
          </NavLink>
        </div>
      )}

      <div className={styles.toggler}>
        <Logo />

        <button onClick={handleToggle}> {isOpen ? `✖️` : <FaBars />}</button>
      </div>
    </header>
  );
}

export default Header;
