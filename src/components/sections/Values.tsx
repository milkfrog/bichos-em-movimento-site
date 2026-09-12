import { values } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './Values.module.css';

export function Values() {
  return (
    <Section id="valores" label={values.heading}>
      <Reveal>
        <h2 className="visually-hidden">{values.heading}</h2>
        <p className={styles.body}>{values.body}</p>
      </Reveal>
    </Section>
  );
}
