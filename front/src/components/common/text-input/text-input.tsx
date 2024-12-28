import { ChangeEventHandler } from "react";
import styles from "./text-input.module.scss";

interface TextInputProps {
  placeholder?: string;
  textarea?: boolean;
  className?: string;
  name?: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  value?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  textarea = false,
  className = "",
  name,
  error,
  onChange,
  value = "",
}) => {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {textarea ? (
        <textarea
          name={name}
          className={`${styles.input} ${styles.textarea} ${
            !!error && styles.error
          }`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          name={name}
          className={`${styles.input}  ${!!error && styles.error}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}

      {!!error && <span>{error}</span>}
    </div>
  );
};
