import TopNavigation from "../components/TopNavigation";
import SideBar from "../components/SideBar";

const NewMeetup = () => {
  return (
    <div>
      <TopNavigation title="Create new Meetup" searchable={false} />
      <SideBar />
    </div>
  );
};

export default NewMeetup;
