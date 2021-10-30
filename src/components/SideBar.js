import { BsPlusSquare, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
                  bg-gray-900 text-white shadow-lg
                   dark:bq-gray-900 dark:text-white"
    >
      <SideBarIcon icon={<IoBookSharp size="28" />} text="Books" />
      <SideBarIcon icon={<BsPlusSquare size="28" />} text="Add Book" />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} text="Burn Book" />
      <SideBarIcon icon={<BsGearFill size="28" />} text="Settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
