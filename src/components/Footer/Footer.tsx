import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/useTranslation";
import styles from "./Footer.module.less";

export const Footer = () => {
  const { t } = useTranslation();

  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.links}>
        <Link to="impressum">{t({ id: "footer.impressum" })}</Link>
        <Link to="datenschutz">{t({ id: "footer.datenschutz" })}</Link>
      </div>
      <p>{t({ id: "footer.copyright" }, { year })}</p>
    </footer>
  );
};
