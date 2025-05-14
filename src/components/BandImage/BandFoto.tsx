import { useEffect, useState } from "react";
import { persons } from "../../utils/persons";
import styles from "./BandFoto.module.less";

export const BandFoto = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

    useEffect(() => {
        let cancelled = false;
        const highlightSequence = async () => {
            for (let i = 0; i < persons.length; i++) {
                if (cancelled) break;
                setHighlightedIndex(i);
                await new Promise(res => setTimeout(res, 300));
                setHighlightedIndex(null);
                if (cancelled) break;
                await new Promise(res => setTimeout(res, 100));
            }
            setHighlightedIndex(0); // go back to 0
            await new Promise(res => setTimeout(res, 300));
            setHighlightedIndex(null);
        };
        highlightSequence();
        return () => { cancelled = true; };
    }, []);

    return (
        <div
            className={styles.bandImage}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {persons.map((person, index) => (
                <div key={person.name}
                    className={styles.personImage}
                    style={{
                        position: "absolute",
                        filter: isHovered || highlightedIndex === index ? "drop-shadow(0 0 1em var(--font-color-emphasized))" : "none",
                    }}
                >
                    <img src={person.colorSrc} alt={person.name} />
                </div>
            ))}
        </div>
    );
};
