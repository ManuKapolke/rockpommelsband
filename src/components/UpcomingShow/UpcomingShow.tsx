import React from "react";
import styles from "./UpcomingShow.module.less";
import { type Concert } from "../../pages/Concerts/concertData";
import { LinkButton } from "../Button/Button";

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
            <LinkButton
              small
              href={tickets}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tickets
            </LinkButton>
          ) : null}
        </span>
      </span>
    </div>
  );
};
