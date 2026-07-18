import PropTypes from "prop-types";
import { motion } from "motion/react";
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";
import LinkButton from "../global/LinkButton";
import { profile, socials } from "../../assets/contents/contents";
import { fadeInUp } from "../../utils/motionVariants";

const ProfilePanel = () => {
  const { description, info } = profile;
  const { linkedin, github, gmail } = socials;
  const columnOne = info.slice(0, Math.ceil(info.length / 2));
  const columnTwo = info.slice(Math.ceil(info.length / 2));

  // Info Label
  const InfoLabel = ({ fieldName, fieldValue }) => (
    <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-x-2">
      <dt className="text-xs font-medium text-dark/50 dark:text-light/50 select-none">
        {fieldName}
      </dt>
      <dd className="md:text-sm text-xs text-dark dark:text-light sm:mt-0 sm:col-span-2 select-none">
        {fieldValue}
      </dd>
    </div>
  );

  InfoLabel.propTypes = {
    fieldName: PropTypes.string.isRequired,
    fieldValue: PropTypes.string.isRequired,
  };

  // Info List
  const InfoList = () => (
    <div className="my-2">
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {columnOne.map((item) => (
          <InfoLabel
            key={item.fieldName}
            fieldName={item.fieldName}
            fieldValue={item.fieldValue}
          />
        ))}
        {columnTwo.map((item) => (
          <InfoLabel
            key={item.fieldName}
            fieldName={item.fieldName}
            fieldValue={item.fieldValue}
          />
        ))}
      </dl>
    </div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="p-4 w-full h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar"
    >
      <p className="mb-2 md:text-base text-sm text-justify break-words select-none">
        {description}
      </p>
      <div className="flex flex-row my-2 gap-2">
        <LinkButton href={gmail}>
          <FaEnvelopeSquare size={24} />
        </LinkButton>
        <LinkButton href={linkedin}>
          <FaLinkedin size={24} />
        </LinkButton>
        <LinkButton href={github}>
          <FaGithubSquare size={24} />
        </LinkButton>
      </div>
      <InfoList />
    </motion.div>
  );
};

export default ProfilePanel;
