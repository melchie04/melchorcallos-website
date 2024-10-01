import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Components
import PageTitle from "../components/PageTitle";
import PageHeading1 from "../components/PageHeading1";
import PageEmphasis1 from "../components/PageEmphasis1";
import PageParagraph from "../components/PageContent1";

// Contents
import { contents, experiences } from "../assets/contents/experience";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const timelineRef = useRef(null);

  const toggleDetails = (index) => {
    const scrollPosition = timelineRef.current.scrollTop;
    setOpenIndex(openIndex === index ? null : index);
    setTimeout(() => {
      timelineRef.current.scrollTop = scrollPosition;
    }, 0);
  };

  const Timeline = () => {
    return (
      <div
        ref={timelineRef}
        className="xl:h-96 h-72 overflow-y-auto p-8 custom-scrollbar"
      >
        <ol className="border-s-2 border-primary">
          {experiences.map((experience, index) => (
            <li key={index} className="lg:max-w-4xl md:max-w-2xl max-w-xs p-2">
              <div className="flex-start flex items-center pt-2">
                <div className="-ms-[30px] me-3 size-10 rounded-full bg-gray-200 border-2 border-primary items-center justify-center">
                  <img
                    src={experience.icon}
                    alt={`${experience.position} icon`}
                    className="size-full object-cover"
                  />
                </div>
                <p className="xs:text-sm text-xs text-gray-700 dark:text-gray-300">
                  {experience.date}
                </p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <PageHeading1>{experience.position}</PageHeading1>
                <PageEmphasis1>{experience.company}</PageEmphasis1>
                {openIndex === index && (
                  <PageParagraph>{experience.details}</PageParagraph>
                )}
                {openIndex !== index && (
                  <button
                    onClick={() => toggleDetails(index)}
                    className="text-sm text-primary my-2"
                  >
                    Show Details
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <PageTitle
        title={contents.title.toUpperCase()}
        subtitle={contents.subtitle}
      />
      <Timeline />
    </motion.div>
  );
};

export default Experience;
