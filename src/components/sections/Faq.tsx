import { faq } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './Faq.module.css';

export function Faq() {
  return (
    <Section id="duvidas" label={faq.heading} size="large">
      <Reveal>
        <h2 className={styles.heading}>{faq.heading}</h2>
      </Reveal>

      <dl className={styles.list}>
        {faq.items.map((item, index) => (
          <Reveal key={item.id} delayIndex={index + 1} className={styles.item}>
            <dt>
              <h3 className={styles.question}>{item.question}</h3>
            </dt>
            <dd className={styles.answer}>
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
