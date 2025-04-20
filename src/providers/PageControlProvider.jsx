/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PageControlProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [navigate, location.pathname]);

  PageControlProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <PageControlContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageControlContext.Provider>
  );
};

const PageControlContext = createContext();

export const usePageControl = () => {
  return useContext(PageControlContext);
};

export default PageControlProvider;
