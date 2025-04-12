import Image from "next/image";
import styles from "./not-found.module.css";

import notFoundImage from "./404.svg";

export default function NotFound() {
  return (
    <main className={styles.root}>
      <div>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.subtitle}>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Image src={notFoundImage} alt="Not Found" className={styles.image} />
    </main>
  );
}
