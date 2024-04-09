import { ArrowUpIcon } from '@components/svg/arrow-up-icon';

export function ButtonTop() {
  return (
    <button
      type="button"
      className="button button_top"
      onClick={() => window.scrollTo(0, 0)}
      aria-label="top"
    >
      <ArrowUpIcon sectionName="button_top" />
    </button>
  );
}
