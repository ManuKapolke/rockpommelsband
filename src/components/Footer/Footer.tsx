import styles from './Footer.module.less';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.links}>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Impressum
        </a>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Datenschutz
        </a>
      </div>
      <p>© 2025 Rockpommel's Band. All rights reserved.</p>
    </footer>
  );
};
