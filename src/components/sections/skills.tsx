import { SkillsCard } from '@components/minor/skillsCard';

export function Skills() {
  return (
    <div className="skills">
      <div className="skills__type-selector">
        <div className="item_selectable_active">Hard Skills</div>
        <div className="item_selectable">Spft Skills</div>
      </div>
      <SkillsCard />
    </div>
  );
}
