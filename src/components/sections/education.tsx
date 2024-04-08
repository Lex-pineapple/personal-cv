import React from 'react';
import { EducationItem } from '@components/minor/education-item';

import './education.scss';

export function Education() {
  return (
    <div className="edu" id="edu">
      <div className="edu_container">
        <h2 className="edu__h2 h2">Обучение</h2>
        <div className="edu__list list">
          <EducationItem
            active={true}
            year={2022}
            place="JavaScript/Front-end. Pre-School. Stage 0"
            subtext={
              <React.Fragment>
                <li>Получила основы HTML, CSS и JavaScript</li>
                <li>Научилась верстать веб-страницы и делать их интерактивными</li>
              </React.Fragment>
            }
          />
          <EducationItem
            active={true}
            year={2023}
            place="JavaScript/Front-end Development. Stages 1 & 2"
            subtext={
              <React.Fragment>
                <li>Изучила структуры данных, алгоритмы</li>
                <li>Обрела навыки работы с Typescript, асинхронными запросами</li>
                <li>Освоила основы Agile project management с упором на SCRUM и Kanban</li>
              </React.Fragment>
            }
          />
          <EducationItem
            active={true}
            year={2023}
            place="React Course"
            subtext={<li>Получила основы работы с библиотекой React</li>}
          />
        </div>
      </div>
    </div>
  );
}
