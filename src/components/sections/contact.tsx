import { EmailIcon } from '@components/svg/email-icon';
import { GithubIcon } from '@components/svg/github-icon';
import { PhoneIcon } from '@components/svg/phone-icon';
import { TelegramIcon } from '@components/svg/telegram-icon';

import './contact.scss';

export function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact_container">
        <h2 className="contact__h2 h2">Контакты</h2>
        <ul className="contact__list list">
          <li className="contact__item">
            <PhoneIcon sectionName="phone" />
            <p className="contact__text text" />
            +375 (29) 142-83-61
          </li>
          <li className="contact__item">
            <EmailIcon sectionName="contact" />
            <p className="contact__text text" />
            pineapplepear55@gmail.com
          </li>
          <li className="contact__item">
            <GithubIcon sectionName="github" />
            <p className="contact__text text" />
            @Lex-pineapple
          </li>
          <li className="contact__item">
            <TelegramIcon sectionName="telegram" />
            <p className="contact__text text" />
            @Lex-pineapple
          </li>
        </ul>
      </div>
    </div>
  );
}
