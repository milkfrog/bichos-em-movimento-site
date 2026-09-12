import { services } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './Services.module.css';

export function Services() {
  return (
    <Section id="servicos" label="Serviços" size="large">
      <Reveal className={styles.intro}>
        <p className={styles.eyebrow}>{services.eyebrow}</p>
        <h2 className={styles.heading}>{services.heading}</h2>
      </Reveal>

      <ol className={styles.stages}>
        {services.stages.map((stage, index) => (
          <li key={stage.step}>
            <Reveal delayIndex={index + 1} className={styles.stage}>
              <p className={styles.step}>{stage.step}</p>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageBody}>{stage.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delayIndex={4}>
        <p className={styles.closing}>{services.closing}</p>
      </Reveal>
    </Section>
  );
}
