import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.servicePage}>
      <Header />
      <div className={styles.mt5}>
        <Service />
      </div>
      <Footer />
    </div>
  );
}

function Service() {
  return (
    <>
      <section className={`${styles.serviceBox}`}>
        <div className={styles.service}>
          <div className={styles.content}>
            <img src="./images/drone.png" alt="drone" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Drones and Drone Repairs</h2>
              <p>
                Cypher Wave Technology offers advanced drones in various sizes
                and colors, featuring high-resolution cameras
              </p>
            </div>

            <div>
              <h2>Product Description</h2>
              <p>
                Cypher Wave Technology offers cutting-edge drones with
                high-resolution cameras, long battery life, and intuitive
                controls, perfect for various industries. Our expert repair
                services include diagnostics, component replacement, and
                software updates, ensuring your drone stays in top condition
                with minimal downtime
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.content}>
            <img src="./images/robot.png" alt="robot" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Buying and Fixing Robots</h2>
              <p>
                At Cypher Wave Technology, we offer a comprehensive range of
                cutting-edge robots designed to meet the diverse needs of modern
                businesses.
              </p>
            </div>

            <div>
              <h2>Product Description</h2>
              <p>
                Cypher Wave Technology provides high-quality robots and expert
                repair services to keep your business running smoothly. Whether
                you&apos;re buying or fixing, we ensure top performance and
                reliability every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={styles.service}>
          <div className={styles.content}>
            <img src="./images/sattelite.png" alt="satellite" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Buying and Fixing Satellite</h2>
              <p>
                At Cypher Wave Technology, we offer comprehensive satellite
                solutions tailored to meet your communication and data
                transmission needs.
              </p>
            </div>

            <div>
              <h2>Product Description</h2>
              <p>
                Cypher Wave Technology offers top-tier satellite solutions,
                including advanced satellites for purchase and expert repair
                services. Our satellites deliver reliable performance across
                various applications, while our skilled technicians ensure
                quick, effective repairs to minimize downtime. Trust us for
                quality, reliability, and customized satellite support tailored
                to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.content}>
            <img src="./images/internet.png" alt="drone" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Internet Services</h2>
              <p>
                Cypher Wave Technology&apos;s Internet Services. We provide
                high-speed, reliable, and secure internet solutions tailored to
                meet the unique needs of businesses and individuals alike.
              </p>
            </div>

            <div>
              <h2>Product Description</h2>
              <p>
                Cypher Wave Technology offers high-speed, reliable, and secure
                internet services designed for businesses and individuals. With
                ultra-fast connectivity, advanced security, and 24/7 support,
                our internet solutions keep you connected and protected,
                ensuring seamless online experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.contact}>
        <Link to="/contact">
          <button className={styles.getIntouch}>Get In Touch</button>
        </Link>
      </div>
    </>
  );
}
export default Services;
