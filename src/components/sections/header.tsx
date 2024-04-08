import { useState } from 'react';
import { LangSwitch } from '@components/minor/lang-switch';
import { NavItem } from '@components/minor/nav-item';

import './header.scss';

export function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const onBurgerClick = () => {
    setBurgerStatus(!burgerStatus);
  };

  return (
    <header className={`header ${burgerStatus ? 'open' : ''}`}>
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
          <LangSwitch />
        </ul>
      </nav>
      <div className={`burger ${burgerStatus ? 'active' : ''}`} onClick={onBurgerClick}>
        <div className="burger__field" id="hamb">
          <span className="bar first" />
          <span className="bar second" />
          <span className="bar third" />
        </div>
      </div>
    </header>
  );
}
