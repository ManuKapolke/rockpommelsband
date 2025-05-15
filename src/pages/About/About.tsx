// import { BandImage } from "../../components/BandImage/BandImage";
import { Fragment } from "react";
import { persons } from "../../utils/persons";
import { Card } from "../../components/Card/Card";
import styles from "./About.module.less";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import { motion } from "motion/react";
import { fadeInVariants } from "../Home/Home";

export const About = () => {
    // const [isHighlighted, setIsHighlighted] = useState(false);

    // useEffect(() => {
    //     let cancelled = false;
    //     const highlightSequence = async () => {
    //         setIsHighlighted(true);
    //         await new Promise(res => setTimeout(res, 1000));
    //         setIsHighlighted(false);
    //     };
    //     highlightSequence();
    //     return () => { cancelled = true; };
    // }, []);


    return <>
        {/* <BandImage /> */}
        {/* <BandFoto /> */}
        <div className={styles.imageWrapper}>
            <img src="src/assets/img/band/IMG_8643-removebg_cut_small.png" alt="Band" className={styles.filterFoto}
            // style={{
            //     filter: isHighlighted ? "drop-shadow(0 0 1em var(--font-color-emphasized))" : undefined,
            // }} 
            />
        </div>
        <Card style={{ marginTop: "-124px", paddingTop: "124px" }}>
            <div className={styles.textWrapper}>
                <Typewriter text={"ROCKPOMMEL'S BAND sind (v.l.n.r.):"} style={{ textTransform: "unset" }} />
                <div className={styles.bandGrid}>
                    {persons.map((person) => (
                        <Fragment key={person.name}>
                            <div className={styles.instrumentEmoji}>{person.instrumentEmoji}</div>
                            <div className={styles.personName}>{person.name}</div>
                            <div className={styles.personInstrument}>{person.instrument}</div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </Card >
    </>;
};