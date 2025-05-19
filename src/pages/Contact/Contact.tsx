import { motion } from "motion/react";
import { Card } from "../../components/Card/Card";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import styles from "./Contact.module.less";
import { zoomInVariants } from "../Home/Home";
import ÜnpV1Img from '../../assets/übernextparty_v1.svg';
import React from "react";
// import PaperplaneIcon from '../../assets/papierflieger.svg';


export const Contact = () => {
    const [imgLoaded, setImgLoaded] = React.useState(false);

    React.useEffect(() => {
        const img = new window.Image();
        img.src = ÜnpV1Img;
        img.onload = () => setImgLoaded(true);
    }, []);

    if (!imgLoaded) {
        return null; // Oder ein Spinner/Loader
    }

    return <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
            <motion.img src={ÜnpV1Img} alt="Übernext Party Writing" className="filter"
                variants={zoomInVariants} initial="small" animate="normal" />
            {/* <motion.img src={PaperplaneIcon} alt="Paper Plane" className="filter"
                variants={fadeInVariants} initial="hidden" animate="visible" /> */}
        </div>
        <Card>
            <div className={styles.textWrapper}>
                <Typewriter text="Kontakt" />
                <p>Für Anfragen, Buchungen und weitere Informationen stehen wir gerne zur Verfügung.</p>
                <div className={styles.contactGrid}>
                    <span>Email:</span> <a href='mailto:info@rockpommelsband.com'>info@rockpommelsband.com</a>
                    <span>Post:</span> <p>Rockpommel's Band<br />Detlef Müller-Hache<br />Hülsberg 37<br />42349 Wuppertal</p>
                </div>
            </div>
        </Card>
    </div>;
};
