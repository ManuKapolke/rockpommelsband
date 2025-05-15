import { motion } from "motion/react";

export const sentenceVariants = {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

export const Typewriter = ({ text, style, ...rest }: { text: string, style?: React.CSSProperties }) => (
    <motion.h2
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={style}
        {...rest}
    >
        {text.split("").map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={letterVariants}>
                {char}
            </motion.span>
        ))}
    </motion.h2>
);