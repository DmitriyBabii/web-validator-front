import Image from "next/image";
import styles from "./styles/InputDesign.module.css";
import AppLink from "../AppLink";

import memberImag1 from "../../images/membership/Analyze-Data-3.svg";
import memberImag2 from "../../images/membership/Filling-Survey-2.svg";
import memberImag3 from "../../images/membership/Beratung.svg";
import memberImag4 from "../../images/membership/Aproval-5.svg";

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
      iconSrc: memberImag1,
      title: "Run a Contrast Test",
      description:
        "You can use our tool to scan your site and identify low-contrast elements quickly",
    },
    {
      iconSrc: memberImag2,
      title: "Review the Results",
      description:
        "We highlight problem areas and explain why they matter for accessibility",
    },
    {
      iconSrc: memberImag3,
      title: "Apply Improvements",
      description:
        "Receive clear guidance on how to resolve contrast issues and improve readability",
    },
    {
      iconSrc: memberImag4,
      title: "Ensure Inclusive Access",
      description:
        "A well-contrasted site supports all users, including those with visual impairments",
    },
  ];

  return (
    <section id="membership-section" className={styles.section5}>
      <div className={styles.div42}>
        <div className={styles.div43}>
          <div className={styles.div44}>
            <div className={styles.div45}>
              <h2 className={styles.h2}>Make Your Website Accessible</h2>
            </div>
            <div className={styles.div46}>
              <div className={styles.div47}>
                <AppLink
                  href="/color"
                  className={styles.a10}
                >
                  Contrast Check
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
