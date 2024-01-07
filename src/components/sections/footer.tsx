import { GitSee } from '@components/minor/gitSee';
import './Footer.scss';

export function Footer() {
  return (
    <div className="footer">
      <p className="footer__text text text-author">© Lex-Pineapple, 2024</p>
      <GitSee sectionName="footer" innerText="See this page's code" />
    </div>
  );
}
