import React, { useState } from 'react';
import { SkillsCard } from '@components/minor/skills-card';

import './skills.scss';

export function Skills() {
  const [isHard, setIsHard] = useState(true);

  const hardSkillsSect = (
    <React.Fragment>
      <SkillsCard
        filled={7}
        name="WEB"
        inner={['HTML', 'CSS, SASS', 'Javascript, Typescript', 'React']}
      />
      <SkillsCard
        filled={4}
        name="Node.js"
        inner={[
          'Node.js Framework',
          'Express.js, Nest.js',
          'RESTful API',
          'Prisma, PostgreSQL',
          'Docker',
        ]}
      />
      <SkillsCard
        filled={5}
        name="Best practices"
        inner={['Testing (Jest, Mocha)', 'Version control (Git)', 'Code optimization']}
      />
      <SkillsCard
        filled={5}
        name="Instruments"
        inner={['Webpack, Vite', 'Design (Adobe Illustrator, Photoshop, InDesign']}
      />
    </React.Fragment>
  );

  const softSkillsSect = (
    <SkillsCard
      filled={0}
      name="Soft skills"
      inner={[
        'Высокая адаптивность',
        'Целеустремленность',
        'Коммуникабельность, умение работать в комманде',
      ]}
    />
  );

  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__h2 h2">Навыки</div>
        <div className="skills__type-selector type-selector">
          <button
            type="button"
            className={`type-selector__item ${isHard ? 'type-selector__item--active' : ''}`}
            onClick={() => {
              setIsHard(true);
            }}
          >
            Hard Skills
          </button>
          <button
            type="button"
            className={`type-selector__item ${isHard ? '' : 'type-selector__item--active'}`}
            onClick={() => {
              setIsHard(false);
            }}
          >
            Soft Skills
          </button>
        </div>
        <div className="skills__cards">{isHard ? hardSkillsSect : softSkillsSect}</div>
      </div>
    </div>
  );
}
