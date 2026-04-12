import React from "react";
import styles from "./UpcomingShow.module.less";
import { type Concert } from "../../pages/Concerts/concertData";
import { isConcertInPast } from "../../pages/Concerts/concertDates";
import { LinkButton } from "../Button/Button";
import { useTranslation } from "../../i18n/useTranslation";

export type UpcomingShowProps = {
  concert: Concert;
};

export const UpcomingShow: React.FC<UpcomingShowProps> = ({ concert }) => {
  const { t } = useTranslation();
  const { date, city, location, event, tickets, soldOut, cancelled } = concert;

  return (
    <div
      className={`${styles.upcomingShow} ${cancelled ? styles.cancelledShow : ""}`}
    >
      <span>{date}</span>
      <span className={styles.details}>
        <span>
          {city} | {location}
          {event && `, ${event}`}
        </span>
        <span className={styles.tickets}>
          {soldOut ? (
            <span className={styles.soldOut}>
              {t({ id: "upcomingShow.soldOut" })}
            </span>
          ) : cancelled ? (
            <span className={styles.cancelled}>
              {t({ id: "upcomingShow.cancelled" })}
            </span>
          ) : tickets && !isConcertInPast(concert) ? (
            <LinkButton
              small
              href={tickets}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t({ id: "upcomingShow.tickets" })}
            </LinkButton>
          ) : null}
        </span>
      </span>
    </div>
  );
};
