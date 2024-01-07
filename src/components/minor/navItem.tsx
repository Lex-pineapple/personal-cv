interface INavItemProps {
  innerText: string;
}

export function NavItem(props: INavItemProps) {
  return (
    <li className="header__item nav__item">
      <a href="" className="header__link link">
        {props.innerText}
      </a>
    </li>
  );
}
