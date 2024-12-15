import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Services.module.css";
import GetInTouch from "../components/GetInTouch";

function Services() {
  return (
    <div className={styles.servicePage}>
      <div className="bgw">
        <Header />
      </div>
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
            <img src="./images/service1.png" alt="apps-website" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>building of websites and app for businesses </h2>
              <p>
                Cypher Wave Technology addresses critical challenges businesses
                face in building and maintaining websites and apps. We
                specialize in creating modern, responsive designs that enhance
                user experience, ensuring your online presence is visually
                appealing and accessible across all devices.
              </p>
              <Link to="/building-of-websites-and-apps-for-businesses">
                <button className={styles.btn}>
                  Read More <img src="images/Arrow-explore.png" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.content}>
            <img src="./images/service2.png" alt="robot" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Programming of Robots</h2>
              <p>
                Cypher Wave Technology provides comprehensive solutions to
                address the diverse challenges faced in robot programming across
                various industries. One significant problem is the inefficiency
                in manufacturing processes, where repetitive tasks such as
                assembly and welding often lead to inconsistencies and delays.
              </p>
              <Link to="/programming-of-robots">
                <button className={styles.btn}>
                  Read More <img src="images/Arrow-explore.png" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={styles.service}>
          <div className={styles.content}>
            <img
              src="./images/prog-vehicle.png"
              alt="satellite"
              className={styles.vehi}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Programming of Vehicles</h2>
              <p>
                Cypher Wave Technology addresses several challenges related to
                vehicle programming with innovative solutions. For inefficient
                fleet management, we enhance operations with advanced telematics
                integration, providing real-time data on vehicle location,
                usage, and health.
              </p>
              <Link to="/programming-of-vehicles">
                <button className={styles.btn}>
                  Read More <img src="images/Arrow-explore.png" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.content}>
            <img src="./images/service4.png" alt="drone" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Manufacturing AI for businesses</h2>
              <p>
                Cypher Wave Technology addresses various key challenges across
                different sectors with innovative and efficient solutions. For
                businesses grappling with inefficient processes, our AI-driven
                systems offer automation of repetitive tasks, streamlining of
                operations, and a significant boost in productivity.
              </p>
              <Link to="/manufacturing-of-ai">
                <button className={styles.btn}>
                  Read More <img src="images/Arrow-explore.png" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={styles.service}>
          <div className={styles.content}>
            <img src="./images/service5.png" alt="satellite" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Manufacturing of satellites</h2>
              <p>
                Satellite manufacturing often involves high costs and
                inefficiencies due to complex components and processes. Cypher
                Wave Technology addresses this by leveraging advanced
                manufacturing techniques such as additive manufacturing (3D
                printing) and automated assembly.
              </p>
              <Link to="/manufacturing-of-satellites">
                <button className={styles.btn}>
                  Read More <img src="images/Arrow-explore.png" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceBox}>
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.content}>
            <img src="./images/service3.png" alt="drone" />
          </div>
          <div className={styles.content}>
            <div className={styles.serviceDescription}>
              <h2>Programming of drones and aircrafts</h2>
              <p>
                Cypher Wave Technology excels in developing advanced navigation
                and control systems for drones and aircraft, tackling the
                complexities of autonomous flight, real-time obstacle detection,
                and precise GPS tracking. These sophisticated systems ensure
                safe and efficient operations in various environments,
                minimizing the risk of accidents and enhancing overall
                performance
              </p>
              <Link to="/programming-of-drones-and-aircraft">
                <button className={styles.btn}>
                  Read More <img src="images/Arrow-explore.png" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
export default Services;
