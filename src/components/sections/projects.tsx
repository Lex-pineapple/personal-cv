import { ProjectsItem } from '@components/minor/projects-item';

import './Projects.scss';

export function Projects() {
  return (
    <div className="projects">
      <div className="projects_container">
        <h2 className="projects__h2 h2">Projects</h2>
        <ProjectsItem />
      </div>
    </div>
  );
}
