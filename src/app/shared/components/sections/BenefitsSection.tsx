import Image from "next/image";
import styles from "./styles/InputDesign.module.css";

import s1 from "../../images/benefits/s1.svg";
import s2 from "../../images/benefits/s2.svg";
import s3 from "../../images/benefits/s3.svg";
import s4 from "../../images/benefits/s4.svg";
import s5 from "../../images/benefits/s5.svg";
import s6 from "../../images/benefits/s6.svg";

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
      iconSrc: s1,
      title: "Instant Insights",
      description:
        "Get immediate feedback on your website's performance, structure, and accessibility right after your first scan.",
    },
    {
      iconSrc: s2,
      title: "Trusted Expertise",
      description:
        "Built by a team of web optimization professionals with deep knowledge in frontend, UX, and technical audits.",
      className: styles.article2,
    },
    {
      iconSrc: s3,
      title: "Performance-First Approach",
      description:
        "We help you identify and resolve the issues that slow down your site, improving speed, SEO, and user experience.",
    },
    {
      iconSrc: s4,
      title: "Personalized Support",
      description:
        "Whether you're a freelancer, an agency, or an enterprise, our team is here to guide you with tailored recommendations.",
      className: styles.article3,
    },
    {
      iconSrc: s5,
      title: "Free Expert Tools",
      description:
        "Use our validation, contrast, and SEO checkers designed to help you meet modern web standards effortlessly.",
    },
    {
      iconSrc: s6,
      title: "Accessible for Everyone",
      description:
        "Our platform is free to try, and we offer custom pricing for startups, students, and nonprofits. Just reach out!",
      className: styles.article4,
    },
  ];

  return (
    <section className={styles.section7}>
      <div className={styles.div73}>
        <h3 className={styles.h33}>All Benefits at a Glance</h3>
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
