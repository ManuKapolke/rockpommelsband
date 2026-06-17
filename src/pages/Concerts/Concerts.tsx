import React from "react";
import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { UpcomingShow } from "../../components/UpcomingShow/UpcomingShow";
import { concerts } from "./concertData";
import {
  getPastConcertsByYear,
  getUpcomingConcertsByYear,
  type ConcertsByYear,
} from "./concertDates";
import styles from "./Concerts.module.less";
import { zoomInVariants } from "../Home/Home";
import { useTranslation } from "../../i18n/useTranslation";
// import ÜnpV1Img from "../../assets/übernextparty_v1.svg";
import LiveImg from "../../assets/img/gallery/2025-10-03_Hagen/Rudi_Brand/x_00828810.jpg";
import { getOptimizedImageUrl, getSrcSet } from "../Gallery/galleryData";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

const renderYearSections = (sections: ConcertsByYear) =>
  sections.map(({ year, concerts: yearConcerts }) => (
    <React.Fragment key={year}>
      <h3 className={styles.yearHeading}>{year}</h3>
      <div className={styles.upcomingShows}>
        {yearConcerts.map((concert) => (
          <UpcomingShow
            key={`${concert.date}-${concert.city}`}
            concert={concert}
          />
        ))}
      </div>
    </React.Fragment>
  ));

export const Concerts = () => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const upcomingByYear = getUpcomingConcertsByYear(concerts);
  const pastByYear = getPastConcertsByYear(concerts);

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
            alt={t({ id: "concerts.altLive" })}
            variants={zoomInVariants}
            initial="small"
            whileInView="normal"
            viewport={{ once: true }}
            onLoad={() => setImgLoaded(true)}
          />
        </div>

        {imgLoaded ? (
          <>
            {upcomingByYear.length > 0 && renderYearSections(upcomingByYear)}

            {pastByYear.length > 0 && (
              <section className={`${styles.section} ${styles.historySection}`}>
                <Typewriter text={t({ id: "concerts.history" })} />
                {renderYearSections(pastByYear)}
              </section>
            )}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Card>
    </div>
  );
};
