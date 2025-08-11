import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";

export const Concerts = () => {
  return (
    <Card>
      <Typewriter text="Termine" />
      <table className={styles.concertTable}>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Location</th>
            <th>Stadt</th>
            <th>Event</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {concerts.map((concert) => (
            <tr>
              <td>{concert.date}</td>
              <td>{concert.location}</td>
              <td>{concert.city}</td>
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
