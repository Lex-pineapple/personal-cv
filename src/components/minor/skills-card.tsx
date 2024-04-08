import './skills-card.scss';

type SkillsCardProps = {
  filled: number;
  name: string;
  inner: string[];
};

export function SkillsCard(props: SkillsCardProps) {
  const createCircles = () => {
    const circles = [];

    for (let i = 0; i < 9; i++) {
      circles.push(
        <div
          className={`card__meter-circle ${i <= props.filled ? 'card__meter-circle--filled' : ''}`}
        />
      );
    }

    return circles;
  };

  return (
    <div className="card">
      <div className="card__name">{props.name}</div>
      <div className="card__meter">
        {createCircles()}
        {/* <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle card__meter-circle--filled" />
        <div className="card__meter-circle" />
        <div className="card__meter-circle" /> */}
      </div>
      <ul className="card__list list">
        {props.inner.map((item) => (
          <li className="card__item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
