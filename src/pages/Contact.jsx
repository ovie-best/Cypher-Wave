/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

function Contact(props) {
  const [name, setName] = useState(props.name || "");
  const [email, setEmail] = useState(props.email || "");
  const [phone, setPhone] = useState(props.phone || "");
  const [msg, setMsg] = useState(props.msg || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    let contactData = {
      name: name,
      email: email,
      phone: phone,
      message: msg,
    };

    try {
      axios
        .post(
          "https://nevertrustanyone.pythonanywhere.com/api/contact/",
          contactData
        )
        .then((result) => {
          setName("");
          setEmail("");
          setPhone("");
          setMsg("");
        });
    } catch (error) {
      console.log("Problem e no dey finish");
    }
  };
  return (
    <div className={styles.contact}>
      <div className="bgw">
        <Header />
      </div>
      <div className={styles.bck}></div>
      <div className={styles.contactCenter}>
        <div className={styles.contactFlex}>
          <div className={styles.contactUs}>
            <h1>Contact Us</h1>
            <p className={styles.contactInfo}>
              <img src="./images/phone.png" />
              <span>+234-80-686-906-36</span>
            </p>

            <p className={styles.contactInfo}>
              <img src="./images/mail.png" />
              <span>cypherwavetechnology@gmail.com</span>
            </p>
            <div className={styles.socials}>
              <Link to="https://x.com/cypherwavetech">
                <img src="images/x-white.png" />
              </Link>
              <Link to="https://www.linkedin.com/company/cypher-wave-technology">
                <img src="images/linkedIn-white.png" />
              </Link>
            </div>
          </div>
          <div className={styles.form}>
            <form>
              <h1>Or Write Us</h1>
              <p>Feel free to drop a message below</p>
              <br />
              <div>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  required
                  placeholder="name"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                  placeholder="email"
                />
              </div>

              <div>
                <textarea
                  type="text"
                  rows="4"
                  cols="50"
                  onChange={(event) => setMsg(event.target.value)}
                  value={msg}
                  required
                  placeholder="send message..."
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                onClick={handleSubmit}
              >
                Send
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
