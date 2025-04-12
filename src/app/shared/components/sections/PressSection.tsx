import Image from "next/image";
import styles from "./styles/InputDesign.module.css";
import AppLink from "../AppLink";

import pressImage from "../../images/press/press.jpg";

export default function PressSection() {
  return (
    <section id="press-section" className={styles.section6}>
      <div className={styles.div68}>
        <div className={styles.div69}>
          <div className={styles.div70}>
            <Image
              width="1212"
              height="996"
              alt=""
              decoding="async"
              fetchPriority="low"
              src={pressImage}
              className={styles.img13}
            />
          </div>
          <div className={styles.div71}>
            <div className={styles.div72}>
              <h4 className={styles.h42}>Why Website Validation Matters</h4>
              <p className={styles.p17}>
                Clean code. Strong performance. Better results.
              </p>
              <p className={styles.p18}>
                Modern websites aren&apos;t just about design - they must be
                built on solid, error-free foundations. HTML and CSS validation
                ensures your site runs smoothly across all browsers, meets web
                standards, and is easier to maintain and scale. Incorrect or
                outdated code can disrupt layouts, slow down performance, and
                negatively impact your SEO. By validating your website, you
                improve reliability, accessibility, and future-proof your
                digital presence.
              </p>
            </div>
            <div>
              <AppLink
                href="/validate"
                className={styles.a11}
              >
                Check Your Site Now
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
