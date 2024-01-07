import { ProjectsItem } from '@components/minor/projectsItem';
import './Projects.scss';

export function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__h2 h2">Projects</h2>
      <ProjectsItem />
    </div>
  );
}
