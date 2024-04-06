import { EducationItem } from '@components/minor/education-item';

import './Education.scss';

export function Education() {
  return (
    <div className="edu">
      <div className="edu_container">
        <h2 className="edu__h2 h2">Education</h2>
        <div className="edu__list list">
          <EducationItem active={true} />
          <EducationItem active={false} />
          <EducationItem active={false} />
        </div>
      </div>
    </div>
  );
}
