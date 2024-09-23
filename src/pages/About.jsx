import React from "react";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { contents, skills, links } from "../assets/contents/about";
import PageTitle from "../components/PageTitle";
import PageHeading1 from "../components/PageHeading1";
import PageEmphasis1 from "../components/PageEmphasis1";
import PageContent1 from "../components/PageContent1";
import LinkButton from "../components/LinkButton";
import "react-alice-carousel/lib/alice-carousel.css";

const About = () => {
  const responsive = {
    0: {
      items: 3,
    },
    640: {
      items: 4,
    },
    768: {
      items: 6,
    },
  };

  const items = skills.map((skill, index) => {
    return (
      <div key={index} className="flex flex-col items-center space-y-1 mt-2">
        <img src={skill.img} alt={skill.name} className="w-8" />
        <p className="xs:text-sm text-xs text-gray-700 dark:text-gray-300">
          {skill.name}
        </p>
      </div>
    );
  });

  const SocialButtons = () => {
    return (
      <div className="flex justify-start my-2">
        <LinkButton href={links.linkedin}>
          <FaLinkedin size={24} />
        </LinkButton>
        <LinkButton href={links.github}>
          <FaGithubSquare size={24} />
        </LinkButton>
        <LinkButton href={links.facebook}>
          <FaFacebookSquare size={24} />
        </LinkButton>
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
      <div className="lg:max-w-4xl md:max-w-2xl max-w-xs flex flex-col justify-center items-center text-center p-2">
        <PageHeading1>{contents.name}</PageHeading1>
        <PageEmphasis1>{contents.roles}</PageEmphasis1>
        <SocialButtons />
        <PageContent1>{contents.description}</PageContent1>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </div>
    </motion.div>
  );
};

export default About;
