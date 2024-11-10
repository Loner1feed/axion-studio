import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className,
  href,
}) => {
  const defineContent = () => (
    <>
      {icon} <span>{label}</span>
    </>
  );

  const defineClassname = () => {
    return `${styles.button} ${className}`;
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} className={defineClassname()}>
        {defineContent()}
      </a>
    );
  } else
    return (
      <button onClick={onClick} className={defineClassname()}>
        {defineContent()}
      </button>
    );
};
