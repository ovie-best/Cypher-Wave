import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Innovation.module.css";

function Innovation() {
  return (
    <section className={styles.innovate}>
      <div className={styles.innovateIntro}>
        <h1>Unleashing the Power of Innovation</h1>
        <p>Pioneering Apps, Websites, Drones, AI and software, and so on</p>

        <Link to="services">
          <Button>Know More</Button>
        </Link>
      </div>
    </section>
  );
}

export default Innovation;
