import { useTranslation } from "../../i18n/useTranslation";
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
  const { t } = useTranslation();
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={`${styles.spinner} ${hasPositionAbsolute && styles.positionAbsolute} ${className}`}
      style={{ width: sizeValue, height: sizeValue }}
      aria-label={t({ id: "aria.loading" })}
      role="status"
    >
      <div className={styles.spinnerRing}></div>
    </div>
  );
};
