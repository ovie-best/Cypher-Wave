import Button from "./Button";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <h1>
        Empowering Businesses Through Revolutionary Tech <br /> The Future
        Begins with Cypher Wave
      </h1>
      <p>
        Discover how our cutting-edge solutions and innovative technologies
        <br />
        drive transformation and success, positioning you at the forefront of
        <br />
        tomorrow&apos;s digital landscape.
      </p>
      <Button className={styles.btn}>Get Started</Button>
    </main>
  );
}

export default Main;
