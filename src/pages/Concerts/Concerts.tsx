import { Card } from "../../components/Card/Card";
import { concerts } from "./concertData";
import styles from "./Concerts.module.less";

export const Concerts = () => {
    return (
        <Card>
            <h2 id="konzerthistorie">Konzerte</h2>
            <table className={styles.concertTable}>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Stadt</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {concerts.map((concert) => (
                        <tr>
                            <td>{concert.date}</td>
                            <td>{concert.city}</td>
                            <td>{concert.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};