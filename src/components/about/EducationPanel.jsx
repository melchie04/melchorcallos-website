import PropTypes from "prop-types";
import { education } from "../../assets/contents/contents";

const EducationPanel = () => {
  const { description, institutions } = education;

  // Education Card
  const EducationCard = ({ institution }) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md px-6 py-3 flex md:flex-col">
      <div>
        <h3 className="md:text-base text-sm font-semibold text-dark dark:text-light">
          {institution.degree}
        </h3>
        <h4 className="md:text-sm text-xs text-dark/80 dark:text-light/80 mb-2">{institution.name}</h4>
        <p className="md:text-sm text-xs text-dark/50 dark:text-light/50 mb-2">{institution.duration}</p>
      </div>
    </div>
  );

  EducationCard.propTypes = {
    institution: PropTypes.shape({
      name: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="p-4 w-full h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar">
      <p className="mb-2 md:text-base text-sm text-justify break-words">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {institutions.map((institution, index) => (
          <EducationCard key={index} institution={institution} />
        ))}
      </div>
    </div>
  );
};

export default EducationPanel;
