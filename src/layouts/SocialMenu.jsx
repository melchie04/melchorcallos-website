import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";
import { FaLinkedin, FaGithub, FaPlus, FaMinus } from "react-icons/fa";
import { socials } from "../assets/contents/contents";
import { tapScale } from "../utils/motionVariants";
import { IoMail } from "react-icons/io5";

const SocialMenu = () => {
  const { linkedin, github, gmail } = socials;
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  // Round Button
  const RoundButton = ({ children, href, onClick }) => (
    <motion.a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={tapScale.whileHover}
      whileTap={tapScale.whileTap}
      transition={tapScale.transition}
      className="size-12 flex justify-center items-center rounded-full bg-primary-light dark:bg-primary-dark
        text-light dark:text-dark text-xl cursor-pointer m-2"
    >
      {children}
    </motion.a>
  );

  RoundButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex md:flex-col flex-row m-4">
      <div
        className={`flex md:flex-col flex-row transition-all duration-500 
          ${
            isSocialMenuOpen
              ? "opacity-100 md:translate-y-0 translate-x-0"
              : "opacity-0 md:translate-y-5 translate-x-5 hidden"
          }`}
      >
        <RoundButton href={linkedin}>
          <FaLinkedin />
        </RoundButton>
        <RoundButton href={github}>
          <FaGithub />
        </RoundButton>
        <RoundButton href={gmail}>
          <IoMail />
        </RoundButton>
      </div>
      <RoundButton onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}>
        <AnimatePresence mode="wait" initial={false}>
          {isSocialMenuOpen ? (
            <motion.span
              key="minus"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <FaMinus />
            </motion.span>
          ) : (
            <motion.span
              key="plus"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <FaPlus />
            </motion.span>
          )}
        </AnimatePresence>
      </RoundButton>
    </div>
  );
};

export default SocialMenu;
