import Image from "next/image";
import styles from "./DemoAttribution.module.css";

export default function DemoAttribution() {
  return (
    <aside className={styles.attribution} aria-label="AdamRemix demonstration project">
      <div className={styles.inner}>
        <a className={styles.logo} href="https://adamremix.com" target="_blank" rel="noopener noreferrer" aria-label="Visit AdamRemix (opens in a new tab)">
          <Image src="/AR_Logo.png" alt="AdamRemix" width={614} height={542} unoptimized />
        </a>
        <div className={styles.notice}>
          <strong>Demonstration Project</strong>
          <p>Riverside Window Cleaning is a fictional concept created by AdamRemix to demonstrate website design and interactive functionality. Demo interactions remain in your browser.</p>
        </div>
      </div>
    </aside>
  );
}
