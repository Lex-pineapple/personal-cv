import { EducationItem } from '@components/minor/educationItem';
import './Education.scss';

export function Education() {
  return (
    <div className="edu">
      <h2 className="edu__h2 h2">Education</h2>
      <div className="edu__list list">
        <EducationItem active={true} />
        <EducationItem active={false} />
        <EducationItem active={false} />
      </div>
    </div>
  );
}
