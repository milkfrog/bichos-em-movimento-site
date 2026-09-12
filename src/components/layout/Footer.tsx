import { brand } from '@/content/site';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={['container', styles.inner].join(' ')}>
        <div className={styles.identity}>
          <img src={brand.logo.src} alt="" className={styles.logo} width={44} height={44} />
          <div>
            <p className={styles.name}>{brand.name}</p>
            <p className={styles.tagline}>{brand.tagline}</p>
          </div>
        </div>

        <p className={styles.copyright}>
          © {year} {brand.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
