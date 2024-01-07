import Placeholder from '@assets/Placeholder.png';
import './About.scss';

export function About() {
  return (
    <div className="about">
      <h2 className="about__h2 h2">About me</h2>
      <img src={Placeholder} alt="" className="about__img img" />
      <p className="about__text text">
        Hi! Im Lorem Ipsum! Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="about__text text">
        Hi! Im Lorem Ipsum! Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="about__text text">
        Hi! Im Lorem Ipsum! Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
