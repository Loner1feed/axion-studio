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
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className,
  href,
  disabled,
  type,
  variant = "primary",
}) => {
  const defineContent = () => (
    <>
      {icon} <span>{label}</span>
    </>
  );

  const defineClassname = () => {
    const classList = [styles.button, className];

    if (disabled) classList.push(styles.disabled);
    if (variant === "secondary") classList.push(styles.secondary);

    return classList.join(" ");
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} className={defineClassname()}>
        {defineContent()}
      </a>
    );
  } else
    return (
      <button type={type} onClick={onClick} className={defineClassname()}>
        {defineContent()}
      </button>
    );
};
