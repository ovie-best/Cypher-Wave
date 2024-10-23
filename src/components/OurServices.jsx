import styles from "./OurServices.module.css";
function OurServices() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div>
          <span className={styles.s1}>01</span>
          <p>
            Drones and <br /> Drone Repairs
          </p>
        </div>

        <div>
          <span className={styles.s2}>02</span>
          <p>
            Buying and <br />
            Fixing Robots
          </p>
        </div>

        <div>
          <span className={styles.s3}>03</span>
          <p>
            Buying and <br /> Fixing Satellites
          </p>
        </div>

        <div>
          <span className={styles.s4}>04</span>
          <p>
            Internet
            <br /> Services
          </p>
        </div>

        <div>
          <span className={styles.s5}>05</span>
          <p>
            Cyber <br /> Security
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
