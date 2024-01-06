import { NavItem } from '@components/navItem';

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="header__list list list_nav">
          <NavItem />
        </ul>
      </nav>
    </header>
  );
}
