import { SkillsCard } from '@components/minor/skills-card';

import './skills.scss';

export function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        <div className="skills__h2 h2">Skills</div>
        <div className="skills__type-selector type-selector">
          <div className="type-selector__item type-selector__item--active">Hard Skills</div>
          <div className="type-selector__item type-selector__item--active">Soft Skills</div>
        </div>
        <div className="skills__cards">
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
        </div>
      </div>
    </div>
  );
}
