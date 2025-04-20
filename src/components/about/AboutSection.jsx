import { useState } from "react";
import PropTypes from "prop-types";
import { FaBookOpen, FaBriefcase, FaLaptop, FaUser } from "react-icons/fa";
import ProfilePanel from "./ProfilePanel";
import ExperiencePanel from "./ExperiencePanel";
import EducationPanel from "./EducationPanel";
import SkillsPanel from "./SkillsPanel";

const AboutSection = () => {
  const [activeSidePanel, setActiveSidePanel] = useState("Profile");

  // Side Bar Option
  const SideBarOption = ({ children, sideBarOption }) => (
    <li
      className={`flex items-center p-4 cursor-pointer ${
        activeSidePanel === sideBarOption
          ? "text-primary-light dark:text-primary-dark"
          : "hover:text-primary-light hover:dark:text-primary-dark"
      }`}
      onClick={() => setActiveSidePanel(sideBarOption)}
    >
      {children}
      <span className="ml-4 hidden md:block">{sideBarOption}</span>
    </li>
  );

  SideBarOption.propTypes = {
    children: PropTypes.node.isRequired,
    sideBarOption: PropTypes.string.isRequired,
  };

  // Side Bar Menu
  const SideBar = () => (
    <nav className="h-full md:w-40 transition-width duration-300 text-dark dark:text-light py-5">
      <ul>
        <SideBarOption sideBarOption="Profile">
          <FaUser size={24} />
        </SideBarOption>
        <SideBarOption sideBarOption="Experience">
          <FaBriefcase size={24} />
        </SideBarOption>
        <SideBarOption sideBarOption="Education">
          <FaBookOpen size={24} />
        </SideBarOption>
        <SideBarOption sideBarOption="Skills">
          <FaLaptop size={24} />
        </SideBarOption>
      </ul>
    </nav>
  );

  return (
    <div className="flex md:w-[760px] w-screen">
      <SideBar />
      <div className="p-2 h-80 lg:h-96 w-full flex-1 border-l-2 border-dark/70 dark:border-light/70">
        {activeSidePanel === "Profile" && <ProfilePanel />}
        {activeSidePanel === "Experience" && <ExperiencePanel />}
        {activeSidePanel === "Education" && <EducationPanel />}
        {activeSidePanel === "Skills" && <SkillsPanel />}
      </div>
    </div>
  );
};

export default AboutSection;
