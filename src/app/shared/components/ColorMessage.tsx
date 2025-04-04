"use client";
import * as React from "react";
import styles from "./ColorMessage.module.css";

// const data = {
//   colorStyles: {
//     "background-color": { red: 8, green: 49, blue: 88 },
//     "border-bottom-color": { red: 255, green: 255, blue: 255 },
//     color: { red: 192, green: 196, blue: 201 },
//     "border-left-color": { red: 255, green: 255, blue: 255 },
//     "border-top-color": { red: 255, green: 255, blue: 255 },
//     "border-right-color": { red: 255, green: 255, blue: 255 },
//     "outline-color": { red: 192, green: 196, blue: 201 },
//   },
//   contrast: {
//     "border-bottom-color": 13.202847269215619,
//     color: 7.53233365973136,
//     "border-left-color": 13.202847269215619,
//     "border-top-color": 13.202847269215619,
//     "border-right-color": 13.202847269215619,
//     "outline-color": 7.53233365973136,
//   },
//   nonColorStyles: {
//     "border-top-width": "1px",
//     "border-right-width": "1px",
//     "border-bottom-width": "1px",
//     "border-left-width": "1px",
//   },
//   fragment: `<div class="dropdown-menu"><a href="/supportRequest" class="plain dropdown-item">Request support</a><a href="/upgrade" class="plain dropdown-item">Upgrade your license keys</a><a href="/support" class="plain dropdown-item">Support packages explained</a><a href="/jprofiler/training" class="plain dropdown-item">Training partners</a></div>`,
// };

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
  return <div className={styles.warningContainer}>{text}</div>;
};

export default function ColorMessage({ colorMessage }) {
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
