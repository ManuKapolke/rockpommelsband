import styles from "./Em.module.less";

export const Em = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.emphasized}>{children}</span>
);
