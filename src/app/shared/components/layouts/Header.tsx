import styles from "./Header.module.css";
import AppLink from "../AppLink";

export default function Header() {
  return (
    <header className={styles.root}>
      <div>Logo</div>
      <div className={styles.links}>
        <AppLink className={styles.link} href={"/"}>Optimize Now</AppLink>
        <AppLink className={styles.link} href={"/"}>Check Site</AppLink>
        <AppLink className={styles.link} href={"/"}>Check Contrast</AppLink>
        <AppLink className={`${styles.link} ${styles.accentLink}`} href={"/"}>Contact Us</AppLink>
      </div>
    </header>
  );
}
