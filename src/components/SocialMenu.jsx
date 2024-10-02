import { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaPlus } from "react-icons/fa";
import { socials } from "../assets/contents/contents";

const SocialMenu = () => {
  const [openSocialMenu, setOpenSocialMenu] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 z-50 flex md:flex-col flex-row-reverse m-2">
      <div
        className={`flex md:flex-col flex-row transition-all duration-500 
          ${
            openSocialMenu
              ? "opacity-100 md:translate-y-0 translate-x-0"
              : "opacity-0 md:translate-y-5 -translate-x-5 hidden"
          }`}
      >
        <RoundButton href={socials.linkedin}>
          <FaLinkedin />
        </RoundButton>
        <RoundButton href={socials.github}>
          <FaGithub />
        </RoundButton>
        <RoundButton href={socials.facebook}>
          <FaFacebook />
        </RoundButton>
      </div>
      <RoundButton onClick={() => setOpenSocialMenu(!openSocialMenu)}>
        <FaPlus />
      </RoundButton>
    </div>
  );
};

const RoundButton = ({ children, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="size-10 flex justify-center items-center rounded-full bg-primary
        text-light dark:text-dark text-xl hover:scale-125 duration-300 m-2"
    >
      {children}
    </a>
  );
};

export default SocialMenu;
