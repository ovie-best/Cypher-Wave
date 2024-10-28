import { Link } from "react-router-dom";
import Button from "./Button";
import Typewriter from "typewriter-effect";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <h1>
          Empowering Businesses Through Revolutionary Tech
          <br className={styles.br} /> The Future Begins with
          <span>
            <Typewriter
              options={{
                strings: [" Cypher Wave"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p>
          Discover how our cutting-edge solutions and innovative technologies
          drive transformation and success, <br className={styles.br} />
          positioning you at the forefront of tomorrow&apos;s digital landscape.
        </p>
      </div>
      <div className={styles.btn}>
        <Link to="services">
          <Button>Get Started</Button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
