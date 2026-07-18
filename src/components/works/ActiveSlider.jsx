import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LinkButton from "../global/LinkButton";
import { projects } from "../../assets/contents/contents";
import { hoverLift } from "../../utils/motionVariants";
import "swiper/css";
import "swiper/css/pagination";

const TAG_CLASS =
  "text-[10px] leading-none font-medium px-2 py-1 rounded-full select-none whitespace-nowrap";
const TAG_TOOL_CLASS = `${TAG_CLASS} bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark border border-primary-light/30 dark:border-primary-dark/30`;
const TAG_MORE_CLASS = `${TAG_CLASS} bg-dark/10 dark:bg-light/10 text-dark/60 dark:text-light/60 border border-dark/20 dark:border-light/20`;

// Renders as many tool tags as actually fit on one line, measured against
// the real rendered width of each tag (not a guessed/fixed count), and
// collapses whatever doesn't fit into a single "+N" badge at the end.
const ToolTags = ({ tools, wrap = false }) => {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(tools.length);

  useEffect(() => {
    if (wrap) return; // wrapping mode (modal) skips the fit-measuring entirely
    const container = containerRef.current;
    const measureRow = measureRef.current;
    if (!container || !measureRow) return;

    const GAP = 4; // matches gap-1
    const MORE_BADGE_WIDTH = 32; // safe estimate for a "+N" badge

    const calculate = () => {
      const containerWidth = container.offsetWidth;
      const tagEls = Array.from(measureRow.children);
      let usedWidth = 0;
      let count = 0;

      for (let i = 0; i < tagEls.length; i++) {
        const tagWidth = tagEls[i].offsetWidth + (count > 0 ? GAP : 0);
        const isLast = i === tagEls.length - 1;
        const reserve = isLast ? 0 : MORE_BADGE_WIDTH + GAP;

        if (usedWidth + tagWidth + reserve <= containerWidth) {
          usedWidth += tagWidth;
          count++;
        } else {
          break;
        }
      }

      setVisibleCount(count);
    };

    calculate();

    const resizeObserver = new ResizeObserver(calculate);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [tools, wrap]);

  if (wrap) {
    return (
      <div className="flex flex-wrap gap-1.5">
        {tools.map((tool, index) => (
          <span key={index} className={TAG_TOOL_CLASS}>
            {tool}
          </span>
        ))}
      </div>
    );
  }

  const hiddenCount = tools.length - visibleCount;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-nowrap gap-1 mt-1 w-full overflow-hidden"
    >
      {/* Invisible measuring copy — same tags, real widths, never shown */}
      <div
        ref={measureRef}
        className="absolute top-0 left-0 flex flex-nowrap gap-1 opacity-0 pointer-events-none -z-10"
        aria-hidden="true"
      >
        {tools.map((tool, index) => (
          <span key={index} className={TAG_TOOL_CLASS}>
            {tool}
          </span>
        ))}
      </div>

      {tools.slice(0, visibleCount).map((tool, index) => (
        <span key={index} className={TAG_TOOL_CLASS}>
          {tool}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className={TAG_MORE_CLASS}>+{hiddenCount}</span>
      )}
    </div>
  );
};

ToolTags.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrap: PropTypes.bool,
};

const ActiveSlider = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);

  const openProject = (project) => {
    swiperRef.current?.autoplay?.stop();
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    swiperRef.current?.autoplay?.start();
  };

  // Project Card
  const ProjectCard = ({ project }) => (
    <motion.div
      whileHover={hoverLift.whileHover}
      whileTap={hoverLift.whileTap}
      transition={hoverLift.transition}
      onClick={() => openProject(project)}
      className="flex flex-col group relative shadow-lg rounded-xl border-2 border-dark/70 dark:border-light/70 p-8 mt-5 mb-10 h-80 w-[240px] overflow-hidden cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="absolute inset-0 w-full h-full object-cover select-none"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-800 px-6 py-4 flex flex-col gap-1">
        <h1 className="text-base font-semibold text-dark dark:text-light select-none">
          {project.name}
        </h1>
        <p className="text-xs text-dark/80 dark:text-light/80 select-none">
          {project.description}
        </p>
        {project.tools?.length > 0 && <ToolTags tools={project.tools} />}
        <div className="flex gap-2 mt-2 z-10">
          {project.github && (
            <LinkButton href={project.github}>
              <FaGithub size={16} />
            </LinkButton>
          )}
          {project.demo && (
            <LinkButton href={project.demo}>
              <FaPlayCircle size={16} />
            </LinkButton>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-light/10 dark:bg-dark/10 group-hover:opacity-0 transition-colors duration-300" />
    </motion.div>
  );

  ProjectCard.propTypes = {
    project: PropTypes.shape({
      image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          default: PropTypes.string,
        }),
      ]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      details: PropTypes.string,
      tools: PropTypes.arrayOf(PropTypes.string),
      github: PropTypes.string,
      demo: PropTypes.string,
    }).isRequired,
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="lg:w-[800px] sm:w-[530px] w-[300px] flex justify-center items-center"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Details Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex justify-center items-center bg-dark/60 backdrop-blur-sm p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-light dark:bg-gray-800 rounded-xl shadow-2xl border border-dark/15 dark:border-primary-dark/40 max-w-lg w-full max-h-[85vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={closeProject}
                className="absolute top-3 right-3 z-10 size-8 flex justify-center items-center rounded-full
                bg-dark/40 text-light hover:bg-primary-light hover:dark:bg-primary-dark transition-colors"
                aria-label="Close"
              >
                <IoClose size={20} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-48 object-cover select-none"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark dark:text-light select-none">
                  {selectedProject.name}
                </h3>
                <h4 className="text-sm text-dark/70 dark:text-light/70 select-none mb-3">
                  {selectedProject.description}
                </h4>

                {selectedProject.tools?.length > 0 && (
                  <div className="mb-4">
                    <ToolTags tools={selectedProject.tools} wrap />
                  </div>
                )}

                {selectedProject.details && (
                  <p className="text-sm text-dark/80 dark:text-light/80 text-justify leading-relaxed select-none mb-5">
                    {selectedProject.details}
                  </p>
                )}

                <div className="flex gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg
                      border-2 border-dark/70 dark:border-light/70 text-dark dark:text-light
                      transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg
                      text-light dark:text-dark bg-primary-light dark:bg-primary-dark
                      transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <FaPlayCircle size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActiveSlider;
