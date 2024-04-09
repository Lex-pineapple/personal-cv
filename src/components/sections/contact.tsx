import { EmailIcon } from '@components/svg/email-icon';
import { GithubIcon } from '@components/svg/github-icon';
import { PhoneIcon } from '@components/svg/phone-icon';
import { TelegramIcon } from '@components/svg/telegram-icon';

import './contact.scss';

export function Contact() {
  return (
    <div className="contact" id="contacts">
      <div className="contact_container">
        <h2 className="contact__h2 h2">Контакты</h2>
        <ul className="contact__list list">
          <li className="contact__item">
            <a className="contact__item_link" href="tel:+375291428361">
              <PhoneIcon sectionName="phone" />
              <p className="contact__text text">+375 (29) 142-83-61</p>
            </a>
          </li>
          <li className="contact__item">
            <a className="contact__item_link" href="mailto:pineapplepear55@gmail.com">
              <EmailIcon sectionName="contact" />
              <p className="contact__text text">pineapplepear55@gmail.com</p>
            </a>
          </li>
          <li className="contact__item">
            <a
              className="contact__item_link"
              href="https://github.com/Lex-pineapple/"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon sectionName="github" />
              <p className="contact__text text">@Lex-pineapple</p>
            </a>
          </li>
          <li className="contact__item">
            <a
              className="contact__item_link"
              href="https://t.me/AirfryerBuyOneGetOneFree"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon sectionName="telegram" />
              <p className="contact__text text">@AirfryerBuyOneGetOneFree</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
