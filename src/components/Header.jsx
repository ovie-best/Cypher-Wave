import styles from "./Header.module.css";

import Logo from "./Logo";
import Button from "./Button";
import PageNav from "./PageNav";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <PageNav />
      <Button>Contact Us</Button>
    </header>
  );
}

export default Header;
