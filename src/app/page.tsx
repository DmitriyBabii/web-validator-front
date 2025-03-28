import styles from "./page.module.css";
import HeroSection from "./shared/components/sections/HeroSection";

export default function Home() {
  return (
    <main className={styles.root}>
      <HeroSection />
    </main>
  );
}
