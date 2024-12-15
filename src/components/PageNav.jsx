import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li>
          <NavLink className={styles.navli} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navli} to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navli} to="/services">
            Products/Services
          </NavLink>
        </li>

        <li>
          <NavLink className={styles.navli} to="/team">
            Team
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
