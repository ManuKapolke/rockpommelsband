// import { BandImage } from "../../components/BandImage/BandImage";
import { Fragment } from "react";
import { persons } from "../../utils/persons";
import { Card } from "../../components/Card/Card";
import styles from "./About.module.less";
import { Typewriter } from "../../components/Typewriter/Typewriter";
import BandImg from "../../assets/img/band/IMG_8643-removebg_cut_small.png";
import { motion, Variants } from "motion/react";
import React from "react";

export const imgFadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { opacity: { duration: 3, ease: "easeInOut" } },
  },
};

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

  const [imgLoaded, setImgLoaded] = React.useState(false);

  const scrollToCard = (personName: string) => {
    const id = `person-${personName.toLowerCase().replace(/\s+/g, "-")}`;
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Header height from Header.module.less
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const img = new window.Image();
    img.src = BandImg;
    img.onload = () => setImgLoaded(true);
  }, []);

  if (!imgLoaded) {
    return <div style={{ width: "900px", height: "600px" }} />; // Oder ein Spinner/Loader
  }

  return (
    <>
      {/* <BandImage /> */}
      {/* <BandFoto /> */}
      <div className={styles.imageWrapper}>
        <motion.img
          src={BandImg}
          alt="Band"
          className={styles.filterFoto}
          variants={imgFadeInVariants}
          initial="hidden"
          animate="visible"
          // style={{
          //     filter: isHighlighted ? "drop-shadow(0 0 1em var(--font-color-emphasized))" : undefined,
          // }}
        />
      </div>
      <Card style={{ marginTop: "-180px", paddingTop: "180px" }}>
        <div className={styles.textWrapper}>
          <Typewriter
            text={"ROCKPOMMEL'S BAND sind (v.l.n.r.):"}
            style={{ textTransform: "unset" }}
          />
          <div className={styles.bandGrid}>
            {persons.map((person) => (
              <Fragment key={person.name}>
                <div className={styles.instrumentEmoji}>
                  {person.instrumentEmoji}
                </div>
                <div
                  className={styles.personName}
                  onClick={() => scrollToCard(person.name)}
                >
                  {person.name}
                </div>
                <div className={styles.personInstrument}>
                  {person.instrument}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Card>
      {persons.map((person) => (
        <Card
          key={person.name}
          id={`person-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
          style={{ marginTop: "24px" }}
        >
          <div className={styles.memberCardGrid}>
            <div className={styles.memberPhoto}>
              <img src={person.photo} alt={person.name} />
            </div>
            <div className={styles.memberInfo}>
              <div className={styles.memberName}>{person.name}</div>
              <div className={styles.memberInstrument}>{person.instrument}</div>
              <div className={styles.memberDescription}>
                {person.description}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
