import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaPlus } from "react-icons/fa";
import { links } from "../assets/contents/about";

const SocialMenu = () => {
  const [openSocialMenu, setOpenSocialMenu] = useState(false);

  const RoundButton = ({ children, href, onClick }) => {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className="size-8 flex justify-center items-center rounded-full bg-primary 
        text-light dark:text-dark text-xl p-2 hover:scale-125 duration-300 m-2"
      >
        {children}
      </a>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 flex md:flex-col flex-row-reverse p-4 m-1">
      <div
        className={`flex md:flex-col flex-row transition-all duration-300 
          ${
            openSocialMenu
              ? "opacity-100 md:translate-y-0 translate-x-0"
              : "opacity-0 md:translate-y-5 -translate-x-5"
          }`}
      >
        <RoundButton href={links.linkedin}>
          <FaLinkedin />
        </RoundButton>
        <RoundButton href={links.github}>
          <FaGithub />
        </RoundButton>
        <RoundButton href={links.facebook}>
          <FaFacebook />
        </RoundButton>
      </div>
      <RoundButton onClick={() => setOpenSocialMenu(!openSocialMenu)}>
        <FaPlus />
      </RoundButton>
    </div>
  );
};

export default SocialMenu;
