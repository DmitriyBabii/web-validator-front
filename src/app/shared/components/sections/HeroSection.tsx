import Image from "next/image";
import heroImage from "./hero.jpg";
import styles from "./HeroSection.module.css";
import AppLink from "../AppLink";

export default function HeroSection() {
  return (
    <section id="hero-section" className={styles.root}>
      <div className={styles.backBlock}>
        <div className={styles.heroBlock}>
          <h1 className={styles.title}>Optimize website</h1>
          <p className={styles.subtitle}>
            Ensure your website meets accessability standards with artificial
            intelligence.
          </p>
          <div className={styles.btnContainer}>
            <AppLink className={styles.accentBtn} href={"/#membership-section"}>
              Optimize now
            </AppLink>
            <AppLink className={styles.secondBtn} href={"/#footer"}>
              Contact Us
            </AppLink>
          </div>
        </div>
      </div>
      <Image
        className={styles.image}
        src={heroImage}
        alt={"hero-image"}
        width={720}
        height={480}
      />
    </section>
  );
}
