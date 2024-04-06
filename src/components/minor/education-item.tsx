interface IEducationItemProps {
  active: boolean;
}
export function EducationItem(props: IEducationItemProps) {
  return (
    <div className="edu__item">
      <span className={`edu__symbol${props.active ? ' active' : ''} symbol symbol_circle`} />
      <span className="edu__symbol symbol symbol_line" />
      <p className="edu__text text text_date">2019</p>
      <p className="edu__text text text_name">Place #1</p>
      <p className="edu__text text text_subtext">Subtext</p>
      <button type="button" className="edu__button button">
        Certificate
      </button>
    </div>
  );
}
