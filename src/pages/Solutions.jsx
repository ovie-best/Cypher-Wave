import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import Header from "../components/Header";
import styles from "./Solutions.module.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function Solutions() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //     partialVisibilityGutter: 40,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //     partialVisibilityGutter: 40,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //     partialVisibilityGutter: 40,
  //   },
  // };

  return (
    <>
      <Header />
      <div className={styles.carouselBox}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className={styles.contentBlock}>
            <div className={styles.block}>
              <img
                src="./images/website-and-app-development.png"
                alt="Website and App Development"
              />
              <div className={styles.blockInfo}>
                <h2 style={{fontSize: "1.4em"}}>Building Of Websites And App For Business</h2>
                <p style={{fontSize: "0.88em"}}>
                  Cypher Wave Technology addresses challenges businesses faced in
                  building and maintaining websites/apps. We create designs that
                  make user experience, simply memorable.
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
                <p style={{fontSize: "0.88em"}}>
                  Cypher Wave Technology provides comprehensive solutions to
                  the diverse challenges faced in robot programming in various 
                  industries. One problem is the inefficiency in manufacturing 
                  processes, where repetitive tasks such as assembly and welding 
                  often cause inconsistencies and delays.
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
                <p style={{fontSize: "0.88em"}}>
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
                <p style={{fontSize: "0.88em"}}>
                  Cypher Wave Technology addresses various challenges across
                  different sectors with innovative and efficient solutions. For
                  businesses dealing with inefficient processes, our AI-driven
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
                <p style={{fontSize: "0.9em"}}>
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
