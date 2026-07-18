import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import { education } from "../../assets/contents/contents";
import {
  staggerContainer,
  fadeInUp,
  hoverLift,
} from "../../utils/motionVariants";

const EducationPanel = () => {
  const { description, institutions } = education;
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  // Education Card
  const EducationCard = ({ institution }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={hoverLift.whileHover}
      whileTap={hoverLift.whileTap}
      transition={hoverLift.transition}
      onClick={() => setSelectedInstitution(institution)}
      className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md px-6 py-3 flex md:flex-col cursor-pointer"
    >
      <div>
        <h3 className="md:text-base text-sm font-semibold text-dark dark:text-light select-none">
          {institution.degree}
        </h3>
        <h4 className="md:text-sm text-xs text-dark/80 dark:text-light/80 select-none mb-2">
          {institution.name}
        </h4>
        <p className="md:text-sm text-xs text-dark/50 dark:text-light/50 select-none mb-2">
          {institution.duration}
        </p>
      </div>
    </motion.div>
  );

  EducationCard.propTypes = {
    institution: PropTypes.shape({
      name: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2"
      >
        {institutions.map((institution, index) => (
          <EducationCard key={index} institution={institution} />
        ))}
      </motion.div>

      {/* Details Popup */}
      <AnimatePresence>
        {selectedInstitution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex justify-center items-center bg-dark/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedInstitution(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-light dark:bg-gray-800 rounded-xl shadow-2xl border border-dark/15 dark:border-primary-dark/40 p-6 max-w-md w-full max-h-[80vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setSelectedInstitution(null)}
                className="absolute top-4 right-4 text-dark/50 dark:text-light/50 hover:text-primary-light hover:dark:text-primary-dark transition-colors"
                aria-label="Close"
              >
                <IoClose size={22} />
              </button>
              <h3 className="text-lg font-bold text-dark dark:text-light pr-8 select-none">
                {selectedInstitution.degree}
              </h3>
              <h4 className="text-sm text-dark/80 dark:text-light/80 select-none mb-1">
                {selectedInstitution.name}
              </h4>
              <p className="text-xs text-dark/50 dark:text-light/50 italic select-none mb-4">
                {selectedInstitution.duration}
              </p>
              {selectedInstitution.details?.length > 0 && (
                <ul className="list-disc list-outside pl-4 space-y-2">
                  {selectedInstitution.details.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm text-dark/70 dark:text-light/70 select-none"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationPanel;
