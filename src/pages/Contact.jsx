/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Contact.module.css";

function Contact(props) {
  const[name, setName] = useState(props.name || '');
  const[email, setEmail] = useState(props.email || '');
  const[phone, setPhone] = useState(props.phone || '');
  const[msg, setMsg] = useState(props.msg || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    let contactData = {
      name: name, 
      email: email, 
      phone: phone,
      message: msg,
    };

    try {
      axios.post('http://127.0.0.1:8000/api/contact/', contactData)
      .then(
        (result) => {
          console.log(result);
        }
      )
    } catch (error) {
      console.log(error);
    }

  };
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
                <input type="text" onChange={(event) => (setName(event.target.value))} value={name} required />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input type="text" onChange={(event) => (setEmail(event.target.value))} value={email} required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label> <br />
                <input type="number" onChange={(event) => (setPhone(event.target.value))} value={phone} required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br />
                <textarea type="text" rows="4" cols="50" onChange={(event) => (setMsg(event.target.value))} value={msg} required />
              </div>
              <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>
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