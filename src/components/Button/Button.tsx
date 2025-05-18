import styles from './Button.module.less';

export const Button = ({ className = '', ...delegated }) => {
  return (
    <button
      className={`${styles.button} ${className} filter`}
      {...delegated}
    />
  );
};
