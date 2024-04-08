import Avatar from '@assets/avatar.jpg';
import { GithubIcon } from '@components/svg/github-icon';
import { LinkedinIcon } from '@components/svg/linkedin-icon';

import './front.scss';

export function Front() {
  return (
    <div className="front" id="front">
      <div className="front_container">
        <div className="front__img-wrapper">
          <img src={Avatar} alt="Profile" className="front__img img" />
        </div>
        <div className="front_buttons_container">
          <button type="button" className="front__button button button_download">
            CV in PDF
          </button>
          <button type="button" className="front__button button button_email">
            Email me
          </button>
        </div>
        <h1 className="front__h1 h1">
          Анастасия <strong className="front__strong strong strong_color_blue">Сонич</strong>
        </h1>
        <p className="front__subtext">Junior Front-End разработчик</p>
        <p className="front__text text text_descr">
          Я Front-End разработчик ис Минска, имею знания Typescript, SASS, Node.js, Prisma, Docker.
          ...
        </p>
        {/* <p className="front__text text text_additional">
          Looking for more laconic version of this site?
        </p>
        <button type="button" className="front__button button">
          Simplified version
        </button> */}
        <GithubIcon sectionName="front" />
        <LinkedinIcon sectionName="front" />
        {/* <p className="front__symbol symbol symbol_arrow-down"></p> */}
      </div>
    </div>
  );
}
