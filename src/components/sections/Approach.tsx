import { approach } from '@/content/site';
import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './Approach.module.css';

export function Approach() {
  return (
    <Section id="abordagem" label={approach.heading}>
      <h2 className="visually-hidden">{approach.heading}</h2>

      <ul role="list" className={styles.gallery}>
        {approach.gallery.map((photo, index) => (
          <li key={photo.src}>
            <Reveal delayIndex={index}>
              <Figure photo={photo} ratio="gallery" />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delayIndex={3}>
        <p className={styles.caption}>{approach.caption}</p>
      </Reveal>
    </Section>
  );
}
