import styles from './Button.module.less';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = ({ className = '', ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      {...props}
    />
  );
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  href: string;
};

export const LinkButton = ({ className = '', ...props }: AnchorProps) => {
  return (
    <a
      className={`${styles.button} ${className}`}
      {...props}
    />
  );
};
