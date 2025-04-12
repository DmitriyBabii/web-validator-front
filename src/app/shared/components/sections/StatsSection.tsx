import styles from "./styles/InputDesign.module.css";

import statImage1 from "../../../../../public/stats/stat1.jpg";
import statImage2 from "../../../../../public/stats/stat2.jpg";
import statImage3 from "../../../../../public/stats/stat3.jpg";
import statImage4 from "../../../../../public/stats/stat4.jpg";

import { StaticImageData } from "next/image";

interface StatCardProps {
  title: string;
  description: string;
  backgroundClass: string;
  background: StaticImageData;
}

function StatCard({
  title,
  description,
  background,
  backgroundClass,
}: StatCardProps) {
  return (
    <div
      className={`${backgroundClass} ${styles.div30}`}
      style={{
        backgroundImage: `linear-gradient(#0006 0% 100%), url(${background.src})`,
      }}
    >
      <div className={styles.div31}>
        <h4 className={styles.h4}>{title}</h4>
        <p className={styles.p8}>{description}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.section4}>
      <div className={styles.div26}>
        <div className={styles.div27}>
          <div className={styles.div28}>
            <div className={styles.div29}>
              <StatCard
                title="A Fresh Start"
                description="A new platform focused on smart website optimization"
                background={statImage1}
                backgroundClass={styles.div30}
              />
              <StatCard
                title="Thousands of Tests"
                description="Proven methods backed by real performance data"
                background={statImage2}
                backgroundClass={styles.div32}
              />
            </div>
          </div>
          <div className={styles.div34}>
            <div className={styles.div35}>
              <h3 className={styles.h32}>
                Our optimization services are essential
              </h3>
              <p className={styles.p10}>
                Benefit from our experience and technical know-how
              </p>
            </div>
          </div>
          <div className={styles.div36}>
            <div className={styles.div37}>
              <StatCard
                title="Designed for Everyone"
                description="From small businesses to large teams"
                background={statImage3}
                backgroundClass={styles.div38}
              />
              <StatCard
                title="Ready to Grow"
                description="Join a future-ready optimization network"
                background={statImage4}
                backgroundClass={styles.div40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
