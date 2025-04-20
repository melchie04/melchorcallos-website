import { motion } from "framer-motion";
import PageTitle from "../components/global/PageTitle";
import { about } from "../assets/contents/contents";
import AboutSection from "../components/about/AboutSection";

const AboutPage = () => {
  const { title, subtitle } = about;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="lg:w-4/5 md:w-3/4 min-w-80 h-full flex flex-col justify-center items-center">
        <PageTitle title={title} subtitle={subtitle} />
        <AboutSection />
      </div>
    </motion.div>
  );
};

export default AboutPage;
