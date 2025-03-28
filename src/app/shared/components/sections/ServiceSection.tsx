"use client";
import styles from "./styles/InputDesign.module.css";
import Image from "next/image";

function ServiceCard({
  href,
  iconSrc,
  title,
  description,
}: {
  href: string;
  iconSrc: string;
  title: string;
  description: string;
}) {
  return (
    <a href={href} className={styles.a6}>
      <div className={styles.div18}>
        <div className={styles.div19}>
          <Image
            width="128"
            height="128"
            alt=""
            decoding="async"
            fetchPriority="low"
            src={iconSrc}
            className={styles.img5}
          />
        </div>
        <h5 className={styles.h5}>{title}</h5>
        <p className={styles.p4}>{description}</p>
        <span className={styles.span}>
          <div className={styles.svg}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="66" height="10" viewBox="0 0 66 10" fill="none" xmlns="http://www.w3.org/2000/svg" style=" border-color: rgb(1, 69, 172); color: rgb(1, 69, 172); cursor: pointer; display: inline; fill: none; height: 10px; margin-top: auto; outline-color: rgb(1, 69, 172); overflow-clip-margin: content-box; overflow-x: hidden; overflow-y: hidden; text-align: center; text-decoration-color: rgb(1, 69, 172); text-emphasis-color: rgb(1, 69, 172); transition-duration: 0.3s; transition-property: margin-left; transition-timing-function: linear; width: 66px;"> <path d="M65 5.25H1" stroke="#0145AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M61.25 1.5L65 5.25L61.25 9" stroke="#0145AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
              }}
            />
          </div>
        </span>
      </div>
    </a>
  );
}

export default function ServicesSection() {
  const services = [
    {
      href: "https://www.mieterverein-hamburg.de/mietwissen-a-z/",
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/07/Knowledge-Base-2.svg",
      title: "Mietwissen A-Z",
      description:
        "Unsere erste Hilfe für Sie: Hier finden Sie alles von A bis Z",
    },
    {
      href: "https://www.mieterverein-hamburg.de/ueber-uns/#unsere-philosophie",
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/07/Approval-4.svg",
      title: "Unsere Philosophie",
      description: "Wer wir sind und was uns antreibt",
    },
    {
      href: "https://www.mieterverein-hamburg.de/mediathek/",
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/07/Documents-3.svg",
      title: "Unsere Mediathek",
      description: "Pressemitteilungen, Urteile, Meldungen und vieles mehr",
    },
    {
      href: "https://www.mieterverein-hamburg.de/mitglied-werden/",
      iconSrc:
        "https://www.mieterverein-hamburg.de/wp-content/uploads/2023/07/Team-Building-2.svg",
      title: "Mitglied werden",
      description: "Und vollen Rechtsschutz genießen",
    },
  ];

  return (
    <section className={styles.section3}>
      <div className={styles.box}>
        <div className={styles.div17}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              href={service.href}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
