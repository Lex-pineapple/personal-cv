import { SkillsCard } from '@components/minor/skillsCard';
import './Skills.scss';

export function Skills() {
  return (
    <div className="skills">
      <div className="skills_container">
        <h2 className="skills__h2 h2">Skills</h2>
        <div className="skills__type-selector">
          <div className="item_selectable active">Hard Skills</div>
          <div className="item_selectable">Soft Skills</div>
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
