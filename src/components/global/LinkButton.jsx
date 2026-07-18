import PropTypes from "prop-types";
import { motion } from "motion/react";
import { tapScale } from "../../utils/motionVariants";

const LinkButton = ({ children, href }) => {
  LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={tapScale.whileHover}
      whileTap={tapScale.whileTap}
      transition={tapScale.transition}
      className="text-primary-light dark:text-primary-dark inline-block"
    >
      {children}
    </motion.a>
  );
};

export default LinkButton;
