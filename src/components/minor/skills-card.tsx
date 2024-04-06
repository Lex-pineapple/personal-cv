import './skills-card.scss';

export function SkillsCard() {
  return (
    <div className="card">
      <div className="card__name">WEB</div>
      <div className="card__meter">
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle--filled" />
        <div className="card__meter-circle" />
        <div className="card__meter-circle" />
      </div>
      <ul className="card__list list">
        <li className="card__item">HTML</li>
        <li className="card__item">JavaScript</li>
      </ul>
    </div>
  );
}
