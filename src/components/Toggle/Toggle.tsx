import { motion } from "motion/react";

import styles from "./Toggle.module.less";

type ToggleProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  id?: string;
};

export const Toggle = ({ value, onChange, id }: ToggleProps) => {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={value}
      className={`${styles.wrapper} ${value ? styles.toggleOn : ""}`}
      onClick={() => onChange(!value)}
    >
      <motion.span
        className={styles.ball}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
        }}
        animate={{
          x: value ? "100%" : "0%",
        }}
      />
    </button>
  );
};
