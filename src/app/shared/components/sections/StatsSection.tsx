import styles from "./styles/InputDesign.module.css";

interface StatCardProps {
  title: string;
  description: string;
  backgroundClass: string;
}

function StatCard({ title, description, backgroundClass }: StatCardProps) {
  return (
    <div className={backgroundClass}>
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
                title="Seit 133 Jahren"
                description="Mieterberatungen in Hamburg"
                backgroundClass={styles.div30}
              />
              <StatCard
                title="Rund 70.000"
                description="Rechtsberatungen im Jahr"
                backgroundClass={styles.div32}
              />
            </div>
          </div>
          <div className={styles.div34}>
            <div className={styles.div35}>
              <h3 className={styles.h32}>
                Der Mieterverein zu Hamburg — alternativlos gut.
              </h3>
              <p className={styles.p10}>
                Profitieren Sie von unserer Erfahrung und Expertise
              </p>
            </div>
          </div>
          <div className={styles.div36}>
            <div className={styles.div37}>
              <StatCard
                title="Mehr als 79.000"
                description="Hamburger Mitgliedshaushalte vertrauen uns"
                backgroundClass={styles.div38}
              />
              <StatCard
                title="1,3 Mio. Haushalte"
                description="im bundesweiten DMB-Netzwerk"
                backgroundClass={styles.div40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
