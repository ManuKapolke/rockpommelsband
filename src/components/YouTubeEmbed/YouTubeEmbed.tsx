import { useEffect, useId, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./YouTubeEmbed.module.less";
import {
  getYouTubeConsent,
  onYouTubeConsentChange,
  setYouTubeConsent,
} from "../../utils/youtubeConsent";
import { Toggle } from "../Toggle/Toggle";
import { useTranslation } from "../../i18n/useTranslation";

type YouTubeEmbedProps = {
  videoId: string;
  params?: string;
  title?: string;
};

export const YouTubeEmbed = ({ videoId, params, title }: YouTubeEmbedProps) => {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(false);
  const [enableAll, setEnableAll] = useState(false);
  const enableAllToggleId = useId();

  // Initial & bei globalen Änderungen reagieren
  useEffect(() => {
    const syncConsent = () => {
      if (getYouTubeConsent()) {
        setEnabled(true);
      }
    };

    syncConsent();
    return onYouTubeConsentChange(syncConsent);
  }, []);

  const handleEnable = () => {
    if (enableAll) {
      setYouTubeConsent(true); // 🔥 triggert alle anderen Videos
    }
    setEnabled(true);
  };

  const handleEnableAllChange = (value: boolean) => {
    setEnableAll(value);
    if (value) {
      // Let the toggle visibly switch to "on" first, then load videos
      setTimeout(() => {
        setYouTubeConsent(true);
        setEnabled(true);
      }, 300);
    }
  };

  if (!enabled) {
    return (
      <div className={styles.videoPlaceholder}>
        <p className={styles.ytConsentText}>
          {t({ id: "youtube.consentText" })}
        </p>
        <Button onClick={handleEnable} aria-label={t({ id: "aria.loadYouTube" })}>
          {t({ id: "youtube.loadVideo" })}
        </Button>

        <label className={styles.ytConsentAll} htmlFor={enableAllToggleId}>
          <Toggle
            id={enableAllToggleId}
            value={enableAll}
            onChange={handleEnableAllChange}
          />
          <span className={styles.ytConsentAllLabel}>
            {t({ id: "youtube.loadAllVideos" })}
          </span>
        </label>
      </div>
    );
  }

  return (
    <iframe
      className={styles.videoIframe}
      src={`https://www.youtube-nocookie.com/embed/${videoId}${params ? `?${params}` : ""}`}
      title={title ?? t({ id: "youtube.defaultTitle" })}
      allow="accelerometer; encrypted-media; picture-in-picture"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};
