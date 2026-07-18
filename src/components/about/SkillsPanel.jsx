import PropTypes from "prop-types";
import { motion } from "motion/react";
import { skills } from "../../assets/contents/contents";
import { staggerContainer, fadeInUp } from "../../utils/motionVariants";

const SkillsPanel = () => {
  const { description, skillList } = skills;

  // Skill Badge
  const SkillBadge = ({ name }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group px-4 py-2 rounded-full border-2 border-primary-light/40 dark:border-primary-dark/40
      bg-gray-100 dark:bg-gray-800 hover:bg-primary-light hover:dark:bg-primary-dark
      hover:border-primary-light hover:dark:border-primary-dark shadow-md cursor-default transition-colors duration-300"
    >
      <p
        className="text-xs md:text-sm font-semibold text-dark/70 dark:text-light/70
      group-hover:text-light group-hover:dark:text-dark select-none whitespace-nowrap transition-colors duration-300"
      >
        {name}
      </p>
    </motion.div>
  );

  SkillBadge.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return (
    <div className="p-4 w-full h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar">
      <p className="mb-2 md:text-base text-sm text-justify break-words select-none">
        {description}
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 my-2"
      >
        {skillList.map((skill, index) => (
          <SkillBadge key={index} name={skill.name} />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPanel;
