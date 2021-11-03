import TopNavigation from "../components/TopNavigation";
import SideBar from "../components/SideBar";

const Favorites = () => {
  return (
    <div>
      <TopNavigation title="Your Favorites" searchable={true} />
      <SideBar />
    </div>
  );
};

export default Favorites;
