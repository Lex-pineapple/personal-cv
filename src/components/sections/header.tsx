import { NavItem } from '@components/minor/navItem';
import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="header__list list list_nav">
          <NavItem innerText="About" />
          <span className="header__delim"></span>
          <NavItem innerText="Education" />
          <span className="header__delim"></span>
          <NavItem innerText="Projects" />
          <span className="header__delim"></span>
          <NavItem innerText="Skills" />
          <span className="header__delim"></span>
          <NavItem innerText="Contacts" />
        </ul>
      </nav>
    </header>
  );
}
