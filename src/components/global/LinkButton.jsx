import PropTypes from "prop-types";

const LinkButton = ({ children, href }) => {
  LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-light dark:text-primary-dark hover:scale-125 duration-300"
    >
      {children}
    </a>
  );
};

export default LinkButton;
