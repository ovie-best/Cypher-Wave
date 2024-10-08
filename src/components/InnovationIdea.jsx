import styles from "./InnovationIdea.module.css";
import PropTypes from "prop-types";

InnovationIdea.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

function InnovationIdea({ imgSrc, title, content }) {
  return (
    <div className={styles.idea}>
      <img src={imgSrc} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default InnovationIdea;
