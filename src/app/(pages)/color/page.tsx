"use client";
import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import ColorMessage from "@/app/shared/components/ColorMessage";
import ServicesSection from "@/app/shared/components/sections/ServiceSection";
import Image from "next/image";

import errorImage from "../error.svg";

type ColorValidateType = {
  contrast: {
    [key: string]: number;
  };
  colorStyles: {
    [key: string]: ColorType;
  };
  nonColorStyles: {
    [key: string]: string;
  };
  fragment: string;
};

type ColorType = {
  red: number;
  green: number;
  blue: number;
};

function InputDesign() {
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleValidate = () => {
    setLoading(true);
    setEmpty(false);
    setError(false);
    axios
      .post("/api/validate/color", {
        url: inputValue,
      })
      .then((res) => {
        setLoading(false);
        setColors(res.data);
        console.log("Validating:", inputValue, res.data);
      })
      .catch(() => {
        setLoading(false);
        setEmpty(true);
        setColors([]);
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
              Check colors
            </button>
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        {loading ? (
          <span className={styles.logMessage}>Loading</span>
        ) : (
          colors.map((colorMessage: ColorValidateType, index) => (
            <ColorMessage key={index} colorMessage={colorMessage} />
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
