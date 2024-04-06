import { EmailIcon } from '@components/svg/email-icon';

import './contact.scss';

export function Contact() {
  return (
    <div className="contact">
      <div className="contact_container">
        <h2 className="contact__h2 h2">Contact me</h2>
        <ul className="contact__list list">
          <li className="contact__item">
            <EmailIcon sectionName="contact" />
            <p className="contact__text text" />
            email@mail.mail
          </li>
        </ul>
      </div>
    </div>
  );
}
