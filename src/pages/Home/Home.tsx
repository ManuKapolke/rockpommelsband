import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import styles from "./Home.module.less";
import { DividerRule } from "../../components/DividerRule/DividerRule";

export const Home = () => {
    return (
        <div className={styles.contentWrapper}>
            {/* <div className={styles.rpbWriting}>
                <img src="src/assets/rockpommelsband_neu.svg" alt="Rockpommel's Band Writing" />
            </div> */}

            <div>
                <div className={styles.rpbWriting}>
                    <img src="src/assets/rockpommelsband_neu.svg" alt="Rockpommel's Band Writing" className="filter" />
                </div>

                <div className={styles.bigTextWrapper}>
                    <h2>Die Premiere einer neuen/alten Band!</h2>
                    <h3>Sechs ehemalige <span className="emphasized">Grobschnitt</span>-Musiker und ihre Freunde
                        zelebrieren die einzigartige Musik der Hagener Kultband in großer Besetzung.</h3>
                </div>
            </div>

            <Card>
                <div className={styles.ünpWriting}>
                    <img src="src/assets/übernextparty_v3.svg" alt="Übernext Party Writing" className="filter" />
                </div>

                <div className={styles.bigTextWrapper}>
                    <span>Am Freitag, 3. Oktober und am Samstag, 4. Oktober im</span>
                    <Link to={"https://werkhof-kulturzentrum.de/"}>WERKHOF KULTURZENTRUM e.V. in Hagen (Hohenlimburg)</Link>

                    <span>Tickets: Wer bei diesem besonderen Erlebnis dabei sein will, kann Tickets
                        zum Preis von 35,-€ ………….</span>

                </div>
                {/* </Card> */}
                <DividerRule />
                {/* <Card> */}

                <div className={styles.textWrapper}>
                    <h2>Die Reise geht weiter</h2>
                    <p>Nachdem die Band <span className="emphasized">Grobschnitt</span> 2012 in der Essener Gruga-Halle ihr letztes Konzert in voller „elektrischer“ Besetzung gegeben hat und sie nun seit einigen Jahren als <span className="emphasized">Grobschnitt Acoustic Party</span> mit großem Erfolg durch Deutschland tourt, haben sich weitere sechs ehemalige Bandmitglieder entschlossen unter neuem Namen die Musik von Grobschnitt auch wieder in großer Besetzung zu präsentieren.<br />
                        Da die Rechte am Namen bei der Acoustic Band liegen, sie aber deutlich machen wollten, was ihr musikalischer Background ist, werden sie als <span className="emphasized">Rockpommel's Band</span> Konzerte geben, um ihr Publikum mit der bekannten Kultmusik in lange vermisste Sphären zu entführen. </p>

                    <p>Dass sie keine Cover- oder Tribute-Band sind, wird schon klar, wenn man sieht, wer alles dabei ist. Neben dem „Ur-Grobschnitter“ <span className="emphasized">Toni Moff Mollo</span> am Gesang, dem langjährigen Bassisten <span className="emphasized">Milla Kapolke</span> und am Schlagzeug <span className="emphasized">Admiral Top Sahne Möller</span> sind es weiterhin aus der letzten Grobschnitt-Besetzung Gitarrist <span className="emphasized">Manu Kapolke</span>, Keyboarder <span className="emphasized">Deva Tattva</span> und Drummer <span className="emphasized">Demian Hache</span>. Neu dabei sind an der Gitarre <span className="emphasized">Kevin Hollmann</span>, der viele Jahre bei der Grobschnitt Tribute-Band <span className="emphasized">Nebelreise</span> geglänzt hat, sowie mit Sänger <span className="emphasized">Armin Krull</span> eine weitere prägende Figur der Hagener Musikszene.
                    </p>

                    <p><b>Eine große Besetzung, die sich als Ziel gesetzt hat, die einzigartige Musik der deutschen Kultband wieder live auf die Bühne zu bringen. Und deshalb gibt es als Premiere – wie seinerzeit beim Startschuss der <span className="emphasized">Next Party</span> im Mai 2007 – zwei Konzerte im legendären Werkhof...</b>
                    </p></div>
            </Card>
        </div>
    );
};