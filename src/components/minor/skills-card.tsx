export function SkillsCard() {
  return (
    <div className="skills__card">
      <div className="card__name">WEB</div>
      <div className="card__meter">
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle filled" />
        <div className="card__meter_circle" />
        <div className="card__meter_circle" />
      </div>
      <ul className="card__list list">
        <li className="card__item">HTML</li>
        <li className="card__item">JavaScript</li>
      </ul>
    </div>
  );
}
