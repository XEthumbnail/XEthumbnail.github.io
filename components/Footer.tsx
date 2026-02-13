import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>X</span> Xthumbnail
        </Link>
        <p className={styles.copy}>&copy; 2024 Xthumbnail Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
