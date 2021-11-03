import {
  FaSearch,
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
        <FaSun
          size="24"
          className="text-gray-500 mr-2 ml-4 transition duration-300 ease-in-out hover:text-pink-400 cursor-pointer"
        />
      ) : (
        <FaMoon
          size="24"
          className="text-gray-500 mr-2 ml-4 transition duration-300 ease-in-out hover:text-pink-400 cursor-pointer"
        />
      )}
    </span>
  );
};

const Search = () => (
  <div className="w-1/5 flex items-center justify-start bg-gray-400 dark:bg-gray-600 text-gray-500 px-2 h-9 ml-0 mr-0 rounded-md shadow-md transition duration-300 ease-in-out">
    <input
      className="w-full font-sans font-semibold bg-transparent outline-none text-gray-500 placeholder-gray-500 pl-1 rounded"
      type="text"
      placeholder="Search..."
    />
    <FaSearch size="18" className="cursor-pointer" />
  </div>
);
const BellIcon = () => (
  <FaRegBell
    size="24"
    className="text-gray-500 mr-2 ml-4 transition duration-300 ease-in-out hover:text-pink-400 cursor-pointer"
  />
);
const UserCircle = () => (
  <FaUserCircle
    size="24"
    className="text-gray-500 mr-2 ml-4 transition duration-300 ease-in-out hover:text-pink-400 cursor-pointer"
  />
);

const Title = (props) => <h5 className="title-text">{props.text}</h5>;

export default TopNavigation;
