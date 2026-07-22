import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type SharedProps = {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: string;
  className?: string;
};

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

type AnchorProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

export default function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props
}: ButtonProps | AnchorProps) {
  const classes = [styles.btn, styles[variant], className].filter(Boolean).join(' ');

  if ('href' in props && props.href) {
    const { href, target, rel, ...anchorProps } = props as AnchorProps;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...anchorProps}
      >
        <span>{children}</span>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
      </a>
    );
  }

  const buttonProps = props as ButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      <span>{children}</span>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
    </button>
  );
}
