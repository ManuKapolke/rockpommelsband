import styles from './Button.module.css';

export const Button = ({ className = '', ...delegated }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
};
