import type { ReactNode } from 'react';
import type { Photo } from '@/content/site';
import { Figure } from './Figure';
import { Reveal } from './Reveal';
import styles from './MediaText.module.css';

interface MediaTextProps {
  photo: Photo;
  children: ReactNode;
  mediaRight?: boolean;
}

export function MediaText({ photo, children, mediaRight = false }: MediaTextProps) {
  return (
    <div className={[styles.grid, mediaRight && styles.mediaRight].filter(Boolean).join(' ')}>
      <Reveal className={styles.media}>
        <Figure photo={photo} ratio="portrait" />
      </Reveal>

      <Reveal className={styles.copy} delayIndex={1}>
        {children}
      </Reveal>
    </div>
  );
}
