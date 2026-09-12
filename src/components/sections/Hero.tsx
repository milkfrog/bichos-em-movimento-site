import { brand, hero } from '@/content/site';
import { Figure } from '@/components/ui/Figure';
import { Section } from '@/components/ui/Section';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <Section id="inicio" label="Início" bleed className={styles.section}>
      <div className={['container', styles.masthead].join(' ')}>
        <img
          src={brand.logo.src}
          alt={brand.logo.alt}
          className={styles.logo}
          width={214}
          height={207}
        />

        <div className={styles.wordmark}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
        </div>
      </div>

      <Figure photo={hero.photo} ratio="hero" priority className={styles.photo} />
    </Section>
  );
}
