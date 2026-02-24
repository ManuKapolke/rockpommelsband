import { Card } from "../../components/Card/Card";
import styles from "./Home.module.less";
import { DividerRule } from "../../components/DividerRule/DividerRule";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { motion } from "motion/react";
import RPBWriting from "../../assets/rockpommelsband.svg";
import ÜnpV3Img from "../../assets/übernextparty_v3.svg";
import LiveImg from "../../assets/img/gallery/2025-10-03_Hagen/Rudi_Brand/x_00828779.jpg";
import React from "react";
import { concerts } from "../Concerts/concertData";
import { Link } from "react-router-dom";
import { UpcomingShow } from "../../components/UpcomingShow/UpcomingShow";
import { getOptimizedImageUrl, getSrcSet } from "../Gallery/galleryData";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { FormattedMessage } from "react-intl";
import { useTranslation } from "../../i18n/useTranslation";
import { Em } from "../../components/Em/Em";

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { opacity: { duration: 1, ease: "easeOut" } },
  },
};

export const zoomInVariants = {
  small: { opacity: 0, scale: 0.95 },
  normal: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 1, ease: "ease" },
      scale: { duration: 1, ease: "easeInOut" },
    },
  },
};

export const slideInFromBelowVariants = {
  shifted: { opacity: 0, translateY: 5 },
  normal: {
    opacity: 1,
    translateY: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
      translateY: { duration: 1, ease: "easeInOut" },
    },
  },
};

export const slideInFromRightVariants = {
  shifted: { opacity: 0, translateX: 5 },
  normal: {
    opacity: 1,
    translateX: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
      translateX: { duration: 1, ease: "easeInOut" },
    },
  },
};

export const Home = () => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = React.useState(false);

  const nextConcert = concerts[2];
  const übernextConcert = concerts[3];

  React.useEffect(() => {
    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount += 1;
      if (loadedCount === 2) {
        setImgLoaded(true);
      }
    };
    const img1 = new window.Image();
    const img2 = new window.Image();
    img1.src = RPBWriting;
    img2.src = ÜnpV3Img;
    img1.onload = handleLoad;
    img2.onload = handleLoad;
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
      <div>
        <div className={styles.rpbWriting}>
          <motion.img
            src={RPBWriting}
            alt={t({ id: "home.altRpbWriting" })}
            className="filter"
            variants={zoomInVariants}
            initial="small"
            animate="normal"
          />
        </div>

        <div className={styles.bigTextWrapper}>
          <Typewriter text={t({ id: "home.typewriter.premiere" })} />
          <h3>
            <FormattedMessage
              id="home.intro"
              values={{ grobschnitt: <Em>Grobschnitt</Em> }}
            />
          </h3>
        </div>
      </div>

      <Card>
        {/* <div className={styles.ünpWriting}>
          <motion.img
            src={ÜnpV3Img}
            alt="Übernext Party Writing"
            className="filter"
            variants={slideInFromBelowVariants}
            initial="shifted"
            whileInView="normal"
            viewport={{ once: true }}
          />
        </div> */}
        <div className={styles.liveImg}>
          <motion.img
            src={getOptimizedImageUrl(LiveImg, 1920)}
            srcSet={getSrcSet(LiveImg, 1920)}
            alt={t({ id: "home.altLive" })}
            // variants={zoomInVariants}
            // initial="small"
            // whileInView="normal"
            // viewport={{ once: true }}
          />
        </div>

        {/* <div className={styles.bigTextWrapper}>
          <b>Am Freitag, 3. Oktober und am Samstag, 4. Oktober im</b>
          <b>WERKHOF KULTURZENTRUM e.V. in Hagen (Hohenlimburg)</b>

          <div className={styles.ticketText}>
            <h3>Tickets:</h3>
            <span>
              Wer bei diesem besonderen Erlebnis dabei sein will, kann Tickets
              zum Preis von 35,-€ direkt auf der Seite des Werkhofs bestellen:
            </span>
          </div>

          <div className={styles.ticketLinks}>
            <LinkButton
              href="https://werkhof-kulturzentrum.de/rockpommels-band"
              target="_blank"
            >
              <span>Tickets für Freitag, 03.10.2025</span>
            </LinkButton>
            <LinkButton
              href="https://werkhof-kulturzentrum.de/rockpommels-band-2"
              target="_blank"
            >
              <span>Tickets für Samstag, 04.10.2025</span>
            </LinkButton>
          </div>
        </div> 

        <DividerRule /> */}

        <div className={styles.textWrapper}>
          <Typewriter text={t({ id: "home.typewriter.journey" })} />
          <p>
            <FormattedMessage
              id="home.paragraph1"
              values={{
                grobschnitt: <Em>Grobschnitt</Em>,
                grobschnittAcoustic: <Em>Grobschnitt Acoustic Party</Em>,
                rockpommelsBand: <Em>Rockpommel's Band</Em>,
              }}
            />
          </p>

          <p>
            <FormattedMessage
              id="home.paragraph2"
              values={{
                toni: <Em>Toni Moff Mollo</Em>,
                milla: <Em>Milla Kapolke</Em>,
                rolf: <Em>Admiral Top Sahne Möller</Em>,
                manu: <Em>Manu Kapolke</Em>,
                deva: <Em>Deva Tattva</Em>,
                demian: <Em>Demian Hache</Em>,
                kevin: <Em>Kevin Hollmann</Em>,
                nebelreise: <Em>Nebelreise</Em>,
                armin: <Em>Armin Krull</Em>,
              }}
            />
          </p>

          <p>
            <b>
              <FormattedMessage id="home.paragraph3" />
            </b>
          </p>
        </div>

        <DividerRule />

        <div className={styles.textWrapper}>
          <Typewriter text={t({ id: "home.typewriter.shows" })} />
          <div className={styles.upcomingShows}>
            <UpcomingShow concert={nextConcert} />
            <UpcomingShow concert={übernextConcert} />
          </div>
          <span>
            <FormattedMessage
              id="home.upcomingText"
              values={{
                link: (
                  <Link to="termine">{t({ id: "home.upcomingLink" })}</Link>
                ),
              }}
            />
          </span>
        </div>
      </Card>
    </div>
  );
};
