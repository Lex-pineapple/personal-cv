interface INavItemProps {
  innerText: string;
  link: string;
}

export function NavItem(props: INavItemProps) {
  return (
    <li className="header__item nav__item">
      <a href={props.link} className="header__link link">
        {props.innerText}
      </a>
    </li>
  );
}
