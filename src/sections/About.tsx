import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <p className="section-label">// about me</p>
        <h2 className="section-title">Who I am</h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.lead}>
              Third-year Computer Science student at{' '}
              <span className={styles.accent}>Cal State Fullerton</span>,
              building full-stack applications where clean engineering meets
              real-world problems.
            </p>
            <p className={styles.body}>
              I started with MIPS assembly and Java, moved into systems
              programming with C++, and have been deep in the full-stack
              world ever since — React, Node/Express, MySQL, and more.
              I&apos;m drawn to projects that combine creativity and logic,
              whether that&apos;s a trading analytics dashboard or a
              Discord bot with working Blackjack.
            </p>
            <p className={styles.body}>
              Outside the terminal, you&apos;ll find me at the{' '}
              <span className={styles.accent}>skatepark</span> or the{' '}
              <span className={styles.accent}>climbing gym</span> — both
              scratch the same itch as debugging: identify the problem,
              break it down, try again.
            </p>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Education</span>
              <span className={styles.infoValue}>Cal State Fullerton</span>
              <span className={styles.infoSub}>B.S. Computer Science, 2026</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Focus</span>
              <span className={styles.infoValue}>Full Stack Development</span>
              <span className={styles.infoSub}>React · Node · Databases</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Fullerton, CA</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Interests</span>
              <span className={styles.infoValue}>Skateboarding · Climbing · Trading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
