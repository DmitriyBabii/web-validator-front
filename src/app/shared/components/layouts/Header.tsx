import styles from "./Header.module.css";
import AppLink from "../AppLink";
import Image from "next/image";

import logo from "./Logo.png";

export default function Header() {
  return (
    <header className={styles.root}>
      <AppLink href={"/"}>
        <Image height={56} width={64} src={logo} alt="logo" />
      </AppLink>
      <div className={styles.links}>
        <AppLink className={styles.link} href={"/#hero-section"}>
          Optimize Now
        </AppLink>
        <AppLink className={styles.link} href={"/#press-section"}>
          Check Site
        </AppLink>
        <AppLink className={styles.link} href={"/#membership-section"}>
          Check Contrast
        </AppLink>
        <AppLink
          className={`${styles.link} ${styles.accentLink}`}
          href={"/#footer"}
        >
          Contact Us
        </AppLink>
      </div>
    </header>
  );
}
