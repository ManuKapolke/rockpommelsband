import { useEffect, useId, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./YouTubeEmbed.module.less";
import {
  getYouTubeConsent,
  onYouTubeConsentChange,
  setYouTubeConsent,
} from "../../utils/youtubeConsent";
import { Toggle } from "../Toggle/Toggle";

type YouTubeEmbedProps = {
  videoId: string;
  params?: string;
  title?: string;
};

export const YouTubeEmbed = ({ videoId, params, title }: YouTubeEmbedProps) => {
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
          Beim Laden des Videos werden Daten an YouTube übertragen.
        </p>
        <Button onClick={handleEnable} aria-label="YouTube-Video laden">
          Video laden
        </Button>

        <label className={styles.ytConsentAll} htmlFor={enableAllToggleId}>
          <Toggle
            id={enableAllToggleId}
            value={enableAll}
            onChange={handleEnableAllChange}
          />
          <span className={styles.ytConsentAllLabel}>
            Alle Videos auf dieser Seite laden
          </span>
        </label>
      </div>
    );
  }

  return (
    <iframe
      className={styles.videoIframe}
      src={`https://www.youtube-nocookie.com/embed/${videoId}${params ? `?${params}` : ""}`}
      title={title ?? "YouTube Video"}
      allow="accelerometer; encrypted-media; picture-in-picture"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};
