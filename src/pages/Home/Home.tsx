import { Card } from "../../components/Card/Card";
import styles from "./Home.module.less";
import { DividerRule } from "../../components/DividerRule/DividerRule";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { motion } from "motion/react";
import RPBWriting from "../../assets/rockpommelsband.svg";
import ÜnpV3Img from "../../assets/übernextparty_v3.svg";
import React from "react";
import { concerts } from "../Concerts/concertData";
import { Link } from "react-router-dom";
import { UpcomingShow } from "../../components/UpcomingShow/UpcomingShow";

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
    return null; // Oder ein Spinner/Loader
  }
  return (
    <div className={styles.contentWrapper}>
      <div>
        <div className={styles.rpbWriting}>
          <motion.img
            src={RPBWriting}
            alt="Rockpommel's Band Writing"
            className="filter"
            variants={zoomInVariants}
            initial="small"
            animate="normal"
          />
        </div>

        <div className={styles.bigTextWrapper}>
          <Typewriter text="Die Premiere einer neuen/alten Band!" />
          <h3>
            Sechs ehemalige <span className="emphasized">Grobschnitt</span>
            -Musiker und ihre Freunde zelebrieren die einzigartige Musik der
            Hagener Kultband.
          </h3>
        </div>
      </div>

      <Card>
        <div className={styles.ünpWriting}>
          <motion.img
            src={ÜnpV3Img}
            alt="Übernext Party Writing"
            className="filter"
            variants={slideInFromBelowVariants}
            initial="shifted"
            whileInView="normal"
            viewport={{ once: true }}
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
          <Typewriter text="Die Reise geht weiter" />
          <p>
            Nachdem die Band <span className="emphasized">Grobschnitt</span>{" "}
            2012 in der Essener Gruga-Halle ihr letztes Konzert in voller
            „elektrischer“ Besetzung gegeben hat und sie nun seit einigen Jahren
            als <span className="emphasized">Grobschnitt Acoustic Party</span>{" "}
            mit großem Erfolg durch Deutschland tourt, haben sich weitere sechs
            ehemalige Bandmitglieder entschlossen unter neuem Namen die Musik
            von Grobschnitt auch wieder in großer Besetzung zu präsentieren.
            <br />
            Da die Rechte am Namen bei der Acoustic Band liegen, sie aber
            deutlich machen wollten, was ihr musikalischer Background ist,
            werden sie als <span className="emphasized">
              Rockpommel's Band
            </span>{" "}
            Konzerte geben, um ihr Publikum mit der bekannten Kultmusik in lange
            vermisste Sphären zu entführen.{" "}
          </p>

          <p>
            Dass sie keine Cover- oder Tribute-Band sind, wird schon klar, wenn
            man sieht, wer alles dabei ist. Neben dem „Ur-Grobschnitter“{" "}
            <span className="emphasized">Toni Moff Mollo</span> am Gesang, dem
            langjährigen Bassisten{" "}
            <span className="emphasized">Milla Kapolke</span> und am Schlagzeug{" "}
            <span className="emphasized">Admiral Top Sahne Möller</span> sind es
            weiterhin aus der letzten Grobschnitt-Besetzung Gitarrist{" "}
            <span className="emphasized">Manu Kapolke</span>, Keyboarder{" "}
            <span className="emphasized">Deva Tattva</span> und Drummer{" "}
            <span className="emphasized">Demian Hache</span>. Neu dabei sind an
            der Gitarre <span className="emphasized">Kevin Hollmann</span>, der
            viele Jahre bei der Grobschnitt Tribute-Band{" "}
            <span className="emphasized">Nebelreise</span> geglänzt hat, sowie
            mit Sänger <span className="emphasized">Armin Krull</span> eine
            weitere prägende Figur der Hagener Musikszene.
          </p>

          <p>
            <b>
              Eine große Besetzung, die sich als Ziel gesetzt hat, die
              einzigartige Musik der deutschen Kultband wieder live auf die
              Bühne zu bringen...
              {/* Und deshalb gibt es als Premiere – wie
              seinerzeit beim Startschuss der{" "}
              <span className="emphasized">Next Party</span> im Mai 2007 – zwei
              Konzerte im legendären Werkhof... */}
            </b>
          </p>
        </div>

        <DividerRule />

        <div className={styles.textWrapper}>
          <Typewriter text="Die nächsten Shows" />
          <div className={styles.upcomingShows}>
            <UpcomingShow concert={nextConcert} />
            <UpcomingShow concert={übernextConcert} />
          </div>
          <span>
            Alle weiteren Termine findet ihr <Link to="termine">hier</Link>.
          </span>
        </div>
      </Card>
    </div>
  );
};
