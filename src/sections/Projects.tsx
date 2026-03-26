import Card from '@/components/Card';
import Button from '@/components/Button';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'SwingEdge',
    description:
      'Full-stack swing trading analytics platform with a React dashboard, trade journal, watchlist, and risk calculator. Built on Node/Express + MySQL with plans for AWS deployment via ECR, RDS, and EC2.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'AWS'],
    github: 'https://github.com',
    live: null,
    featured: true,
    badge: 'Featured',
  },
  {
    title: 'Climbing Performance Tracker',
    description:
      'Full-stack app for tracking climbing sessions, grades, and progress over time. Reflects the analytical side of problem-solving applied to physical training.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com',
    live: null,
    featured: false,
    badge: null,
  },
  {
    title: 'Economy & Minigame Discord Bot',
    description:
      'Feature-rich Discord bot with a virtual economy, Blackjack, and other minigames. Actively used by 50+ users. Built around event-driven architecture.',
    tech: ['JavaScript', 'Node.js', 'Discord.js'],
    github: 'https://github.com',
    live: null,
    featured: false,
    badge: 'Live',
  },
  {
    title: 'Sudoku Solver',
    description:
      'Graphical Sudoku solver using SDL2 with a backtracking algorithm. Renders the solving process step-by-step in real time.',
    tech: ['C++', 'SDL2'],
    github: 'https://github.com',
    live: null,
    featured: false,
    badge: null,
  },
  {
    title: 'BORG Interpreter',
    description:
      'Custom programming language interpreter in C++ using a hash table with chaining for variable declarations and command parsing.',
    tech: ['C++', 'Data Structures'],
    github: 'https://github.com',
    live: null,
    featured: false,
    badge: null,
  },
  {
    title: 'Ideal Gas Law Calculator',
    description:
      'MIPS assembly implementation of PV=nRT, showcasing low-level register management, I/O syscalls, and arithmetic operations.',
    tech: ['MIPS Assembly'],
    github: 'https://github.com',
    live: null,
    featured: false,
    badge: null,
  },
];

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className="section-label">// my work</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />

        {/* Featured */}
        <div className={styles.featured}>
          <Card accent className={styles.featuredCard}>
            <div className={styles.featuredInner}>
              <div className={styles.featuredContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.featuredBadge}>Featured Project</span>
                </div>
                <h3 className={styles.projectTitle}>{featured.title}</h3>
                <p className={styles.projectDesc}>{featured.description}</p>
                <div className={styles.techStack}>
                  {featured.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <Button href={featured.github} variant="primary" icon="↗">
                    View Code
                  </Button>
                </div>
              </div>
              <div className={styles.featuredVisual}>
                <div className={styles.mockTerminal}>
                  <div className={styles.terminalBar}>
                    <span className={styles.dot1} />
                    <span className={styles.dot2} />
                    <span className={styles.dot3} />
                    <span className={styles.termTitle}>SwingEdge — dashboard.tsx</span>
                  </div>
                  <div className={styles.terminalBody}>
                    <p><span className={styles.c1}>import</span> <span className={styles.c2}>&#123; Dashboard &#125;</span> <span className={styles.c1}>from</span> <span className={styles.c3}>&apos;./components&apos;</span></p>
                    <p><span className={styles.c1}>import</span> <span className="c2">&#123; useTrades &#125;</span> <span className={styles.c1}>from</span> <span className={styles.c3}>&apos;./hooks&apos;</span></p>
                    <br />
                    <p><span className={styles.c2}>const</span> <span className={styles.c4}>App</span> = () =&gt; &#123;</p>
                    <p className={styles.indent}><span className={styles.c2}>const</span> &#123; trades, risk &#125; = <span className={styles.c4}>useTrades</span>()</p>
                    <p className={styles.indent}><span className={styles.c1}>return</span> &lt;<span className={styles.c5}>Dashboard</span> trades=&#123;trades&#125; /&gt;</p>
                    <p>&#125;</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {rest.map((project) => (
            <Card key={project.title} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <svg className={styles.folderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="Live">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.badge && <span className={styles.badge}>{project.badge}</span>}
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
