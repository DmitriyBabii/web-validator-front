import styles from "./page.module.css";
import AboutSection from "./shared/components/sections/AboutSection";
import BenefitsSection from "./shared/components/sections/BenefitsSection";
import HeroSection from "./shared/components/sections/HeroSection";
import MembershipSection from "./shared/components/sections/MembershipSection";
import PressSection from "./shared/components/sections/PressSection";
import ServicesSection from "./shared/components/sections/ServiceSection";
import StatsSection from "./shared/components/sections/StatsSection";

export default function Home() {
  return (
    <main className={styles.root}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <MembershipSection />
      <PressSection />
      <BenefitsSection />
    </main>
  );
}
