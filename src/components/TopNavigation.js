import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const TopNavigation = (props) => {
  if (props.searchable) {
    return (
      <div className="top-navigation">
        <Title text={props.title} />
        <ThemeIcon />
        <Search />
        <BellIcon />
        <UserCircle />
      </div>
    );
  }

  return (
    <div className="top-navigation">
      <Title text={props.title} />
      <ThemeIcon />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);

const Title = (props) => <h5 className="title-text">{props.text}</h5>;

export default TopNavigation;
