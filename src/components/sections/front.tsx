import Avatar from '@assets/avatar.jpg';
import { GithubIcon } from '@components/svg/github-icon';
import { TelegramIcon } from '@components/svg/telegram-icon';

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
            CV в PDF
          </button>
          <a href="mailto:pineapplepear55@gmail.com" className="front__button button button_email">
            Напишите мне email
          </a>
        </div>
        <h1 className="front__h1 h1">
          Анастасия <strong className="front__strong strong strong_color_blue">Сонич</strong>
        </h1>
        <p className="front__subtext">Junior Front-End разработчик</p>
        <p className="front__text text text_descr">
          Я Front-End разработчик из Минска, имею знания JavaScript, Typescript, CSS(SASS), React,
          Node.js, Docker. Умею работать с базами данных PostgreSQL и MySQL, и ORM Prisma и TypeORM.
          Всегда стараюсь ответственно подходить к поставленным задачам и доводить дело до конца.
        </p>
        {/* <p className="front__text text text_additional">
          Looking for more laconic version of this site?
        </p>
        <button type="button" className="front__button button">
          Simplified version
        </button> */}
        <a
          href="https://github.com/Lex-pineapple/personal-cv/tree/develop"
          aria-label="my github"
          target="_blank"
          rel="noreferrer"
          className="github_icon_link"
        >
          <GithubIcon sectionName="front" />
        </a>
        <a
          href="https://t.me/AirfryerBuyOneGetOneFree"
          aria-label="my telegram"
          target="_blank"
          rel="noreferrer"
          className="telegram_icon_link"
        >
          <TelegramIcon sectionName="front" />
        </a>
        {/* <p className="front__symbol symbol symbol_arrow-down"></p> */}
      </div>
    </div>
  );
}
