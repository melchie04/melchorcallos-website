import { motion } from "framer-motion";
import { loader } from "../assets/contents/images";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <img src={loader} className="w-40" alt="Loader" />
      <h1 className="xs:text-3xl text-2xl font-bold text-primary text-center animate-pulse">
        WELCOME TO MY WEBSITE.
      </h1>
    </motion.div>
  );
};

export default Preloader;
