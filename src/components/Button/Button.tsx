import { Link, LinkProps } from "react-router-dom";
import styles from "./Button.module.less";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  small?: boolean;
  className?: string;
};

export const Button = ({
  small = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${small ? styles.small : ""} ${className}`}
      {...props}
    />
  );
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  small?: boolean;
  className?: string;
  href: string;
};

export const LinkButton = ({
  small = false,
  className = "",
  ...props
}: AnchorProps) => {
  return (
    <a
      className={`${styles.button} ${small ? styles.small : ""} ${className}`}
      {...props}
    />
  );
};

export const InternalLinkButton = ({
  small = false,
  className = "",
  to,
  ...props
}: LinkProps & { small?: boolean; className?: string }) => {
  return (
    <Link
      className={`${styles.button} ${small ? styles.small : ""} ${className}`}
      to={to}
      {...props}
    />
  );
};
