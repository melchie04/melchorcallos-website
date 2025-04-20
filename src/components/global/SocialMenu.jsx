import { useState } from "react";
import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaFacebook, FaPlus } from "react-icons/fa";
import { socials } from "../../assets/contents/contents";

const SocialMenu = () => {
  const { linkedin, github, facebook } = socials;
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  // Round Button
  const RoundButton = ({ children, href, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="size-8 flex justify-center items-center rounded-full bg-primary-light dark:bg-primary-dark
        text-light dark:text-dark text-xl hover:scale-125 duration-300 cursor-pointer m-2"
    >
      {children}
    </a>
  );

  RoundButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 flex md:flex-col flex-row-reverse m-2">
      <div
        className={`flex md:flex-col flex-row transition-all duration-500 
          ${
            isSocialMenuOpen
              ? "opacity-100 md:translate-y-0 translate-x-0"
              : "opacity-0 md:translate-y-5 -translate-x-5 hidden"
          }`}
      >
        <RoundButton href={linkedin}>
          <FaLinkedin />
        </RoundButton>
        <RoundButton href={github}>
          <FaGithub />
        </RoundButton>
        <RoundButton href={facebook}>
          <FaFacebook />
        </RoundButton>
      </div>
      <RoundButton onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}>
        <FaPlus />
      </RoundButton>
    </div>
  );
};

export default SocialMenu;
