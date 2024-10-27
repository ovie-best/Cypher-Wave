import Button from "./Button";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <h1>
        Empowering Businesses Through Revolutionary Tech{" "}
        <br className={styles.br} /> The Future Begins with{" "}
        <span>Cypher Wave</span>
      </h1>
      <p>
        Discover how our cutting-edge solutions and innovative technologies
        drive transformation and success, <br className={styles.br} />
        positioning you at the forefront of tomorrow&apos;s digital landscape.
      </p>
      <Button className={styles.btn}>Get Started</Button>
    </main>
  );
}

export default Main;
