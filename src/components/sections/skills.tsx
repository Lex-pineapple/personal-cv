import { SkillsCard } from '@components/minor/skillsCard';
import './Skills.scss';

export function Skills() {
  return (
    <div className="skills">
      <div className="skills__type-selector">
        <div className="item_selectable active">Hard Skills</div>
        <div className="item_selectable">Soft Skills</div>
      </div>
      <SkillsCard />
    </div>
  );
}
