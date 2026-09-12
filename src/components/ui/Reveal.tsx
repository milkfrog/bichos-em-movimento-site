import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delayIndex?: number;
  className?: string;
}

export function Reveal({ children, as: Tag = 'div', delayIndex = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, inView && styles.visible, className].filter(Boolean).join(' ')}
      style={{ '--delay-index': delayIndex } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
