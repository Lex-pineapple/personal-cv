interface IEducationItemProps {
  active: boolean;
  year: number;
  place: string;
  subtext: JSX.Element;
}
export function EducationItem(props: IEducationItemProps) {
  return (
    <div className="edu__item">
      <span className={`edu__symbol${props.active ? ' active' : ''} symbol symbol_circle`} />
      <span className="edu__symbol symbol symbol_line" />
      <p className="edu__text text text_date">{props.year}</p>
      <p className="edu__text text text_name">{props.place}</p>
      <ul className="edu__text text text_subtext">{props.subtext}</ul>
      <button type="button" className="edu__button button">
        Certificate
      </button>
    </div>
  );
}
