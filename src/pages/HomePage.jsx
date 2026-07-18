import { motion } from "motion/react";
import Avatar from "../components/home/Avatar";
import Greetings from "../components/home/Greetings";
import { pageTransition } from "../utils/motionVariants";

const HomePage = () => {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="flex flex-col md:flex-row items-center">
        <Avatar />
        <Greetings />
      </div>
    </motion.div>
  );
};

export default HomePage;
