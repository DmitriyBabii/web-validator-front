import Image from "next/image";
import styles from "./styles/InputDesign.module.css";
import AppLink from "../AppLink";

export default function AboutSection() {
  return (
    <section className={styles.section2}>
      <div className={styles.div9}>
        <Image
          width="1008"
          height="648"
          alt=""
          decoding="async"
          fetchPriority="low"
          src="https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Bildschirm_foto-2023-04-20-um-15-1-2.jpg"
          className={styles.img2}
        />
      </div>
      <div className={styles.div10}>
        <h3 className={styles.h3}>Das ist der Mieterverein zu Hamburg </h3>
        <p className={styles.p}>
          Wir vertreten die Interessen von Hamburgs Mieter:innen{" "}
        </p>
        <div className={styles.div11}>
          <div className={styles.div12}>
            <div className={styles.div13}>
              <Image
                width={1000}
                height={324}
                alt=""
                decoding="async"
                fetchPriority="low"
                src="https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Bildschirm_foto-2023-04-20-um-15-1-2.jpg"
                className={styles.img3}
              />
              <div className={styles.div14}>
                <Image
                  width="174"
                  height="173"
                  alt=""
                  decoding="async"
                  fetchPriority="low"
                  src="https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Support-Team-2.svg"
                  className={styles.img4}
                />
              </div>
            </div>
            <div>
              <AppLink
                href="https://www.mieterverein-hamburg.de/ueber-uns/"
                className={styles.a5}
              >
                Mehr zum Mieterverein
              </AppLink>
            </div>
          </div>
          <div className={styles.div15}>
            <div className={styles.div16}>
              <p className={styles.p2}>
                Der Mieterverein zu Hamburg ist mit 79.000 Mitgliedshaushalten
                der bei weitem größte Mieterverein der Hansestadt. Die
                Hauptaufgaben des Mietervereins zu Hamburg sind:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  die Vertretung der wohnungspolitischen Belange der Hamburger
                  Mieter:innen
                </li>
                <li className={styles.li}>
                  die Interessenvertretung seiner Mitglieder in Miet- und
                  Wohnungsangelegenheiten
                </li>
                <li className={styles.li2}>
                  das allgemeine Informieren der Mieter:innen zum Mieten und
                  Wohnen in Hamburg
                </li>
              </ul>
              <p className={styles.p3}>
                <span>
                  Dem einzelnen Mitglied stehen wir bei allen rechtlichen Fragen
                  rund um die Mietwohnung mit Rat und Tat zur Seite. Die
                  Beratung erfolgt durch Juristen, die auf das Mietrecht
                  spezialisiert sind. Ergänzend sind alle Mitglieder durch eine
                  Rechtsschutzversicherung für den Fall von Mietprozessen
                  abgesichert.
                </span>
                <br className={styles.br} />
                <span>
                  Vorstandsvorsitzender ist Rechtsanwalt Dr. Rolf Bosse, der
                  auch zugleich Geschäftsführer ist. Zudem gehört Dr. Rolf Bosse
                  dem Beirat des Deutschen Mieterbundes an. Stellvertretende
                  Vorsitzende ist Rechtsanwältin Marielle Eifler.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
