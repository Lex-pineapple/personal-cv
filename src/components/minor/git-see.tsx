import { GithubIcon } from '@components/svg/github-icon';

interface IGitSeeProps {
  sectionName: string;
  innerText: string;
}

export function GitSee(props: IGitSeeProps) {
  return (
    <div className={`${props.sectionName || 'noSec'}__git-link git-link`}>
      <p className={`${props.sectionName || 'noSec'}__git-link_text git-link__text text`}>
        {props.innerText}
      </p>
      <GithubIcon sectionName="projects" />
    </div>
  );
}
