import { GitSee } from '@components/minor/git-see';

type ProjectItemProps = {
  name: string;
  descr: string;
  codeLink: string;
  img: string;
  align: 'left' | 'right';
  previewLink?: string;
};

export function ProjectsItem(props: ProjectItemProps) {
  return (
    <div className={`projects__item align-${props.align}`}>
      <h3 className="projects__h3 h3">{props.name}</h3>
      <p className="projects__text text text_descr">{props.descr}</p>
      <p className="projects__text text text_read-more" />
      {props.previewLink && (
        <a
          className="projects__button button"
          href={props.previewLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Preview
        </a>
      )}
      <GitSee link={props.codeLink} sectionName="projects" innerText="See the code" />
      <div className="projects__img-wrapper">
        <img src={props.img} alt="" className="projects__img img img-background" />
      </div>
    </div>
  );
}
