import { LangSwitch } from '@components/minor/lang-switch';
import { NavItem } from '@components/minor/nav-item';

import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="header__list list list_nav">
          <NavItem innerText="About" />
          <span className="header__delim" />
          <NavItem innerText="Education" />
          <span className="header__delim" />
          <NavItem innerText="Projects" />
          <span className="header__delim" />
          <NavItem innerText="Skills" />
          <span className="header__delim" />
          <NavItem innerText="Contacts" />
        </ul>
      </nav>
      <LangSwitch />
    </header>
  );
}
