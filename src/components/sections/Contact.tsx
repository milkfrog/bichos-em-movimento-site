import { contact } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contato" label={contact.heading} tone="white" size="large">
      <Reveal>
        <h2 className={styles.heading}>{contact.heading}</h2>
      </Reveal>

      <ul role="list" className={styles.grid}>
        {contact.channels.map((channel, index) => (
          <li key={channel.id}>
            <Reveal delayIndex={index + 1} className={styles.card}>
              <p className={styles.label}>{channel.label}</p>

              <ul role="list" className={styles.entries}>
                {channel.entries.map((entry) => (
                  <li key={entry.href}>
                    <a
                      className={styles.value}
                      href={entry.href}
                      {...(entry.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
