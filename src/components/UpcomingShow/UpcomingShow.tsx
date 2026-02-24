import React from "react";
import styles from "./UpcomingShow.module.less";
import { type Concert } from "../../pages/Concerts/concertData";
import { LinkButton } from "../Button/Button";
import { useTranslation } from "../../i18n/useTranslation";

export type UpcomingShowProps = {
  concert: Concert;
};

export const UpcomingShow: React.FC<UpcomingShowProps> = ({ concert }) => {
  const { t } = useTranslation();
  const { date, city, location, event, tickets, soldOut } = concert;

  return (
    <div className={styles.upcomingShow}>
      <span>{date}</span>
      <span className={styles.details}>
        <span>
          {city} | {location}
          {event && `, ${event}`}
        </span>
        <span className={styles.tickets}>
          {soldOut ? (
            <span className={styles.soldOut}>{t({ id: "upcomingShow.soldOut" })}</span>
          ) : tickets ? (
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
