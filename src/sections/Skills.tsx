import styles from './Skills.module.css';

const SKILLS = [
  { name: 'C++', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
  { name: 'Tableau', category: 'Tools' },
  { name: 'REST APIs', category: 'Concept' },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Systems', 'Database', 'DevOps', 'Tools', 'Language', 'Concept'];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <p className="section-label">// tech stack</p>
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillCategory}>{skill.category}</span>
            </div>
          ))}
        </div>

        <div className={styles.proficiencies}>
          <div className={styles.profGroup}>
            <span className={styles.profLabel}>Advanced</span>
            <span className={styles.profItems}>C++, JavaScript, React, Node.js, Express.js, MySQL, Python, Tableau, Excel</span>
          </div>
          <div className={styles.profGroup}>
            <span className={styles.profLabel}>Intermediate</span>
            <span className={styles.profItems}>TypeScript, Docker, AWS (ECR/RDS/EC2), Java</span>
          </div>
          <div className={styles.profGroup}>
            <span className={styles.profLabel}>Familiar</span>
            <span className={styles.profItems}>MIPS Assembly, Git CI/CD, MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
