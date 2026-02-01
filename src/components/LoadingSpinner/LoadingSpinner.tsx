import styles from "./LoadingSpinner.module.less";

type LoadingSpinnerProps = {
  size?: string | number;
  className?: string;
  hasPositionAbsolute?: boolean;
};

export const LoadingSpinner = ({
  size = "48px",
  className = "",
  hasPositionAbsolute,
}: LoadingSpinnerProps) => {
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={`${styles.spinner} ${hasPositionAbsolute && styles.positionAbsolute} ${className}`}
      style={{ width: sizeValue, height: sizeValue }}
      aria-label="Loading"
      role="status"
    >
      <div className={styles.spinnerRing}></div>
    </div>
  );
};
