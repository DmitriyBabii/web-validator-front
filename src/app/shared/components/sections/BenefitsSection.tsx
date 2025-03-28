import Image from "next/image";
import styles from "./styles/InputDesign.module.css";

interface BenefitItemProps {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
}

function BenefitItem({
  iconSrc,
  title,
  description,
  className = styles.article,
}: BenefitItemProps) {
  return (
    <article className={className}>
      <div className={styles.div77}>
        <Image
          width="32"
          height="32"
          alt=""
          decoding="async"
          fetchPriority="low"
          src={iconSrc}
          className={styles.img14}
        />
      </div>
      <div>
        <h4 className={styles.h43}>{title}</h4>
        <p className={styles.p19}>{description}</p>
      </div>
    </article>
  );
}

export default function BenefitsSection() {
  const benefits = [
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/Alarm.svg",
      title: "Sofort Hilfe",
      description:
        "Sofort nach Beitritt können Sie unsere Beratung in Anspruch nehmen und wir unterstützen Sie bei der Klärung Ihres mietrechtlichen Anliegens.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/DMB.svg",
      title: "Mitglied im DMB",
      description:
        "Sie gehören dem Deutschen Mieterbund an. Mit seinen 1,3 Millionen Mitgliedshaushalten ist der DMB die Stimme aller Mieter:innen in Berlin und den Bundesländern.",
      className: styles.article2,
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/Legal-Scale.svg",
      title: "Rechtsschutz",
      description:
        "Entsteht Streit frühestens drei Monate nach Beitritt, übernimmt unsere Rechtsschutzversicherung den größten Teil Ihrer Prozesskosten.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/Amazon-Pin-Location.svg",
      title: "Standorte in der Nähe",
      description:
        "An unserem Hauptstandort am Berliner Tor und in unseren zahlreichen Außenstellen finden Sie Ihre persönlichen Ansprechpartner:innen.",
      className: styles.article3,
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/Group.svg",
      title: "Kostenfreie Expertenberatung",
      description:
        "Die mietrechtliche Beratung ist im Mitgliedsbeitrag enthalten und erfolgt ausschließlich durch qualifizierte Jurist:innen. Wir legen großen Wert auf die Fortbildung unserer Kolleg:innen.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/Discount.svg",
      title: "Beitrags­ermäßigungen",
      description:
        "Für Mitglieder zahlreicher Gewerkschaften und Sozialverbände sowie für Studierende, Auszubildende und Menschen mit geringem Einkommen bieten wir Beitragsermäßigungen an. Sprechen Sie uns an!",
      className: styles.article4,
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/App-Interface.svg",
      title: "Mitgliederbereich",
      description:
        "In unserem Mitgliederbereich stellen Sie uns Ihre Beratungsanfrage, behalten Sie den Überblick über Ihren Fall, ändern Sie Ihre Daten und vieles mehr.",
    },
    {
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/09/Legal-Certificate.svg",
      title: "Hilfe vor Ort",
      description:
        "Unsere Mitglieder erhalten kompetente Hilfe durch unseren Außendienst, zum Beispiel bei Wohnungsabnahmen, zu besonders günstigen Preisen.",
      className: styles.article5,
    },
  ];

  return (
    <section className={styles.section7}>
      <div className={styles.div73}>
        <h3 className={styles.h33}>Alle Vorteile auf einen Blick</h3>
        <div className={styles.div74}>
          <div className={styles.div75}>
            <div>
              <div className={styles.div76}>
                {benefits.slice(0, 2).map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    iconSrc={benefit.iconSrc}
                    title={benefit.title}
                    description={benefit.description}
                    className={benefit.className}
                  />
                ))}
              </div>
              <div className={styles.div79}>
                {benefits.slice(2, 4).map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    iconSrc={benefit.iconSrc}
                    title={benefit.title}
                    description={benefit.description}
                    className={benefit.className}
                  />
                ))}
              </div>
              <div className={styles.div82}>
                {benefits.slice(4, 6).map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    iconSrc={benefit.iconSrc}
                    title={benefit.title}
                    description={benefit.description}
                    className={benefit.className}
                  />
                ))}
              </div>
              <div className={styles.div85}>
                {benefits.slice(6, 8).map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    iconSrc={benefit.iconSrc}
                    title={benefit.title}
                    description={benefit.description}
                    className={benefit.className}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className={styles.div88}>
                <button type="button" className={styles.button} />
                <button type="button" className={styles.button3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
