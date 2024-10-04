import React from "react";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import { about } from "../assets/contents/contents";

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
      </div>
    </motion.div>
  );
};

export default About;
