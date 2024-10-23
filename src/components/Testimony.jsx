import styles from "./Testimony.module.css";

export default function Testimony() {
  return (
    <section className={styles.testimony}>
      <div className={styles.container}>
        <div className={styles.cont2}>
          <div className={styles.quotes}>
            <div>
              <img src="images/quotes.png" />
            </div>
            <h1>
              Testimony From <br /> Customers
            </h1>
          </div>
          <div>
            <div className={`${(styles.testifier, styles.rR2)}`}>
              <img src="images/testifier.png" />
              <p>
                Cypher Wave Technology developed a fantastic app for us. Their
                team understood our vision and turned it into a highly engaging
                and user-friendly application. The innovative features and
                smooth performance have significantly boosted our user
                engagement and helped us stand out in a crowded market
              </p>
              <div className={styles.testifiercompany}>
                <p>GreenLeaf Solutions</p>
                <span>Website Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cont1}>
          <div>
            <div className={styles.testifier}>
              <img src="images/testifier.png" />
              <p>
                The team at Cypher Wave Technology transformed our website into
                a modern, responsive platform. Their attention to detail and
                creative design elements have elevated our brand&apos;s online
                presence. The new site is not only visually appealing but also
                highly functional, leading to increased customer interactions
                and satisfaction.
              </p>
              <div className={styles.testifiercompany}>
                <p>Techstart Inc. </p>
                <span>App Development</span>
              </div>
            </div>
          </div>
          <div>
            <div className={`${(styles.testifier, styles.rR1)}`}>
              <img src="images/testifier.png" />
              <p>
                Cypher Wave Technology&apos;s AI and robotics solutions have
                significantly improved our robots&apos; performance. They are
                truly innovative!
              </p>
              <div className={styles.testifiercompany}>
                <p>FutureTech Robotics</p>
                <span>AI and Robotics Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
