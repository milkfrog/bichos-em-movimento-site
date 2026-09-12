import type { ReactNode } from 'react';
import type { SectionId } from '@/content/site';
import styles from './Section.module.css';

interface SectionProps {
  id: SectionId;
  label: string;
  children: ReactNode;
  tone?: 'cream' | 'white';
  size?: 'default' | 'large';
  bleed?: boolean;
  className?: string;
}

export function Section({
  id,
  label,
  children,
  tone = 'cream',
  size = 'default',
  bleed = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={[styles.section, styles[tone], styles[size], className].filter(Boolean).join(' ')}
    >
      {bleed ? children : <div className="container">{children}</div>}
    </section>
  );
}
