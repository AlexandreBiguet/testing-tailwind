import SideBar from "./SideBar";
import TopNavigation from "./TopNavigation";

const Layout = (props) => {
  return (
    <div className="flex">
      <SideBar />
      <TopNavigation />
      {props.children}
    </div>
  );
};

export default Layout;
