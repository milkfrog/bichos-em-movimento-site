import { team } from '@/content/site';
import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import styles from './Team.module.css';

export function Team() {
  return (
    <Section id="equipe" label={team.heading} size="large">
      <Reveal>
        <h2 className={styles.heading}>{team.heading}</h2>
      </Reveal>

      <ul role="list" className={styles.grid}>
        {team.members.map((member, index) => (
          <li key={member.id}>
            <Reveal delayIndex={index + 1} className={styles.card}>
              {member.photo ? (
                <Figure photo={member.photo} ratio="square" className={styles.portrait} />
              ) : null}

              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.crmv}>{member.crmv}</p>
              <p className={styles.role}>{member.role}</p>

              {member.bio.map((paragraph) => (
                <p key={paragraph} className={styles.bio}>
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
