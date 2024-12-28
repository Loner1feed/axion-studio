import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className,
  href,
  disabled,
  type,
}) => {
  const defineContent = () => (
    <>
      {icon} <span>{label}</span>
    </>
  );

  // const defineClassname = () => {
  //   if (disabled) {
  //     return `${styles.button} ${className} ${styles.disabled}`;
  //   } else {
  //     return `${styles.button} ${className}`;
  //   }
  // };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={
          disabled
            ? `${styles.button} ${className} ${styles.disabled}`
            : `${styles.button} ${className}`
        }
      >
        {defineContent()}
      </a>
    );
  } else
    return (
      <button
        type={type}
        onClick={onClick}
        className={
          disabled
            ? `${styles.button} ${className} ${styles.disabled}`
            : `${styles.button} ${className}`
        }
      >
        {defineContent()}
      </button>
    );
};
