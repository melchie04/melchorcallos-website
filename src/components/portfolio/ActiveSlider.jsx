import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
import LinkButton from "../global/LinkButton";
import { projects } from "../../assets/contents/contents";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const ActiveSlider = () => {
  // Project Card
  const ProjectCard = ({ project }) => (
    <div className="flex flex-col group relative shadow-lg rounded-xl border-2 border-dark/70 dark:border-light/70 p-8 mb-10 h-80 w-[240px] overflow-hidden cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-800 px-6 py-4 flex flex-col gap-1">
        <h1 className="text-base font-semibold text-dark dark:text-light">
          {project.name}
        </h1>
        <p className="text-xs text-dark/80 dark:text-light/80">
          {project.description}
        </p>
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
    </div>
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
      freeMode={{
        enabled: true,
        momentumRatio: 0.5,
        momentumVelocityRatio: 0.5,
        sticky: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "custom-swiper-pagination-bullet",
        bulletActiveClass: "custom-swiper-pagination-bullet-active",
      }}
      modules={[FreeMode, Pagination]}
      className="lg:w-[800px] sm:w-[530px] w-[300px] flex justify-center items-center"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <ProjectCard key={index} project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ActiveSlider;
