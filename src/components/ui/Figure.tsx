import type { Photo } from '@/content/site';
import styles from './Figure.module.css';

interface FigureProps {
  photo: Photo;
  ratio?: 'portrait' | 'gallery' | 'hero' | 'square';
  priority?: boolean;
  className?: string;
}

export function Figure({ photo, ratio = 'portrait', priority = false, className }: FigureProps) {
  return (
    <div className={[styles.frame, styles[ratio], className].filter(Boolean).join(' ')}>
      <img
        src={photo.src}
        alt={photo.alt}
        className={styles.image}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
}
