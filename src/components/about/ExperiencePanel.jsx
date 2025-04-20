import PropTypes from "prop-types";
import { experiences } from "../../assets/contents/contents";

const ExperiencePanel = () => {
  const { description, companies } = experiences;

  // Experience Card
  const ExperienceCard = ({ company }) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md px-6 py-3 flex md:flex-col">
      <div>
        <h3 className="md:text-base text-sm font-semibold text-dark dark:text-light">
          {company.position}
        </h3>
        <h4 className="md:text-sm text-xs text-dark/80 dark:text-light/80 mb-2">{company.name}</h4>
        <p className="md:text-sm text-xs text-dark/50 dark:text-light/50 mb-2">{company.duration}</p>
      </div>
    </div>
  );

  ExperienceCard.propTypes = {
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="p-4 w-full h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar">
      <p className="mb-2 md:text-base text-sm text-justify break-words">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {companies.map((company, index) => (
          <ExperienceCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePanel;
