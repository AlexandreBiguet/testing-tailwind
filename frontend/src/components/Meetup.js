const Meetup = (props) => {
  return (
    <article className="meetup peer">
      <header className="text-left">
        <p className=""> {props.title} </p>
        <main>{props.description}</main>
        <p> {props.meetupDate}</p>
      </header>
    </article>
  );
};

export default Meetup;
