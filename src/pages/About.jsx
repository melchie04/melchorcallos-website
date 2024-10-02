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
      <PageTitle
        title={about.title}
        subtitle={about.subtitle}
      />
    </motion.div>
  );
};

export default About;
