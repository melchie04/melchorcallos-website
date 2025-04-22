import PropTypes from "prop-types";
import { skills } from "../../assets/contents/contents";

const SkillsPanel = () => {
  const { description, skillList } = skills;

  // Skill Card
  const SkillCard = ({ skill }) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md py-3 flex flex-col items-center justify-center ">
      <img
        src={skill.icon}
        alt={skill.name}
        draggable="false"
        className="w-8 h-8 object-contain select-none my-1"
      />
      <p className="text-xs text-dark/50 dark:text-light/50 font-medium text-center select-none my-1">{skill.name}</p>
    </div>
  );

  SkillCard.propTypes = {
    skill: PropTypes.shape({
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          default: PropTypes.string,
        }),
      ]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="p-4 w-full h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar">
      <p className="mb-2 md:text-base text-sm text-justify break-words select-none">
        {description}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skillList.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPanel;
