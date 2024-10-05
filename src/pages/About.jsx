import { useState } from "react";
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
import {
  programming,
  testing,
  webdev,
  others,
} from "../assets/contents/skills";

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
        <p className="text-secondary-light dark:text-secondary-dark pb-3">
          Swipe left to learn more about me!
        </p>
      </div>
    </motion.div>
  );
};

const Cards = () => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className={`xl:w-[300px] xl:h-[400px] w-60 h-80 flex flex-col justify-center items-center pb-4 transition-opacity duration-500 ${
        imgLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
            onLoad={() => setImgLoading(false)}
          />
          <div className="absolute bottom-0 w-full bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-75 text-center p-6 pt-4">
            <h2 className="xl:text-base text-sm font-bold">{about.name}</h2>
            <p className="xl:text-sm text-xs">{about.position}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center items-center text-center p-6">
            <p className="xl:text-sm text-xs">{about.description}</p>
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
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="p-6">
            <h2 className="xl:text-base text-sm font-bold mb-4">My Programming Skills</h2>
            <ul className="space-y-4">
              {programming.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between xl:text-sm text-xs mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className={`${skill.color} h-1 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="p-6">
            <h2 className="xl:text-base text-sm font-bold mb-4">My Automation Test Skills</h2>
            <ul className="space-y-2">
              {testing.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between xl:text-sm text-xs mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className={`${skill.color} h-1 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="p-6">
            <h2 className="xl:text-base text-sm font-bold mb-4">My Web Development Skills</h2>
            <ul className="space-y-2">
              {webdev.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between xl:text-sm text-xs mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className={`${skill.color} h-1 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="p-6">
            <h2 className="xl:text-base text-sm font-bold mb-4">My Other Skills</h2>
            <ul className="space-y-2">
              {others.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between xl:text-sm text-xs mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className={`${skill.color} h-1 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center items-center text-center p-6">
            <p className="xl:text-sm text-xs">{about.experiences}</p>
          </div>
        </div>
      </SwiperSlide>
      {experiences.map((experience, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-800"
        >
          <div className="w-full h-full rounded-2xl outline outline-primary -outline-offset-8 overflow-hidden">
            <div className="h-1/3 flex justify-center items-center border-b-2 border-gray-300 dark:border-gray-700 px-6">
              <img
                src={experience.icon}
                alt={experience.company}
                className="xl:size-12 size-8 rounded-full bg-gray-200 border-2 border-primary mr-4"
              />
              <div>
                <h2 className="xl:text-sm text-xs font-bold">
                  {experience.company}
                </h2>
                <p className="xl:text-sm text-xs">{experience.date}</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-3">
              <h3 className="xl:text-sm text-xs font-semibold mb-2">
                {experience.position}
              </h3>
              <p className="xl:text-sm text-xs text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default About;
