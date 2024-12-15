import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import Innovation from "../components/Innovation";
import Main from "../components/Main";
import OurServices from "../components/OurServices";
import Testimony from "../components/Testimony";
import styles from "./Team.module.css";

function Home() {
  return (
    <>
      <div className="bg">
        <Header />
      </div>
      <Main />
      <Innovation />

      <div className={styles.teamCarouselContainer}>
        <div className={`${styles.teamCarouselTrack} ${styles.forInnovation}`}>
          <div className={styles.carouselCard}>
            <img src="./images/expert-team.png" />
            <h2>Expert Team</h2>
            <p>
              A highly skilled team of developers, engineers, and tech experts
              dedicated to delivering top-notch solutions.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/customer-support.png" />
            <h2>Customer-Centric Approach</h2>
            <p>
              Prioritizing client needs and providing personalized solutions to
              meet specific business requirements.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/compre-solu.png" />
            <h2>Comprehensive Solutions</h2>
            <p>
              Offering a wide range of services from development to repair and
              deployment, ensuring all technological needs are met under one
              roof.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="../images/track-record.png" />
            <h2>Proven Track Record</h2>
            <p>
              A history of successful projects and satisfied clients across
              various industries.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/cutting-edge-tech.png" />
            <h2>Cutting-Edge Technology</h2>
            <p>
              Expertise in the latest advancements in app development, website
              creation, drone technology, and AI programming.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/innovation-driven.png" />
            <h2>Innovation-Driven</h2>
            <p>
              Constantly pushing the boundaries of what&apos;s possible,
              focusing on innovative and forward-thinking solutions.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/expert-team.png" />
            <h2>Expert Team</h2>
            <p>
              A highly skilled team of developers, engineers, and tech experts
              dedicated to delivering top-notch solutions.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/customer-support.png" />
            <h2>Customer-Centric Approach</h2>
            <p>
              Prioritizing client needs and providing personalized solutions to
              meet specific business requirements.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/compre-solu.png" />
            <h2>Comprehensive Solutions</h2>
            <p>
              Offering a wide range of services from development to repair and
              deployment, ensuring all technological needs are met under one
              roof.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="../images/track-record.png" />
            <h2>Proven Track Record</h2>
            <p>
              A history of successful projects and satisfied clients across
              various industries.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/cutting-edge-tech.png" />
            <h2>Cutting-Edge Technology</h2>
            <p>
              Expertise in the latest advancements in app development, website
              creation, drone technology, and AI programming.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/innovation-driven.png" />
            <h2>Innovation-Driven</h2>
            <p>
              Constantly pushing the boundaries of what&apos;s possible,
              focusing on innovative and forward-thinking solutions.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/expert-team.png" />
            <h2>Expert Team</h2>
            <p>
              A highly skilled team of developers, engineers, and tech experts
              dedicated to delivering top-notch solutions.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/customer-support.png" />
            <h2>Customer-Centric Approach</h2>
            <p>
              Prioritizing client needs and providing personalized solutions to
              meet specific business requirements.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/compre-solu.png" />
            <h2>Comprehensive Solutions</h2>
            <p>
              Offering a wide range of services from development to repair and
              deployment, ensuring all technological needs are met under one
              roof.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="../images/track-record.png" />
            <h2>Proven Track Record</h2>
            <p>
              A history of successful projects and satisfied clients across
              various industries.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/cutting-edge-tech.png" />
            <h2>Cutting-Edge Technology</h2>
            <p>
              Expertise in the latest advancements in app development, website
              creation, drone technology, and AI programming.
            </p>
          </div>

          <div className={styles.carouselCard}>
            <img src="./images/innovation-driven.png" />
            <h2>Innovation-Driven</h2>
            <p>
              Constantly pushing the boundaries of what&apos;s possible,
              focusing on innovative and forward-thinking solutions.
            </p>
          </div>
        </div>
      </div>

      <Testimony />
      <OurServices />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Home;
