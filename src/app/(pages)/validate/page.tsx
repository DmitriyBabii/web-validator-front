"use client";
import { useState } from "react";
import styles from "./page.module.css";
import ValidateMessage from "@/app/shared/components/ValidateMessage";
import axios from "axios";
import ServicesSection from "@/app/shared/components/sections/ServiceSection";

import errorImage from "../error.svg";
import Image from "next/image";

interface ValidateError {
  line: number;
  column: number;
  message: string;
  level: string;
}

function InputDesign() {
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleValidate = () => {
    setLoading(true);
    setEmpty(false);
    setError(false);
    axios
      .post("/api/validate/html", {
        url: inputValue,
      })
      .then((res) => {
        setLoading(false);
        setEmpty(false);
        setErrors(res.data);
        console.log("Validating:", inputValue, res.data);
      })
      .catch(() => {
        setLoading(false);
        setEmpty(true);
        setErrors([]);
        setError(true);
      });
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
        {loading ? (
          <span className={styles.logMessage}>Loading</span>
        ) : (
          errors.map((error: ValidateError, index) => (
            <ValidateMessage
              key={index}
              level={error.level}
              message={error.message}
              line={error.line}
              column={error.column}
            />
          ))
        )}
        {error ? (
          <div className={styles.errorMessage}>
            <span>Oops! Something went wrong.</span>
            <Image src={errorImage} alt="error" />
          </div>
        ) : empty ? (
          <span className={styles.logMessage}>
            You will see the results here
          </span>
        ) : (
          ""
        )}
      </section>
      <ServicesSection />
    </main>
  );
}

export default InputDesign;
