import React from "react";
import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { UpcomingShow } from "../../components/UpcomingShow/UpcomingShow";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";
import { zoomInVariants } from "../Home/Home";
import ÜnpV1Img from "../../assets/übernextparty_v1.svg";

export const Concerts = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new window.Image();
    img.src = ÜnpV1Img;
    img.onload = () => setImgLoaded(true);
  }, []);

  if (!imgLoaded) {
    return null; // Oder ein Spinner/Loader
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imageWrapper}>
        <motion.img
          src={ÜnpV1Img}
          alt="Übernext Party Writing"
          className="filter"
          variants={zoomInVariants}
          initial="small"
          animate="normal"
        />
        {/* <motion.img src={PaperplaneIcon} alt="Paper Plane" className="filter"
                variants={fadeInVariants} initial="hidden" animate="visible" /> */}
      </div>
      <Card style={{ width: "100%" }}>
        <Typewriter text="2026" />
        <div className={styles.upcomingShows}>
          {concerts
            .filter((concert) => concert.date.endsWith("2026"))
            .map((concert) => (
              <UpcomingShow key={concert.date} concert={concert} />
            ))}
        </div>

        <Typewriter text="2025" />
        <div className={styles.upcomingShows}>
          {concerts
            .filter((concert) => concert.date.endsWith("2025"))
            .map((concert) => (
              <UpcomingShow key={concert.date} concert={concert} />
            ))}
        </div>
      </Card>
    </div>
  );
};
