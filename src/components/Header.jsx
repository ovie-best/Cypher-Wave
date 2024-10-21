import styles from "./Header.module.css";

import Logo from "./Logo";
import Button from "./Button";
import PageNav from "./PageNav";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <PageNav />
        <NavLink to="/contact">
          <Button>Contact Us</Button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
