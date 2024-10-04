import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import LinkButton from "../components/LinkButton";
import PageTitle from "../components/PageTitle";
import { about, socials } from "../assets/contents/contents";
import { profile } from "../assets/contents/images";
import { experiences } from "../assets/contents/experiences";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="lg:w-4/5 md:w-3/4 min-w-80 h-full flex flex-col justify-center items-center animate-float">
        <PageTitle title={about.title} subtitle={about.subtitle} />
        <Cards />
        <p className="text-gray-600 dark:text-gray-300 pb-3">
          Swipe left to learn more about me!
        </p>
      </div>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className="w-60 h-[350px] flex flex-col justify-center items-center pb-4"
    >
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-75 text-center p-6 pt-4">
            <h2 className="text-sm font-bold">{about.name}</h2>
            <p className="text-xs">{about.position}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center items-center text-center p-6">
            <p className="text-xs">{about.description}</p>
            <div className="flex flex-row justify-center items-center mt-4">
              <LinkButton href={socials.facebook}>
                <FaFacebookSquare size={28} />
              </LinkButton>
              <LinkButton href={socials.linkedin}>
                <FaLinkedin size={28} />
              </LinkButton>
              <LinkButton href={socials.github}>
                <FaGithubSquare size={28} />
              </LinkButton>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {experiences.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800"
        >
          <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
            <div className="h-1/3 flex justify-center items-center border-b-2 border-gray-300 dark:border-gray-700 px-6">
              <img
                src={item.icon}
                alt={item.company}
                className="size-8 rounded-full bg-gray-200 border-2 border-primary mr-4"
              />
              <div>
                <h2 className="text-xs font-bold">{item.company}</h2>
                <p className="text-xs">{item.date}</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-3">
              <h3 className="text-xs font-semibold mb-2">{item.position}</h3>
              <p className="text-xs text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default About;
