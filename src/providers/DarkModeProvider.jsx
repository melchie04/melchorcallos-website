/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
