import { Link } from 'react-router-dom';
import styles from './Footer.module.less';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.links}>
        <Link to="imprint">
          Impressum
        </Link>
        <Link to="privacy">
          Datenschutz
        </Link>
      </div>
      <p>© 2025 Rockpommel's Band. All rights reserved.</p>
    </footer>
  );
};
