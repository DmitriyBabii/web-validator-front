"use client";
import * as React from "react";
import styles from "./ColorMessage.module.css";

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

const getContrastLevelClass = (contrast: number) => {
  if (contrast < 3) return styles.lowContrast; // червоний
  if (contrast < 4.5) return styles.mediumContrast; // жовтий
  return styles.highContrast; // зелений
};

const StatBox = ({ value, label }: { value: string; label: string }) => {
  const contrast = parseFloat(value);
  const levelClass = getContrastLevelClass(contrast);

  return (
    <div className={`${styles.statBox} ${levelClass}`}>
      <p className={styles.statValue}>{value}</p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
};

function toCamelCase(kebab: string): string {
  return kebab.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

// WarningMessage component for the warning container
const WarningMessage = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = React.useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      className={`${styles.warningContainer} ${
        expanded ? styles.textExpanded : styles.textUnExpanded
      }`}
      onClick={toggleExpand}
    >
      {text}
    </div>
  );
};

export default function ColorMessage({
  colorMessage,
}: {
  colorMessage: ColorValidateType;
}) {
  const data = colorMessage;
  const contrastEntries = Object.entries(data.contrast);
  const colorStyles = Object.fromEntries(
    Object.entries(data.colorStyles).map(([key, rgb]) => [
      toCamelCase(key),
      `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`,
    ])
  );

  // Перетворюємо nonColorStyles ключі в camelCase
  const nonColorStyles = Object.fromEntries(
    Object.entries(data.nonColorStyles).map(([key, value]) => [
      toCamelCase(key),
      value,
    ])
  );
  const blockStyles = {
    ...colorStyles,
    ...nonColorStyles,
    borderStyle: "solid",
  };

  return (
    <article className={styles.container}>
      <div className={styles.statsContainer}>
        {contrastEntries.map(([label, value], index) => {
          return <StatBox key={index} value={value.toFixed(2)} label={label} />;
        })}
      </div>
      <div className={styles.contentContainer}>
        <WarningMessage text={data.fragment} />
        <div className={styles.textDisplay} style={blockStyles}>
          Some text
        </div>
      </div>
    </article>
  );
}
