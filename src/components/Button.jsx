import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string,
};

function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
