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
              with a strong interest in building software that is both 
              practical and data-driven.
            </p>
            <p className={styles.body}>
              Through projects like a climbing performance tracker and a 
              Discord bot used by 50+ users, I&apos;ve gained experience designing 
              scalable features, working with databases, and solving real-world 
              problems through code. I&apos;m particularly interested in the intersection 
              of software engineering and data analytics, where I can build tools 
              that not only function well but also provide valuable insights.
            </p>
            <p className={styles.body}>
              Outside of programming, I enjoy{' '}
              <span className={styles.accent}>climbing</span> and{' '}
              <span className={styles.accent}>skateboarding</span>, both
              of which challenge me to think creatively and stay persistent 
              when solving problems.
            </p>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Education</span>
              <span className={styles.infoValue}>Cal State Fullerton</span>
              <span className={styles.infoSub}>B.S. Computer Science, 2027</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Focus</span>
              <span className={styles.infoValue}>Full Stack | Data Analyst</span>
              <span className={styles.infoSub}>React · Node · MySQL</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Irvine, CA</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Interests</span>
              <span className={styles.infoValue}>Climbing · Trading · Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
