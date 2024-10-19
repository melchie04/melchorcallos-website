import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { usePageControl } from "../providers/PageControlProvider";
import PageTitle from "../components/PageTitle";
import LinkButton from "../components/LinkButton";
import { portfolio } from "../assets/contents/contents";
import { projects } from "../assets/contents/projects";

const Portfolio = () => {
  const { setActivePage } = usePageControl();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="xl:w-5/6 lg:w-4/5 md:w-3/4 min-w-80 h-full flex flex-col justify-center items-center animate-float">
        <PageTitle title={portfolio.title} subtitle={portfolio.subtitle} />
        <Projects />
        {/* <Link
          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary underline underline-offset-4 pb-3"
          to="/projects"
          onClick={() => setActivePage("/projects")}
        >
          Click here to explore more projects!
        </Link> */}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
        pauseOnTouchStart: true,
      }}
      loop={true}
      modules={[EffectCoverflow, Autoplay]}
      className={`w-2/3 flex flex-col justify-center items-center pb-4 transition-opacity duration-500 ${
        imgLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      {projects.map((item, index) => (
        <SwiperSlide key={index} className="xl:size-80 size-72 relative group">
          <div className="relative w-full h-full rounded-2xl swiper-slide-shadow">
            <img
              src={item.image}
              className="w-full h-full object-cover rounded-2xl"
              alt={item.name}
              onLoad={() => setImgLoading(false)}
            />
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-800 dark:text-gray-200 rounded-2xl
              bg-white dark:bg-black bg-opacity-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
            >
              <h3 className="xl:text-xl text-lg font-bold">{item.name}</h3>
              <p className="xl:text-base text-sm">{item.category}</p>
              <p className="xl:text-sm text-xs mt-2">
                {item.tools.join(" | ")}
              </p>
              <p className="xl:text-sm text-xs">{item.details}</p>
              <div className="flex flex-row justify-center items-center mt-4 pointer-events-auto">
                <LinkButton href={item.github}>
                  <FaGithub size={28} />
                </LinkButton>
                <LinkButton href={item.demo}>
                  <FaPlayCircle size={28} />
                </LinkButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Portfolio;
