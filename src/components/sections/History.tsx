import { history } from '@/content/site';
import { AccentBar } from '@/components/ui/AccentBar';
import { MediaText } from '@/components/ui/MediaText';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './History.module.css';

export function History() {
  return (
    <Section id="historia" label={history.heading} size="large">
      <MediaText photo={history.photo}>
        <h2 className={styles.heading}>{history.heading}</h2>
        <p className={styles.body}>{history.body}</p>
      </MediaText>

      <Reveal delayIndex={2} className={styles.accent}>
        <AccentBar />
      </Reveal>
    </Section>
  );
}
