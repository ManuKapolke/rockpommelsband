import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import styles from "./Contact.module.less";
// import { zoomInVariants } from "../Home/Home";
import { fadeInVariants } from "../Home/Home";
// import ÜnpV1Img from '../../assets/übernextparty_v1.svg';
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram-logo-facebook-svgrepo-com.svg";
import MailIcon from "../../assets/icons/email.svg";
import AtIcon from "../../assets/icons/at-symbol.svg";
import React from "react";
import PaperplaneLightIcon from "../../assets/papierflieger-hell.svg";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { useTranslation } from "../../i18n/useTranslation";

export const Contact = () => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new window.Image();
    img.src = PaperplaneLightIcon;
    img.onload = () => setImgLoaded(true);
  }, []);

  if (!imgLoaded) {
    return (
      <div className={styles.contentWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imageWrapper}>
        {/* <motion.img src={ÜnpV1Img} alt="Übernext Party Writing" className="filter"
                variants={zoomInVariants} initial="small" animate="normal" /> */}
        <motion.img
          src={PaperplaneLightIcon}
          alt={t({ id: "contact.altPaperPlane" })}
          //   className="filter"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
      <Card>
        <div className={styles.textWrapper}>
          <Typewriter text={t({ id: "contact.typewriter" })} />
          <p>{t({ id: "contact.intro" })}</p>
          <div className={styles.contactGrid}>
            <span className={styles.contactCategory}>
              <img src={AtIcon} alt="" /> {t({ id: "contact.email" })}
            </span>{" "}
            <a href="mailto:info@rockpommelsband.com">
              info@rockpommelsband.com
            </a>
            <span className={styles.contactCategory}>
              <img src={FacebookIcon} alt="" /> {t({ id: "contact.facebook" })}
            </span>{" "}
            <a href="https://facebook.com/rockpommelsband" target="_blank">
              facebook.com/rockpommelsband
            </a>
            <span className={styles.contactCategory}>
              <img src={InstagramIcon} alt="" /> {t({ id: "contact.instagram" })}
            </span>{" "}
            <a href="https://instagram.com/rockpommelsband" target="_blank">
              instagram.com/rockpommelsband
            </a>
            <span className={styles.contactCategory}>
              <img src={MailIcon} alt="" /> {t({ id: "contact.post" })}
            </span>{" "}
            <p>
              Rockpommel's Band
              <br />
              Hülsberg 37
              <br />
              42349 Wuppertal
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
