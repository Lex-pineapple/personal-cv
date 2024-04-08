import { LangSwitch } from '@components/minor/lang-switch';
import { NavItem } from '@components/minor/nav-item';

import './header.scss';

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="header__list list list_nav">
          <NavItem innerText="About" link="#about" />
          <span className="header__delim" />
          <NavItem innerText="Education" link="#edu" />
          <span className="header__delim" />
          <NavItem innerText="Projects" link="#projects" />
          <span className="header__delim" />
          <NavItem innerText="Skills" link="#skills" />
          <span className="header__delim" />
          <NavItem innerText="Contacts" link="#contacts" />
        </ul>
      </nav>
      <LangSwitch />
    </header>
  );
}
