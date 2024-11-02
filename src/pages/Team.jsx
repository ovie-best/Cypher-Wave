import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Team.module.css";

import PropTypes from "prop-types";

TeamMember.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  xHandle: PropTypes.string,
  linkedInHandle: PropTypes.string,
};

function Team() {
  return (
    <div className={styles.team}>
      <Header />
      <div className={styles.teamIntro}>
        <h1>
          <span className={styles.textPurple}>Meet </span>the
          <span className={styles.textPurple}> beautiful</span> team
        </h1>
        <p>
          Our philosophy is simple, hire great people and give them the
          resources <br className={styles.br} /> and support to do their best
          work
        </p>
        <Link to="/contact">
          <Button>Get In Touch</Button>
        </Link>
      </div>

      <div className={styles.teamCarouselContainer}>
        <div className={styles.teamCarouselTrack}>
          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember
              name="Nosa"
              role="UI/UX Designer"
              linkedInHandle="https://www.linkedin.com/in/osayanwen-nosa-275bab263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              xHandle="https://x.com/Nosaosayan?t=_voj0vinw5kZdrrsZyjNDQ&s=09"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" alt="ovie" />
            <TeamMember
              name="Ovie"
              role="Front-End Developer"
              xHandle="https://x.com/oviebest_2"
              linkedInHandle="www.linkedin.com/in/ovie-nathaniel"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" alt="osas" />
            <TeamMember
              name="Osas"
              role="UI/UX Designer"
              xHandle="https://x.com/osemwegie_osas?t=kVNNHYx6fEi_JeP_Z7-_mg&s=08"
              linkedInHandle="https://www.linkedin.com/in/osas-osemwegie-1a842a176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember
              name="Abraham"
              role="Team Lead"
              xHandle="https://x.com/AbrahamFred12"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember
              name="Chukwufumnanya"
              role="Back-End Developer"
              linkedInHandle="https://www.linkedin.com/in/chukwufumnanya-molokwu?trk=contact-info"
            />
          </div>

          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember
              name="Nosa"
              role="UI/UX Designer"
              linkedInHandle="https://www.linkedin.com/in/osayanwen-nosa-275bab263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              xHandle="https://x.com/Nosaosayan?t=_voj0vinw5kZdrrsZyjNDQ&s=09"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember
              name="Ovie"
              role="Front-End Developer"
              xHandle="https://x.com/oviebest_2"
              linkedInHandle="www.linkedin.com/in/ovie-nathaniel"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember
              name="Osas"
              role="UI/UX Designer"
              xHandle="https://x.com/osemwegie_osas?t=kVNNHYx6fEi_JeP_Z7-_mg&s=08"
              linkedInHandle="https://www.linkedin.com/in/osas-osemwegie-1a842a176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember
              name="Abraham"
              role="Team Lead"
              xHandle="https://x.com/AbrahamFred12"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember
              name="Chukwufumnanya"
              role="Back-End Developer"
              linkedInHandle="https://www.linkedin.com/in/chukwufumnanya-molokwu?trk=contact-info"
            />
          </div>

          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember
              name="Nosa"
              role="UI/UX Designer"
              linkedInHandle="https://www.linkedin.com/in/osayanwen-nosa-275bab263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              xHandle="https://x.com/Nosaosayan?t=_voj0vinw5kZdrrsZyjNDQ&s=09"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember
              name="Ovie"
              role="Front-End Developer"
              xHandle="https://x.com/oviebest_2"
              linkedInHandle="www.linkedin.com/in/ovie-nathaniel"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember
              name="Osas"
              role="UI/UX Designer"
              xHandle="https://x.com/osemwegie_osas?t=kVNNHYx6fEi_JeP_Z7-_mg&s=08"
              linkedInHandle="https://www.linkedin.com/in/osas-osemwegie-1a842a176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember
              name="Abraham"
              role="Team Lead"
              xHandle="https://x.com/AbrahamFred12"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember
              name="Chukwufumnanya"
              role="Back-End Developer"
              linkedInHandle="https://www.linkedin.com/in/chukwufumnanya-molokwu?trk=contact-info"
            />
          </div>

          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember
              name="Nosa"
              role="UI/UX Designer"
              xHandle="https://x.com/Nosaosayan?t=_voj0vinw5kZdrrsZyjNDQ&s=09"
              linkedInHandle="https://www.linkedin.com/in/osayanwen-nosa-275bab263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember
              name="Ovie"
              role="Front-End Developer"
              xHandle="https://x.com/oviebest_2"
              linkedInHandle="www.linkedin.com/in/ovie-nathaniel"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember
              name="Osas"
              role="UI/UX Designer"
              xHandle="https://x.com/osemwegie_osas?t=kVNNHYx6fEi_JeP_Z7-_mg&s=08"
              linkedInHandle="https://www.linkedin.com/in/osas-osemwegie-1a842a176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember
              name="Abraham"
              role="Team Lead"
              xHandle="https://x.com/AbrahamFred12"
            />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember
              name="Chukwufumnanya"
              role="Back-End Developer"
              linkedInHandle="https://www.linkedin.com/in/chukwufumnanya-molokwu?trk=contact-info"
            />
          </div>
        </div>
      </div>

      <p className={styles.abtTeam}>
        We&apos;ve been blown away by the support from Untitled. We suggested an
        improvement to <br className={styles.br} /> our account manager and they
        implemented it a few days!
      </p>

      <div className={styles.ceo}>
        <img src="images/teamCeo.png" alt="CEO and Founder" />
        <p>
          <strong>ABRAHAM FRED</strong> <br />
          <span className={styles.textPurple}> Founder & CEO</span>
        </p>
        <div className={styles.socials}>
          <Link to="https://x.com/AbrahamFred12">
            <img src="images/x.png" alt="x" />
          </Link>
          <Link to="*">
            <img src="images/linkedIn.png" alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;

function TeamMember({ name, role, xHandle, linkedInHandle }) {
  return (
    <div className={styles.teamMember}>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{role}</p>
      <div className={styles.socials}>
        <Link to={xHandle}>
          <img src="images/x-white.png" alt="x" />
        </Link>
        <Link to={linkedInHandle}>
          <img src="images/linkedIn-white.png" alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
}
