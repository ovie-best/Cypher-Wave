import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <Header />
      <div className={styles.contactCenter}>
        <div className={styles.contactFlex}>
          <div className={styles.contactUs}>
            <h1>Contact Us</h1>
            <p className={styles.contactInfo}>
              <img src="./images/phone.png" />
              <span>
                <strong>Call Directly At: </strong>
                +2349045957
              </span>
            </p>
            <p className={styles.contactInfo}>
              <img src="./images/whattasp.png" />
              <span>
                <strong> Whattsapp Number: </strong>
                +23485625943
              </span>
            </p>
            <p className={styles.contactInfo}>
              <img src="./images/mail.png" />
              <span>
                <strong>Email: </strong>
                cypherwavetechnology@gmail.com
              </span>
            </p>
            <div className={styles.contactImg}>
              <img src="./images/contact.png" />
            </div>
          </div>
          <div className={styles.form}>
            <form>
              <h1>Get In Touch</h1>
              <p>Feel free to drop a message below</p>
              <div>
                <label htmlFor="name">Full Name</label>
                <br />
                <input type="text" required />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input type="text" required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label> <br />
                <input type="number" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br />
                <textarea type="text" rows="4" cols="50" required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
