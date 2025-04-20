import { motion } from "framer-motion";
import Avatar from "../components/home/Avatar";
import Greetings from "../components/home/Greetings"

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
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