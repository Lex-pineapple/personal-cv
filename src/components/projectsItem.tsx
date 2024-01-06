export function ProjectsItem() {
  return (
    <div className="projects__item">
      <h3 className="projects__h3 h3">Name</h3>
      <p className="projects__descr descr">
        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="projects__read-more">Read more</p>
      <button className="projects__button button">Preview</button>
      <div className="projects__git-link git-link">
        <p className="projects__git-link_text git-link_text text">See the code on GitHub</p>
        <img src="" alt="" className="projects__icon icon icon-github" />
      </div>
      <img src="" alt="" className="projects__img img img-background" />
    </div>
  );
}
