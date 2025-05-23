import { Card } from "../../components/Card/Card";
import styles from "./Anzeige.module.less";
import { motion } from "motion/react";
import RPBWriting from '../../assets/rockpommelsband.svg';
import ÜnpV3Img from '../../assets/übernextparty_v3.svg';
import BandImg from '../../assets/img/band/IMG_8643-removebg_cut_small.png';
import React from "react";


export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 1, ease: "easeOut" } } }
};


export const zoomInVariants = {
    small: { opacity: 0, scale: 0.95 },
    normal: { opacity: 1, scale: 1, transition: { opacity: { duration: 1, ease: "ease" }, scale: { duration: 1, ease: "easeInOut" } } }
};

export const slideInFromBelowVariants = {
    shifted: { opacity: 0, translateY: 5 },
    normal: { opacity: 1, translateY: 0, transition: { opacity: { duration: 1, ease: "easeOut" }, translateY: { duration: 1, ease: "easeInOut" } } }
};

export const slideInFromRightVariants = {
    shifted: { opacity: 0, translateX: 5 },
    normal: { opacity: 1, translateX: 0, transition: { opacity: { duration: 1, ease: "easeOut" }, translateX: { duration: 1, ease: "easeInOut" } } }
};

export const Anzeige = () => {
    const [imgLoaded, setImgLoaded] = React.useState(false);

    React.useEffect(() => {
        let loadedCount = 0;
        const handleLoad = () => {
            loadedCount += 1;
            if (loadedCount === 2) {
                setImgLoaded(true);
            }
        };
        const img1 = new window.Image();
        const img2 = new window.Image();
        img1.src = RPBWriting;
        img2.src = ÜnpV3Img;
        img1.onload = handleLoad;
        img2.onload = handleLoad;
    }, []);

    if (!imgLoaded) {
        return null; // Oder ein Spinner/Loader
    }
    return (
        <div className={styles.contentWrapper}>
            <Card style={{ padding: "40px" }}>
                <div className={styles.rpbWriting}>
                    <motion.img src={RPBWriting} alt="Rockpommel's Band Writing" className="filter"
                        variants={zoomInVariants} initial="small" animate="normal" />
                    <motion.img src={BandImg} alt="Rockpommel's Band Writing" className="filter"
                        variants={zoomInVariants} initial="small" animate="normal" />
                </div>

                <div className={styles.bigTextWrapper}>
                    <h3>Sechs ehemalige <span className="emphasized">Grobschnitt</span>-Musiker und ihre Freunde
                        zelebrieren die einzigartige Musik der Hagener Kultband in großer Besetzung</h3>
                    <h2>Premierekonzerte: <br />
                        3./4. Oktober 2025<br />
                        Werkhof Kulturzentrum<br />
                        58119 Hagen</h2>
                    <h3>  Tickets: www.rockpommelsband.com</h3>
                </div>
            </Card>
        </div>
    );
};