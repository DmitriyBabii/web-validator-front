import AppLink from "../AppLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles.div}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <AppLink
                href={"/"}
                className={styles.a}
              >
                IncluMate
              </AppLink>
              <address className={styles.address}>
                <span>
                  Feel free to reach out to us for any inquiries or support:
                </span>
              </address>
              <div className={styles.div4}>
                <p className={styles.p}>
                  <a href="tel:095-111-11-11" className={styles.a2}>
                    <span>Phone: </span>
                    095-111-11-11
                  </a>
                  <br className={styles.br} />
                  <a href="mailto:email@example.com" className={styles.a2}>
                    <span>Email: </span>
                    email@example.com
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.div5}>
              <div className={styles.div6}>
                <AppLink className={styles.h5} href={"/#hero-section"}>Optimize Now</AppLink>
              </div>
            </div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <AppLink className={styles.h5} href={"/#press-section"}>Check Site</AppLink>
              </div>
            </div>
            <div className={styles.div9}>
              <div className={styles.div10}>
                <AppLink className={styles.h5} href={"/#membership-section"}>Check Contrast</AppLink>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div11}>
          <div className={styles.div12}>
            <div className={styles.div13}>
              <p className={styles.p2}>
                Copyright © 2025 InkluMate. All rights reserved
              </p>
              <div className={styles.div15}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#ffffff" d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/></svg>`,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none"><g clip-path="url(#clip0_1_2)"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="#ffffff"/></g><defs><clipPath id="clip0_1_2"><rect width="1200" height="1227" fill="white"/></clipPath></defs></svg>`,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<?xml version="1.0" ?><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/></svg>`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
