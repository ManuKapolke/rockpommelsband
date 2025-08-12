import { Link } from "react-router-dom";
import styles from "./Footer.module.less";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.links}>
        <Link to="impressum">Impressum</Link>
        <Link to="datenschutz">Datenschutz</Link>
      </div>
      <p>© 2025 Rockpommel's Band. All rights reserved.</p>
    </footer>
  );
};
