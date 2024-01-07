import { GitSee } from '@components/minor/gitSee';
import Placeholder from '@assets/Placeholder.png';

export function ProjectsItem() {
  return (
    <div className="projects__item">
      <h3 className="projects__h3 h3">Name</h3>
      <p className="projects__text text text_descr">
        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="projects__text text text_read-more">Read more</p>
      <button className="projects__button button">Preview</button>
      <GitSee sectionName="projects" innerText="See the code" />
      <img src={Placeholder} alt="" className="projects__img img img-background" />
    </div>
  );
}
