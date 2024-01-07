import { EmailIcon } from '@components/svg/EmailIcon';
import './Contact.scss';

export function Contact() {
  return (
    <div className="contact">
      <ul className="contact__list list">
        <li className="contact__item">
          <EmailIcon sectionName="contact" />
          <p className="contact__text text"></p>email@mail.mail
        </li>
      </ul>
    </div>
  );
}
