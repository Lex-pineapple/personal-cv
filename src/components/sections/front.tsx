import './Front.scss';
import Placeholder from '@assets/Placeholder.png';
import { GithubIcon } from '@components/svg/GithubIcon';
import { LinkedinIcon } from '@components/svg/LinkedinIcon';

export function Front() {
  return (
    <div className="front">
      <div className="front_container">
        <div className="front__img-wrapper">
          <img src={Placeholder} alt="Profile-picture" className="front__img img" />
        </div>
        <div className="front_buttons_container">
          <button className="front__button button button_download">CV in PDF</button>
          <button className="front__button button button_email">Email me</button>
        </div>
        <h1 className="front__h1 h1">
          Name <strong className="front__strong strong strong_color_blue">Surname</strong>
        </h1>
        <p className="front__subtext">Full-Stack Developer</p>
        <p className="front__text text text_descr">
          Hi! Im Lorem Ipsum! Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="front__text text text_additional">
          Looking for more laconic version of this site?
        </p>
        <button className="front__button button">Simplified version</button>
        <GithubIcon sectionName="front" />
        <LinkedinIcon sectionName="front" />
        {/* <p className="front__symbol symbol symbol_arrow-down"></p> */}
      </div>
    </div>
  );
}
