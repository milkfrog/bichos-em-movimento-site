import { mission } from '@/content/site';
import { MediaText } from '@/components/ui/MediaText';
import { Section } from '@/components/ui/Section';
import styles from './Mission.module.css';

export function Mission() {
  return (
    <Section id="missao" label={mission.heading} size="large">
      <MediaText photo={mission.photo} mediaRight>
        <h2 className="visually-hidden">{mission.heading}</h2>
        <p className={styles.body}>{mission.body}</p>
      </MediaText>
    </Section>
  );
}
