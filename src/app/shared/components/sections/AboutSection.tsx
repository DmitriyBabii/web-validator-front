import Image from "next/image";
import styles from "./styles/InputDesign.module.css";
import contentImage from "../../images/content-image.jpg";
import supportSvg from "../../images/Support-Team-2.svg";
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
        <h2 className={styles.h3}>Why Optimizing Your Website Is Crucial</h2>
        <p className={styles.p}>
          Website optimization is not just a trend - it is essential for growth
          and success.
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
                src={contentImage}
                className={styles.img3}
              />
              <div className={styles.div14}>
                <Image
                  width="174"
                  height="173"
                  alt=""
                  decoding="async"
                  fetchPriority="low"
                  src={supportSvg}
                  className={styles.img4}
                />
              </div>
            </div>
            <div>
              <AppLink href={"/#membership-section"} className={styles.a5}>
                Improve Your Site
              </AppLink>
            </div>
          </div>
          <div className={styles.div15}>
            <div className={styles.div16}>
              <p className={styles.p2}>
                In today&apos;s digital world, your website is often the first
                impression potential customers have of your brand. Optimizing
                your site ensures faster load times, a better user experience,
                higher search engine rankings, and ultimately, increased
                conversions. Without optimization, even the most beautifully
                designed website can underperform and drive users away.
              </p>
              <p className={styles.p2}>
                Here&apos;s why optimizing your website is essential:
              </p>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Enhances loading speed - Engages visitors and decreases bounce
                  rate.
                </li>
                <li className={styles.li}>
                  Enhances SEO performance - Helps your site achieve a higher
                  ranking on Google and other search engines.
                </li>
                <li className={styles.li2}>
                  Improves user experience - Makes navigation more manageable
                  and more enjoyable.
                </li>
                <li className={styles.li2}>
                  Increased conversion rates - An optimized site results in more
                  sales or sign-ups.
                </li>
                <li className={styles.li2}>
                  Ensures mobile responsiveness - The optimized design adapts to
                  all screen sizes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
