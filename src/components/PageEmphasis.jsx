import React from "react";

const PageEmphasis = ({ children }) => {
  return (
    <p className="sm:text-base xs:text-sm text-xs text-justify text-gray-800 dark:text-gray-300 italic my-1">
      {children}
    </p>
  );
};

export default PageEmphasis;
