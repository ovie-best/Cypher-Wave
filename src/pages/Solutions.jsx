import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import Header from "../components/Header";
import styles from "./Solutions.module.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Solutions() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40,
    },
  };

  return (
    <>
      <Header />

      <div className={styles.carousel}>
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={responsive}
          swipeable
          sliderClass=""
          showDots
          renderDotsOutside
          rtl={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition="all 3"
          transitionDuration={500}
          // containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          rewindWithAnimation
          // shouldResetAutoplay={true}
          rewind={true}
        >
          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/website-and-app-development.png"
                alt="Website and App Development"
              />
              <div className={styles.blockInfo}>
                <h2>Building Of Websites And App For Business</h2>
                <p>
                  Cypher Wave Technology addresses critical challenges
                  businesses face in building and maintaining websites and apps.
                  We specialize in creating modern, responsive designs that
                  enhance user experience, ensuring your online presence is
                  visually appealing and accessible across all devices.
                </p>
                <NavLink to="/building-of-websites-and-apps-for-businesses">
                  <button>See More</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/programming-of-robots.png"
                alt="programming of robots"
              />
              <div className={styles.blockInfo}>
                <h2>Programming of Robots</h2>
                <p>
                  Cypher Wave Technology provides comprehensive solutions to
                  address the diverse challenges faced in robot programming
                  across various industries. One significant problem is the
                  inefficiency in manufacturing processes, where repetitive
                  tasks such as assembly and welding often lead to
                  inconsistencies and delays.
                </p>
                <NavLink to="/programming-of-robots">
                  <button>See More</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/programming-of-drones.png"
                alt="Programming of Drones and Aircraft"
              />
              <div className={styles.blockInfo}>
                <h2>Programming of Drones and Aircraft</h2>
                <p>
                  Cypher Wave Technology excels in developing advanced
                  navigation and control systems for drones and aircraft,
                  tackling the complexities of autonomous flight, real-time
                  obstacle detection, and precise GPS tracking.
                </p>
                <NavLink to="/programming-of-drones-and-aircraft">
                  <button>See More</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/programming-of-vehicles.png"
                alt="Programming of Vehicles"
              />
              <div className={styles.blockInfo}>
                <h2>Programming of Vehicles</h2>
                <p>
                  Cypher Wave Technology addresses several challenges related to
                  vehicle programming with innovative solutions. For inefficient
                  fleet management, we enhance operations with advanced
                  telematics integration, providing real-time data on vehicle
                  location, usage, and health.
                </p>
                <NavLink to="/programming-of-vehicles">
                  <button>See More</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/manufacturing-of-AI.png"
                alt="Manufacturing of Ai for Business"
              />
              <div className={styles.blockInfo}>
                <h2>Manufacturing of Ai for Business</h2>
                <p>
                  Cypher Wave Technology addresses various key challenges across
                  different sectors with innovative and efficient solutions. For
                  businesses grappling with inefficient processes, our AI-driven
                  systems offer automation of repetitive tasks, streamlining of
                  operations, and a significant boost in productivity.
                </p>
                <NavLink to="/manufacturing-of-ai">
                  <button>See More</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/manufacturing-of-satellite.png"
                alt="Manufacturing of Satellite"
              />
              <div className={styles.blockInfo}>
                <h2>Manufacturing of Satellite</h2>
                <p>
                  Satellite manufacturing often involves high costs and
                  inefficiencies due to complex components and processes. Cypher
                  Wave Technology addresses this by leveraging advanced
                  manufacturing techniques such as additive manufacturing (3D
                  printing) and automated assembly.
                </p>
                <NavLink to="/manufacturing-of-satellites">
                  <button>See More</button>
                </NavLink>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <Footer />
    </>
  );
}

export default Solutions;
