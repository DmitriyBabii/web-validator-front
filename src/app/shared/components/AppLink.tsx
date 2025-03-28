import styles from "./AppLink.module.css";
import Link from "next/link";

export default function AppLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string | undefined;
}) {
  return (
    <Link className={`${className} ${styles.root}`} href={href}>
      {children}
    </Link>
  );
}
