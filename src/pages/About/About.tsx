import { Card } from "../../components/Card/Card";
import styles from "./About.module.less";

export const About = () => {
    return <Card>
        <div className={styles.imageWrapper}>
            <img src="src/assets/übernextparty_v3.svg" alt="Übernext Party Writing" className="filter" />
        </div>

        <div className={styles.textWrapper}>
            <h2>Keine Tribute-Band. Kein Cover-Projekt. Sondern echte Grobschnitt-DNA</h2>

            <p>Mit dabei sind:<br />
                🎤 <b>Toni Moff Mollo</b>, Urgrobschnitter am Mikrofon<br />
                🎸 <b>Milla Kapolke</b>, langjähriger Bassist<br />
                🥁 <b>Admiral Top Sahne Möller</b>, Drummer der Extraklasse<br />
                🎶 <b>Manu Kapolke</b> (Gitarre), <b>Deva Tattva</b> (Keyboards) und <b>Demian Hache</b> (Drums) – alle aus der letzten Grobschnitt-Besetzung<br /><br />
                Und neu dabei:<br />
                🎸 <b>Kevin Hollmann</b>, Gitarrist mit Tribute-Erfahrung aus Nebelreise<br />
                🎤 <b>Armin Krull</b>, Sänger mit Herz und Stimme</p>

            <p>Gemeinsam verfolgen sie ein klares Ziel:<br />
                <b>Die einzigartige Musik von Grobschnitt in ihrer ganzen Vielfalt, Energie und Tiefe zurück auf die Bühne zu bringen – für langjährige Fans und neue Entdecker.</b>
            </p>
        </div>
    </Card>;
};