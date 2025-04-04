"use client";
import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import ColorMessage from "@/app/shared/components/ColorMessage";

interface ValidateError {
  line: number;
  column: number;
  message: string;
  level: string;
}

function InputDesign() {
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleValidate = () => {
    setLoading(true);
    axios
      .post("/api/validate/color", {
        url: inputValue,
      })
      .then((res) => {
        setLoading(false);
        setColors(res.data);
        console.log("Validating:", inputValue, res.data);
      })
      .catch(() => setLoading(false));
  };

  return (
    <main className={styles.container}>
      <section className={styles.validationSection}>
        <div className={styles.validationContent}>
          <h1 className={styles.validationTitle}>
            Validate your site is simple
          </h1>
          <div className={styles.inputGroup}>
            <input
              type="url"
              className={styles.validationInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your site URL"
              aria-label="Site URL"
            />
            <button className={styles.validateButton} onClick={handleValidate}>
              Validate
            </button>
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        {loading
          ? "Loading"
          : colors.map((colorMessage: ValidateError, index) => (
              <ColorMessage key={index} colorMessage={colorMessage} />
            ))}
      </section>
    </main>
  );
}

export default InputDesign;
