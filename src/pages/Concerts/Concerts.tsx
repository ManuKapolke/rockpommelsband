import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";

export const Concerts = () => {
  return (
    <Card>
      <Typewriter text="2025" />
      <table className={styles.concertTable}>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Stadt</th>
            <th>Location</th>
            <th>Event</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {concerts
            .filter((concert) => concert.date.endsWith("2025"))
            .map((concert) => (
              <tr key={concert.date}>
                <td>{concert.date}</td>
                <td>{concert.city}</td>
                <td>{concert.location}</td>
                <td>{concert.event}</td>
                <td>
                  {concert.soldOut ? (
                    <span className={styles.soldOut}>Ausverkauft</span>
                  ) : (
                    <a
                      href={concert.tickets}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tickets
                    </a>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Typewriter text="2026" />
      <table className={styles.concertTable}>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Stadt</th>
            <th>Location</th>
            <th>Event</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {concerts
            .filter((concert) => concert.date.endsWith("2026"))
            .map((concert) => (
              <tr key={concert.date}>
                <td>{concert.date}</td>
                <td>{concert.city}</td>
                <td>{concert.location}</td>
                <td>{concert.event}</td>
                <td>
                  {concert.soldOut ? (
                    <span className={styles.soldOut}>Ausverkauft</span>
                  ) : (
                    <a
                      href={concert.tickets}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tickets
                    </a>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};
