import React from "react";
import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import styles from "./Videos.module.less";
import { zoomInVariants } from "../Home/Home";
import LiveImg from "../../assets/img/gallery/2025-10-03_Hagen/Rudi_Brand/FB_IMG_1761165165902.jpg";
import { getOptimizedImageUrl, getSrcSet } from "../Gallery/galleryData";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { YouTubeEmbed } from "../../components/YouTubeEmbed/YouTubeEmbed";

export const Videos = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className={styles.contentWrapper}>
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
            onLoad={() => setImgLoaded(true)}
          />
        </div>

        {imgLoaded ? (
          <div className={styles.videoWrapper}>
            <YouTubeEmbed
              videoId="p843F6wLxSw"
              params="si=dro8L83dzNANPgUc"
              title="Before"
            />
            <YouTubeEmbed
              videoId="Ajr4r2Wbhwc"
              params="si=mlyRJtQQ5ldo1cb0"
              title="Ernies Reise"
            />
            <YouTubeEmbed
              videoId="dK1AuAbJYbY"
              params="si=jmOUWr3t4rIvERVU"
              title="Könige der Welt"
            />
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </Card>
    </div>
  );
};
