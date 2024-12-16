import styles from "./OurServices.module.css";
function OurServices() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div>
          <span className={styles.s1}>01</span>
          <p>
            Drones & <br /> Drone Repairs
          </p>
        </div>

        <div>
          <span className={styles.s2}>02</span>
          <p>
            Selling & <br />
            Fixing Robots
          </p>
        </div>

        <div>
          <span className={styles.s3}>03</span>
          <p>
            Selling & <br /> Fixing Satellites
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
            Cyber Security <br /> Services
          </p>
        </div>
        <div>
          <span className={styles.s4}>06</span>
          <p>
            Web & App <br />
            Development
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
