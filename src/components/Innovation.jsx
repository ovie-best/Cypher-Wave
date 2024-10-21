import Button from "./Button";
import styles from "./Innovation.module.css";

function Innovation() {
  return (
    <section className={styles.innovate}>
      <div className={styles.innovateIntro}>
        <h1>Unleashing the Power of Innovation</h1>
        <p>Pioneering Apps, Websites, Drones, AI and software, and so on</p>
        <Button>Know More</Button>
      </div>
    </section>
  );
}

export default Innovation;
