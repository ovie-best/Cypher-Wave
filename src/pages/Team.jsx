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
          resources <br /> and support to do their best work
        </p>
        <Button>Get In Touch</Button>
      </div>

      <div className={styles.teamCarouselContainer}>
        <div className={styles.teamCarouselTrack}>
          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember name="Nosa" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember name="Ovie" role="Front-End Developer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember name="Osas" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember name="Abraham" role="Team Lead" />
          </div><div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember name="Chukwufumnanya" role="Back-End Developer" />
          </div>

          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember name="Nosa" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember name="Ovie" role="Front-End Developer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember name="Osas" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember name="Abraham" role="Team Lead" />
          </div><div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember name="Chukwufumnanya" role="Back-End Developer" />
          </div>
          
          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember name="Nosa" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember name="Ovie" role="Front-End Developer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember name="Osas" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember name="Abraham" role="Team Lead" />
          </div><div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember name="Chukwufumnanya" role="Back-End Developer" />
          </div>

          <div className={styles.carouselCard}>
            <img src="images/nosa.png" />
            <TeamMember name="Nosa" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/ovie.png" />
            <TeamMember name="Ovie" role="Front-End Developer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/osas.png" />
            <TeamMember name="Osas" role="UI/UX Designer" />
          </div>
          <div className={styles.carouselCard}>
            <img src="images/abraham2.jpg" />
            <TeamMember name="Abraham" role="Team Lead" />
          </div><div className={styles.carouselCard}>
            <img src="images/chukwufumnanya1.jpg" />
            <TeamMember name="Chukwufumnanya" role="Back-End Developer" />
          </div>
        </div>
      </div>

      <p className={styles.abtTeam}>
        We&apos;ve been blown away by the support from Untitled. We suggested an
        improvement to <br /> our account manager and they implemented it a few
        days!
      </p>

      <div className={styles.ceo}>
        <img src="images/ab.png" />
        <p>
          <strong>ABRAHAM FRED</strong> <br />
          <span className={styles.textPurple}> Founder & CEO</span>
        </p>
        <div className={styles.socials}>
          <Link to="*">
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
