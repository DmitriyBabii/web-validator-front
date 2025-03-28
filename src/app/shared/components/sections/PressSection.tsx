import Image from "next/image";
import styles from "./styles/InputDesign.module.css";

export default function PressSection() {
  return (
    <section className={styles.section6}>
      <div className={styles.div68}>
        <div className={styles.div69}>
          <div className={styles.div70}>
            <Image
              width="1212"
              height="996"
              alt=""
              decoding="async"
              fetchPriority="low"
              src="https://www.mieterverein-hamburg.de/wp-content/uploads/2023/08/Bildschirm_foto-2023-04-20-um-14.02-4.jpg"
              className={styles.img13}
            />
          </div>
          <div className={styles.div71}>
            <div className={styles.div72}>
              <h4 className={styles.h42}>Unser aktueller Pressespiegel</h4>
              <p className={styles.p17}>
                Der Mieterverein zu Hamburg in den Medien
              </p>
              <p className={styles.p18}>
                Wohnraummangel, Indexmiete und steigende Heizkosten – die Themen
                Wohnen und Mieten sind omnipräsent in den Medien. Als
                Interessenvertretung von Hamburgs Mieter:innen beteiligt sich
                der Mieterverein zu Hamburg an der öffentlichen Diskussion und
                wird von vielen regionalen und überregionalen Medien zitiert. In
                unserem Pressespiegel finden Sie eine Auswahl der Berichte und
                Beiträge.
              </p>
            </div>
            <div>
              <a
                href="https://www.mieterverein-hamburg.de/pressespiegel/"
                className={styles.a11}
              >
                Zum Pressespiegel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
