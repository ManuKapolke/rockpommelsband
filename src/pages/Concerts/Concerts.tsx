import React from "react";
import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { UpcomingShow } from "../../components/UpcomingShow/UpcomingShow";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";
import { zoomInVariants } from "../Home/Home";
// import ÜnpV1Img from "../../assets/übernextparty_v1.svg";
import LiveImg from "../../assets/img/gallery/2025-10-03_Hagen/Rudi_Brand/x_00828810.jpg";
import { getOptimizedImageUrl, getSrcSet } from "../Gallery/galleryData";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Concerts = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new window.Image();
    img.src = LiveImg;
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
      {/* <div className={styles.imageWrapper}>
        <motion.img
          src={ÜnpV1Img}
          alt="Übernext Party Writing"
          className="filter"
          variants={zoomInVariants}
          initial="small"
          animate="normal"
        />
      </div> */}

      <Card style={{ width: "100%" }}>
        <div className={styles.liveImg}>
          <motion.img
            src={getOptimizedImageUrl(LiveImg, 1920)}
            srcSet={getSrcSet(LiveImg, 1920)}
            alt="RBP live on stage"
            variants={zoomInVariants}
            initial="small"
            whileInView="normal"
            viewport={{ once: true }}
          />
        </div>

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
