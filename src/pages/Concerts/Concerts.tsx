import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { UpcomingShow } from "../../components/UpcomingShow/UpcomingShow";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";

export const Concerts = () => {
  return (
    <Card>
      <Typewriter text="2025" />
      <div className={styles.upcomingShows}>
        {concerts
          .filter((concert) => concert.date.endsWith("2025"))
          .map((concert) => (
            <UpcomingShow key={concert.date} concert={concert} />
          ))}
      </div>

      <Typewriter text="2026" />
      <div className={styles.upcomingShows}>
        {concerts
          .filter((concert) => concert.date.endsWith("2026"))
          .map((concert) => (
            <UpcomingShow key={concert.date} concert={concert} />
          ))}
      </div>
    </Card>
  );
};
