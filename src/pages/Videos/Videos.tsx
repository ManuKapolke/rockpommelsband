import React from "react";
import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import styles from "./Videos.module.less";
import { zoomInVariants } from "../Home/Home";
import LiveImg from "../../assets/img/gallery/2025-10-03_Hagen/Rudi_Brand/FB_IMG_1761165165902.jpg";
import { getOptimizedImageUrl, getSrcSet } from "../Gallery/galleryData";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { YouTubeEmbed } from "../../components/YouTubeEmbed/YouTubeEmbed";
import { useTranslation } from "../../i18n/useTranslation";

export const Videos = () => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className={styles.contentWrapper}>
      <Card style={{ width: "100%" }}>
        <div className={styles.liveImg}>
          <motion.img
            src={getOptimizedImageUrl(LiveImg, 1920)}
            srcSet={getSrcSet(LiveImg, 1920)}
            alt={t({ id: "videos.altRbp" })}
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
              videoId="AXyr2Pp64l4"
              params="si=YBIX7hw0WF_uMB13"
              title="RPL Finale Hagen"
            />
            <YouTubeEmbed
              videoId="_ZVNwT4UVAo"
              params="si=Kyv7c0bJ5kB9hRpP"
              title="Sonnentanz Herzberg"
            />
            <YouTubeEmbed
              videoId="rkcoAFaM_rs"
              params="si=vGNWGsQbYPTNLCO3"
              title="Powerplay Paderborn"
            />
            <YouTubeEmbed
              videoId="o8YvqKZz7rs"
              params="si=PVRxqavKcrmY7erH"
              title="Könige der Welt Paderborn"
            />
            <YouTubeEmbed
              videoId="p843F6wLxSw"
              params="si=dro8L83dzNANPgUc"
              title="Before Werkhof"
            />
            <YouTubeEmbed
              videoId="Ajr4r2Wbhwc"
              params="si=mlyRJtQQ5ldo1cb0"
              title="Ernies Reise Werkhof"
            />
            <YouTubeEmbed
              videoId="dK1AuAbJYbY"
              params="si=jmOUWr3t4rIvERVU"
              title="Könige der Welt Werkhof"
            />
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </Card>
    </div>
  );
};
