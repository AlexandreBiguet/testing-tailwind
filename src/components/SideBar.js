import { BsPlusSquare, BsFillLightningFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
                  bg-gray-900 text-white shadow-lg
                   dark:bq-gray-900 dark:text-white"
    >
      <SideBarIcon
        icon={<IoBookSharp size="28" />}
        linkTo="/"
        text="All Meetups"
      />
      <SideBarIcon
        icon={<BsPlusSquare size="28" />}
        linkTo="/new"
        text="Create Meetup"
      />
      <SideBarIcon
        icon={<BsFillLightningFill size="28" />}
        linkTo="/favorites"
        text="Favorites Meetups"
      />
    </div>
  );
};

const SideBarIcon = ({ icon, linkTo, text = "tooltip" }) => (
  <Link to={linkTo}>
    {" "}
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

export default SideBar;
