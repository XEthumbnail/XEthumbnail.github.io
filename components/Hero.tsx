import Link from 'next/link';
import Gallery from './Gallery';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.badge}>
          🎨 YouTube Thumbnail Specialist
        </div>
        <h1 className={styles.title}>
          Thumbnails That <span className="gradient-text">Get Clicked</span>
        </h1>
        <p className={styles.subtitle}>
          I design good minimalist thumbnails that boost CTR. Clean, bold, and designed to convert viewers into subscribers.
        </p>
        <div className={styles.buttons}>
          <Link href="/pricing" className="btn btn-primary">Get First Free</Link>
          <Link href="/works" className="btn btn-outline">View Portfolio</Link>
        </div>
        
        <Gallery />
      </div>
    </section>
  );
}
