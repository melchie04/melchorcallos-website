import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "../providers/DarkModeProvider";
import { usePageControl } from "../providers/PageControlProvider";
import { contents } from "../assets/contents/navigation";

const NavBar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { activePage, setActivePage } = usePageControl();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full max-w-[1240px] z-50 fixed flex justify-between p-10 left-1/2 transform -translate-x-1/2">
      <div className="flex justify-center items-center cursor-pointer md:mx-5 mx-0">
        <Link to="/" onClick={() => setActivePage("/")}>
          <img
            className="w-20 h-auto object-cover"
            src={contents.logo}
            alt="MC"
          />
        </Link>
      </div>
      <div
        className="md:hidden flex justify-center items-center cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`md:w-auto md:static md:z-auto w-full absolute left-0 z-50
          md:flex md:justify-center md:items-center md:opacity-100 opacity-90
          md:bg-transparent md:dark:bg-transparent bg-gray-200 dark:bg-gray-800
          md:p-0 py-4 px-8
          transition-opacity duration-500 ease-in-out
          ${openMenu ? "top-28 opacity-100" : "top-[-500px] opacity-0"}`}
      >
        {contents.links.map((link, index) => (
          <li
            key={index}
            className="text-xs font-bold md:mx-5 md:my-0 mx-0 my-5"
          >
            <Link
              to={link.href}
              className={`${
                link.href === activePage
                  ? "text-primary"
                  : "text-dark dark:text-light hover:text-primary hover:dark:text-primary"
              } duration-500 cursor-pointer`}
              onClick={() => {
                setActivePage(link.href);
                setOpenMenu(!openMenu);
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="md:mx-5 md:my-0 mx-0 my-5">
          <button
            className="w-5 h-5 flex items-center justify-center cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 hover:text-primary" size={24} />
            ) : (
              <FiMoon className="hover:text-primary" size={24} />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
