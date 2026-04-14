'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'Stock Pipeline',
    description:
      'An end-to-end stock data pipeline that ingests, processes, and visualizes financial market data. It fetches real-time stock prices from the Alpha Vantage API, processes the data using PySpark and DuckDB for efficient querying, and serves it through a React frontend. The project is containerized with Docker for easy deployment.',
    tech: ['React', 'Alpha Vantage', 'PySpark', 'DuckDB', 'Docker'],
    github: 'https://github.com/VinnyPham/Stock_Pipeline',
    live: null,
    badge: 'Featured',
    image: '/images/stock-pipeline.png',
    placeholder: { label: 'Stock_Pipeline', color: '#0f1f0f' },
    number: '01',
  },
  {
    title: 'Climbing Performance Tracker',
    description:
      'A full-stack web application built to log and analyze climbing sessions over time. Users can track routes by grade, style, and location, then visualize their progression through charts and session breakdowns. The project was inspired by wanting to bring the same data-driven mindset I apply to coding into my training.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/VinnyPham/Climb_Performance_Analytics',
    live: null,
    badge: null,
    image: '/images/climbing-tracker.png',
    placeholder: { label: 'Climb_Performance_Analytics', color: '#0f1f0f' },
    number: '01',
  },
  {
    title: 'Titan Campus Algorithmic Assistant',
    description:
      'A Python desktop app that visualizes and teaches core computer science algorithms in an interactive way. It demonstrates graph traversal (BFS/DFS), task scheduling, and string pattern searching, all rendered step-by-step so students can watch the algorithm think. Built with Tkinter for the GUI layer.',
    tech: ['Python', 'Tkinter', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/VinnyPham/TitanCampusAlgorithmicAssistant',
    live: null,
    badge: null,
    image: '/images/titan-campus.png',
    placeholder: { label: 'TitanCampusAlgorithmicAssistant', color: '#0f0f1f' },
    number: '02',
  },
  {
    title: 'Sudoku Solver',
    description:
      'A graphical Sudoku solver written in C++ using SDL2 for rendering. The backtracking algorithm solves any valid puzzle and animates each step in real time, you can watch it place numbers, hit a dead end, backtrack, and try again. A fun way to make a classic algorithm visual and tangible.',
    tech: ['C++', 'SDL2', 'Backtracking'],
    github: 'https://github.com/VinnyPham/Sudoku',
    live: null,
    badge: null,
    image: '/images/sudoku.png',
    placeholder: { label: 'Sudoku', color: '#1f1a0a' },
    number: '03',
  },
  {
    title: 'Economy & Minigame Discord Bot',
    description:
      'A fully-featured Discord bot with a persistent virtual economy and playable minigames including Blackjack. Users earn currency, spend it in games, and compete on leaderboards. Actively used by 50+ users across multiple servers. Built around Discord.js\'s event-driven architecture with clean command handling.',
    tech: ['JavaScript', 'Node.js', 'Discord.js'],
    github: 'https://github.com/VinnyPham/Economy-Discord-Bot',
    live: null,
    badge: null,
    image: '/images/discord-bot.png',
    placeholder: { label: 'Economy-Discord-Bot', color: '#12101f' },
    number: '04',
  },
];

function ProjectImage({
  image,
  placeholder,
  title,
}: {
  image: string;
  placeholder: { label: string; color: string };
  title: string;
}) {
  return (
    <div className={styles.imageWrap}>
      <img
        src={image}
        alt={`${title} screenshot`}
        className={styles.projectImg}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          const sibling = e.currentTarget.nextElementSibling as HTMLElement;
          if (sibling) sibling.style.display = 'flex';
        }}
      />
      <div
        className={styles.placeholder}
        style={{ backgroundColor: placeholder.color, display: 'none' }}
      >
        <div className={styles.placeholderTerminal}>
          <div className={styles.placeholderBar}>
            <span className={styles.pd1} />
            <span className={styles.pd2} />
            <span className={styles.pd3} />
          </div>
          <div className={styles.placeholderBody}>
            <span className={styles.placeholderPrompt}>~/dev/</span>
            <span className={styles.placeholderName}>{placeholder.label}</span>
            <span className={styles.placeholderCursor}>▋</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <p className="section-label">// my work</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />

        <div className={styles.list}>
          {PROJECTS.map((project, i) => (
            <div key={project.title} className={styles.projectRow}>
              {/* Number */}
              <span className={styles.projectNumber}>{project.number}</span>

              {/* Image — alternates left/right */}
              <div className={[styles.imageCol, i % 2 === 1 ? styles.imageRight : ''].join(' ')}>
                <ProjectImage
                  image={project.image}
                  placeholder={project.placeholder}
                  title={project.title}
                />
              </div>

              {/* Content */}
              <div className={styles.contentCol}>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.badge && (
                    <span className={styles.badge}>{project.badge}</span>
                  )}
                </div>

                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <Button href={project.github} variant="primary" icon="↗">
                    View Code
                  </Button>
                  {project.live && (
                    <Button href={project.live} variant="outline" icon="→">
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
