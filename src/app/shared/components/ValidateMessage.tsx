"use client";
import styles from "./ValidateMessage.module.css";

interface ErrorMessageProps {
  level: string;
  message: string;
  line: number;
  column: number;
}

export default function ValidateMessage({
  level,
  message,
  line,
  column,
}: ErrorMessageProps) {
  return (
    <article className={styles.errorCard}>
      <header className={styles.errorHeader}>
        <span
          className={styles.errorLabel}
          style={
            level == "ERROR"
              ? { backgroundColor: "#ff3636" }
              : { backgroundColor: "#ffac15" }
          }
        >
          {level}
        </span>
        <h2 className={styles.errorMessage}>{message}</h2>
      </header>
      <p className={styles.errorDetails}>
        <span>line: {line}</span>
        <br />
        <span>column: {column}</span>
      </p>
    </article>
  );
}
