import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
}

export default function Card({ children, className = '', hover = true, accent = false }: CardProps) {
  const classes = [
    styles.card,
    hover ? styles.hoverable : '',
    accent ? styles.accent : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
