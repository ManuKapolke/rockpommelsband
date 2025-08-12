import React from "react";
import styles from "./UpcomingShow.module.less";
import { type Concert } from "../../pages/Concerts/concertData";

export type UpcomingShowProps = {
  concert: Concert;
};

export const UpcomingShow: React.FC<UpcomingShowProps> = ({ concert }) => {
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
            <span className={styles.soldOut}>Ausverkauft</span>
          ) : tickets ? (
            <a href={tickets} target="_blank" rel="noopener noreferrer">
              <strong>→&nbsp;Tickets</strong>
            </a>
          ) : null}
        </span>
      </span>
    </div>
  );
};
