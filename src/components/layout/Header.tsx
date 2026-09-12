import { useCallback, useEffect, useId, useState } from 'react';
import { navItems } from '@/content/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import styles from './Header.module.css';

const SECTION_IDS = navItems.map((item) => item.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.toggleIcon} aria-hidden="true">
            <span className={menuOpen ? styles.barTopOpen : styles.barTop} />
            <span className={menuOpen ? styles.barMidOpen : styles.barMid} />
            <span className={menuOpen ? styles.barBottomOpen : styles.barBottom} />
          </span>
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>

        <ul
          id={menuId}
          role="list"
          className={[styles.list, menuOpen && styles.listOpen].filter(Boolean).join(' ')}
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className={styles.item}>
                <a
                  href={`#${item.id}`}
                  className={[styles.link, isActive && styles.linkActive]
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
