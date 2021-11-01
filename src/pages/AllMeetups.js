import MeetupList from "../components/MeetupList";
import TopNavigation from "../components/TopNavigation";
import SideBar from "../components/SideBar";

var MEETUP_DATA = [
  {
    meetupDate: "Date #1",
    description: "Description #1",
    title: "Title #1",
  },
  {
    meetupDate: "Date #2",
    description: "Description #2",
    title: "Title #2",
  },
  {
    meetupDate: "Date #3",
    description: "Description #3",
    title: "Title #3",
  },
  {
    meetupDate: "Date #1",
    description: "Description #1",
    title: "Title #1",
  },
  {
    meetupDate: "Date #2",
    description: "Lorem ipsum dolor sit amet,",
    title: "Title #2",
  },
  {
    meetupDate: "Date #3",
    description: "Description #3",
    title: "Title #3",
  },
];

const AllMeetups = () => {
  return (
    <div>
      <TopNavigation title="All Meetups" searchable={true} />
      <SideBar />
      <div className="overscroll-auto">
        <MeetupList meetups={MEETUP_DATA} />
      </div>
    </div>
  );
};

export default AllMeetups;
