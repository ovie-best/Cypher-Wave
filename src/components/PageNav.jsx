import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Producs/Services</NavLink>
        </li>
        <li>
          <NavLink to="/solutions">Solutions</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
