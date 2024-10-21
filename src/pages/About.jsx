import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.bck}>
      <div className={styles.about}>
        <Header />

        <section className={styles.intro}>
          <div>
            <h1>about Cypher wave technology </h1>
            <p>
              Empowering Businesses Through Revolutionary Tech <br /> The Future
              Begins with Cypher Wave.
            </p>
            <button> Get Started</button>
          </div>

          <div>
            <img src="./images/about.png" />
          </div>
        </section>

        <div className={styles.defineCypherwave}>
          <p>
            We are the leading technological company in Africa seeking to lead
            Africa into the next phase of technology. At Cypher Wave Technology,
            we specialize in app and website development, drone sales and
            repairs, and programming robots and AI devices. Our advanced
            solutions empower businesses across various industries, enhancing
            productivity and driving sustainable growth. From creating
            user-friendly applications and modern websites to providing
            high-performance drones and precision robotic programming, we are
            committed to revolutionizing Africa&apos;s tech landscape and
            maintaining a competitive edge on the global stage.
          </p>
        </div>

        <section className={styles.mission}>
          <img src="./images/mission.png" />
          <h2>our mission </h2>
          <p>
            At Cypher Wave Technology, our mission is to revolutionize
            Africa&apos;s tech landscape by providing innovative solutions in
            <br />
            app and website development, drone services, and robotic and AI
            programming. We aim to empower businesses, drive <br /> growth, and
            lead Africa into the next phase of technology.
          </p>
        </section>

        <section className={styles.vision}>
          <img src="./images/vision.png" />
          <h2>our vision</h2>
          <p>
            Our vision at Cypher Wave Technology is to be the leading force in
            technological innovation across Africa. We aspire to <br /> create a
            future where cutting-edge technology empowers businesses, transforms
            industries, and enhances everyday life. <br /> Through our
            commitment to excellence and continuous innovation, we aim to
            position Africa as a global leader in technology.
          </p>
        </section>

        <section className={styles.values}>
          <h1>Our Values</h1>
          <div className={styles.valueBox}>
            <div className={styles.quality}>
              <img src="./images/quality.png" />
              <h2>Quality</h2>
              <p>
                Quality is at the core of everything we do. We prioritize
                delivering high-quality products and services that meet and
                exceed our clients&apos; expectations. From the initial design
                phase to the final implementation, we maintain rigorous quality
                control processes to ensure that our solutions are reliable,
                efficient, and effective. Our dedication to quality helps us
                build lasting relationships with our clients based on trust and
                satisfaction.
              </p>
            </div>

            <div className={styles.innovation}>
              <img src="./images/innovation.png" />
              <h2>Innovation</h2>
              <p>
                At Cypher Wave Technology, we are driven by a passion for
                innovation. We constantly push the boundaries of what is
                possible, developing cutting-edge solutions that drive progress
                and transformation. Our commitment to continuous improvement
                ensures that we remain at the forefront of technological
                advancements, providing our clients with the most advanced and
                effective tools to achieve their goals.
              </p>
            </div>

            <div className={styles.integrity}>
              <img src="./images/integrity.png" />
              <h2>Integrity</h2>
              <p>
                We conduct our business with the highest standards of honesty
                and integrity. We believe that trust is the foundation of any
                successful relationship, and we are committed to building and
                maintaining trust with our clients, partners, and team members.
                Our transparent and ethical approach to business ensures that we
                always act in the best interests of our stakeholders.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.story}>
          <h1>our story </h1>
          <p>
            Cypher Wave Technology was founded with a vision to revolutionize
            the technological landscape of Africa. From our humble beginnings as
            a small startup, we have grown into the continent&apos;s leading
            tech company, driven by a passion for innovation and a commitment to
            excellence. Our journey began with a team of dedicated engineers and
            visionaries who shared a common goal: to harness the power of
            technology to solve real-world problems and drive sustainable
            growth.
          </p>
          <p>
            In the early days, we focused on developing high-quality
            applications and websites that catered to the unique needs of
            African businesses. Our solutions quickly gained recognition for
            their reliability, user-friendliness, and impact on business
            efficiency. As we grew, we expanded our services to include drone
            sales and repairs, addressing the rising demand for advanced aerial
            technology in agriculture, real estate, and other sectors. Our
            drones, known for their durability and cutting-edge features, soon
            became a preferred choice for professionals seeking superior aerial
            performance.
          </p>
          <p>
            Recognizing the transformative potential of robotics and artificial
            intelligence, we ventured into programming robots and AI devices.
            Our innovative solutions in this field have automated complex and
            repetitive tasks across various industries, enhancing precision,
            productivity, and safety. From manufacturing to healthcare, our
            robotic programming services have enabled businesses to achieve new
            levels of efficiency and excellence.
          </p>
          <p>
            Throughout our journey, we have remained steadfast in our mission to
            empower African businesses with state-of-the-art technology. Our
            commitment to quality, integrity, and customer satisfaction has been
            the cornerstone of our success. We believe in building lasting
            relationships with our clients, understanding their needs, and
            providing tailored solutions that drive tangible results.
          </p>
          <p>
            Our growth and achievements would not have been possible without the
            trust and support of our clients, partners, and the communities we
            serve. We are deeply grateful for their continued faith in our
            vision and capabilities. As we look to the future, we are excited to
            lead Africa into the next phase of technological advancement,
            fostering innovation, sustainability, and inclusive growth.
          </p>
          <p>
            Cypher Wave Technology is more than just a tech company; we are a
            catalyst for change, a partner in progress, and a beacon of
            excellence in Africa&apos;s technological journey. Our story is one
            of passion, perseverance, and a relentless pursuit of a brighter,
            more connected future for the continent.s
          </p>
        </section>

        <section>
          <div className={styles.team}>
            <div>
              <h1>the team</h1>
              <p>
                At Cypher Wave Technology, our success stems from a talented
                team of engineers, developers, and support staff. Guided by
                visionary leaders, we create cutting-edge solutions and ensure
                product reliability. Our robotics and AI experts enhance
                precision and efficiency, while our customer support team
                provides exceptional service. Together, we lead Africa into the
                next phase of technological advancement.s
              </p>
            </div>
            <div>
              <img alt="abraham fred" />
              <img alt="ovie nathaniel" />
            </div>
          </div>
          <button>Find More Team</button>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default About;
