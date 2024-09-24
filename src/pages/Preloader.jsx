import React from "react";
import { motion } from "framer-motion";
import { contents } from "../assets/contents/loader";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen flex flex-col justify-center items-center bg-light dark:bg-dark"
    >
      <img src={contents.loader} className="w-40" />
      <h1 className="flex flex-col justify-center items-center xs:text-3xl text-2xl font-bold text-primary text-center animate-pulse">
        {contents.greetings.toUpperCase()}
      </h1>
    </motion.div>
  );
};

export default Preloader;
