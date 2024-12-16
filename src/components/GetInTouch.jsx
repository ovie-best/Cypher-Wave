import styles from "./GetInTouch.module.css";

function GetInTouch() {
  return (
    <section className={styles.touch}>
      <div className={styles.container}>
        <h1>Get In Touch</h1>
        <h2>Get in Touch and Let&apos;s Innovate Together!</h2>
        <div className={styles.contactBox}>
          <div className={styles.contact}>
            <div>
              <img src="images/touchPone.png" />
            </div>
            <div>
              <p>Phone</p>
              <strong>+234</strong>-81-259-261-61 <br />
            </div>
          </div>

          <div className={styles.contact}>
            <div>
              <img src="images/touchMail.png" />
            </div>
            <div>
              <p>Email</p>
              <p>Cypherwavetechnology@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
