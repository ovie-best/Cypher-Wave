import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Asolution.module.css";

Asolution.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  children: PropTypes.any,
};

function Asolution({ title, imgUrl, children }) {
  return (
    <>
      <Header />
      <section className={styles.solution}>
        <h1>{title}</h1>
        <img src={imgUrl} />
        {children}
      </section>
      <Footer />
    </>
  );
}

export default Asolution;
