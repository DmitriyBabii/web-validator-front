import Image from "next/image";
import styles from "./styles/InputDesign.module.css";
import AppLink from "../AppLink";

interface MembershipStepProps {
  iconSrc: string;
  title: string;
  description: string;
}

function MembershipStep({ iconSrc, title, description }: MembershipStepProps) {
  return (
    <div className={styles.div50}>
      <div className={styles.div51}>
        <div className={styles.div52}>
          <Image
            width="128"
            height="127"
            alt=""
            decoding="async"
            fetchPriority="low"
            src={iconSrc}
            className={styles.img9}
          />
        </div>
        <div className={styles.div53}>
          <h5 className={styles.h52}>{title}</h5>
          <p className={styles.p13}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function MembershipSection() {
  const steps = [
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Filling-Survey-2.svg",
      title: "Formular ausfüllen",
      description: "Ob online oder auf Papier. Schnell und unkompliziert.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Analyze-Data-3.svg",
      title: "Wir prüfen Ihre Daten",
      description: "Wir nehmen uns Ihrer an und bereiten uns auf Sie vor.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Aproval-5.svg",
      title: "Freischaltung",
      description:
        "Beitrittsbestätigung und Aktivierung des Online-Mitgliederbereichs.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Beratung.svg",
      title: "Beratung & Hilfe",
      description:
        "Nun können Sie Ihr mietrechtliches Anliegen mit uns klären.",
    },
  ];

  return (
    <section className={styles.section5}>
      <div className={styles.div42}>
        <div className={styles.div43}>
          <div className={styles.div44}>
            <div className={styles.div45}>
              <h2 className={styles.h2}>So werden Sie Mitglied</h2>
            </div>
            <div className={styles.div46}>
              <div className={styles.div47}>
                <AppLink
                  href="https://www.mieterverein-hamburg.de/mitglied-werden"
                  className={styles.a10}
                >
                  Mitgliedschaft beantragen
                </AppLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div48}>
        <div className={styles.div49}>
          {steps.map((step, index) => (
            <MembershipStep
              key={index}
              iconSrc={step.iconSrc}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className={styles.div66}>
          <div className={styles.div67}>
            <button type="button" className={styles.button} />
            <button type="button" className={styles.button2} />
          </div>
        </div>
      </div>
    </section>
  );
}
