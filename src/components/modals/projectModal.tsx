import Placeholder from '@assets/Placeholder.png';

export function ProjectModal() {
  return (
    <div className="projects_modal">
      <h3 className="projects__h3 h3">Name</h3>
      <div className="projects__descr_container">
        <p className="projects__text text text_descr">
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <p className="projects__text text text_read-more">Read more</p>
      <button className="projects__button button">Preview</button>
      <img src={Placeholder} alt="" className="projects__img img img-background" />
    </div>
  );
}
