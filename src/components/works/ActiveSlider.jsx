import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
import LinkButton from "../global/LinkButton";
import { projects } from "../../assets/contents/contents";
import { hoverLift } from "../../utils/motionVariants";
import "swiper/css";
import "swiper/css/pagination";

const TAG_CLASS =
  "text-[10px] leading-none font-medium px-2 py-1 rounded-full select-none whitespace-nowrap";
const TAG_TOOL_CLASS = `${TAG_CLASS} bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark border border-primary-light/30 dark:border-primary-dark/30`;
const TAG_MORE_CLASS = `${TAG_CLASS} bg-dark/10 dark:bg-light/10 text-dark/60 dark:text-light/60 border border-dark/20 dark:border-light/20`;

const ToolTags = ({ tools }) => {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(tools.length);

  useEffect(() => {
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
  }, [tools]);

  const hiddenCount = tools.length - visibleCount;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-nowrap gap-1 mt-1 w-full overflow-hidden"
    >
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
};

const ActiveSlider = () => {
  // Project Card
  const ProjectCard = ({ project }) => (
    <motion.div
      whileHover={hoverLift.whileHover}
      whileTap={hoverLift.whileTap}
      transition={hoverLift.transition}
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
      tools: PropTypes.arrayOf(PropTypes.string),
      github: PropTypes.string,
      demo: PropTypes.string,
    }).isRequired,
  };

  return (
    <Swiper
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
      pagination={{
        clickable: true,
        bulletClass: "custom-swiper-pagination-bullet",
        bulletActiveClass: "custom-swiper-pagination-bullet-active",
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
  );
};

export default ActiveSlider;
