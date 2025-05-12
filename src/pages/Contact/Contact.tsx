import { Card } from "../../components/Card/Card";
import styles from "./Contact.module.less";

export const Contact = () => {
    return <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
            {/* <img src="src/assets/rockpommelsband_neu.svg" alt="Rockpommel's Band Writing" className="filter" /> */}
            <img src="src/assets/übernextparty_v1.svg" alt="Übernext Party Writing" className="filter" />
        </div>
        <Card>
            <div className={styles.textWrapper}>
                <h2>Kontakt</h2>
                <p>Für Anfragen, Buchungen und weitere Informationen stehen wir gerne zur Verfügung.</p>
                <div className={styles.contactGrid}>
                    <span>Email:</span> <a href='mailto:info@rockpommelsband.com'>info@rockpommelsband.com</a>
                    <span>Post:</span> <p>Rockpommel's Band<br />Detlef Müller-Hache<br />Hülsberg 37<br />42349 Wuppertal</p>
                </div>
            </div>
        </Card>
    </div>;
};
