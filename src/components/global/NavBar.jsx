import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "../../providers/DarkModeProvider";
import { usePageControl } from "../../providers/PageControlProvider";
import { pages } from "../../assets/contents/contents";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { activePage, setActivePage } = usePageControl();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLink = ({ href }) => {
    setActivePage(href);
    setIsMobileMenuOpen(false);
  };

  // Logo
  const Logo = () => (
    <div className="flex justify-center items-center cursor-pointer md:mx-5 mx-0">
      <Link to="/" onClick={() => setActivePage("/")}>
        <h1 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
          &lt;/MC&gt;
        </h1>
      </Link>
    </div>
  );

  // Mobile Menu Button
  const MobileMenuButton = () => (
    <div
      className="md:hidden flex justify-center items-center cursor-pointer"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? (
        <AiOutlineClose size={20} />
      ) : (
        <AiOutlineMenu size={20} />
      )}
    </div>
  );

  // Nav Links
  const NavLinks = ({ link }) => (
    <li className="text-xs font-bold md:mx-5 md:my-0 mx-0 my-5">
      <Link
        to={link.href}
        className={`${
          link.href === activePage
            ? "text-primary-light dark:text-primary-dark"
            : "text-dark dark:text-light hover:text-primary-light hover:dark:text-primary-dark"
        } duration-500 cursor-pointer`}
        onClick={() => handleLink(link.href)}
      >
        {link.name}
      </Link>
    </li>
  );

  NavLinks.propTypes = {
    link: PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  // Dark Mode Toggle
  const DarkModeToggle = () => (
    <li className="md:mx-5 md:my-0 mx-0 my-5">
      <button
        className="w-5 h-5 flex items-center justify-center cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <FiSun
            className="text-yellow-400 hover:text-primary-light hover:dark:text-primary-dark"
            size={24}
          />
        ) : (
          <FiMoon
            className="hover:text-primary-light hover:dark:text-primary-dark"
            size={24}
          />
        )}
      </button>
    </li>
  );

  return (
    <div className="w-full max-w-[1240px] z-50 fixed flex justify-between p-10 left-1/2 transform -translate-x-1/2">
      <Logo />
      <MobileMenuButton />
      <ul
        className={`md:w-auto md:static md:z-auto w-full absolute left-0 z-50
          md:flex md:justify-center md:items-center md:opacity-100 opacity-90
          md:bg-transparent md:dark:bg-transparent bg-light dark:bg-dark
          shadow-sm md:shadow-none shadow-gray-600 md:p-0 py-4 px-8
          transition-opacity duration-500 ease-in-out
          ${
            isMobileMenuOpen ? "top-28 opacity-100" : "top-[-500px] opacity-0"
          }`}
      >
        {pages.map((link, index) => (
          <NavLinks key={index} link={link} />
        ))}
        <DarkModeToggle />
      </ul>
    </div>
  );
};

export default NavBar;
