import { GithubIcon } from '@components/svg/github-icon';

interface IGitSeeProps {
  sectionName: string;
  innerText: string;
  link: string;
}

export function GitSee(props: IGitSeeProps) {
  return (
    <a
      href={props.link}
      className={`${props.sectionName || 'noSec'}__git-link git-link`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <p className={`${props.sectionName || 'noSec'}__git-link_text git-link__text text`}>
        {props.innerText}
      </p>
      <GithubIcon sectionName="projects" />
    </a>
  );
}
