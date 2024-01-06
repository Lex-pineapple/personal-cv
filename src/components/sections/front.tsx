export function Front(props: { temp: string }) {
  return (
    <div className="front">
      <img src={props.temp} alt="Profile-picture" className="front__img img" />
      <h1 className="front__h1 h1">Name Surname</h1>
      <p className="front__subtext">Full-Stack Developer</p>
      <p className="front__text text">
        Hi! Im Lorem Ipsum! Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="front__text text">Looking for more laconic version of this site?</p>
      <button className="front__button button">Simplified version</button>
      <img src={props.temp} alt="" className="front__logo logo logo_github" />
      <img src={props.temp} alt="" className="front__logo logo logo_linkedin" />
      <p className="front__symbol symbol symbol_arrow-down"></p>
    </div>
  );
}
