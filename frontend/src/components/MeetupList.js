import Meetup from "./Meetup";

const MeetupList = (props) => {
  return (
    <section className="meetup-list">
      {props.meetups.map((meetup) => {
        return (
          <Meetup
            title={meetup.title}
            meetupDate={meetup.meetupDate}
            description={meetup.description}
          />
        );
      })}
    </section>
  );
};

export default MeetupList;
