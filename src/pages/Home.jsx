import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { usePageControl } from "../providers/PageControlProvider";
import { contents } from "../assets/contents/home";

const Home = () => {
  const [text] = useTypewriter(contents.typewriter);
  const { setActivePage } = usePageControl();

  const Greetings = () => {
    return (
      <div className="flex flex-col justify-center md:items-start items-center md:mx-5 md:my-0 mx-0 my-5">
        <h1 className="lg:text-7xl sm:text-6xl text-5xl font-bold m-1">
          <span>{contents.greetings}</span>
          <span className="text-primary">{contents.name}</span>
        </h1>
        <p className="lg:text-3xl sm:text-2xl text-xl text-secondary-light dark:text-secondary-dark font-medium italic m-1">
          {text}
          <Cursor />
        </p>
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
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-1 justify-center items-center">
          <Link
            className="size-48 relative rounded-full overflow-hidden bg-dark dark:bg-light after:bg-light after:dark:bg-dark
            before:bg-gradient-to-t before:from-primary before:dark:to-secondary-dark before:to-secondary-light circular-spin-animation"
            to="/contact"
            onClick={() => setActivePage("/contact")}
          >
            <div className="flex flex-col justify-center items-center absolute inset-[12px] z-10 rounded-full overflow-hidden cursor-pointer">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover bg-dark dark:bg-light transition-opacity duration-500 hover:opacity-0"
                src={contents.image}
                alt="Avatar"
              />
              <p className="w-full h-full flex justify-center items-center bg-dark dark:bg-light text-primary text-center text-xl font-bold">
                SAY HELLO!
              </p>
            </div>
          </Link>
        </div>
        <Greetings />
      </div>
    </motion.div>
  );
};

export default Home;
