import { motion } from "motion/react";
import PageTitle from "../components/global/PageTitle";
import { about } from "../assets/contents/contents";
import AboutSection from "../components/about/AboutSection";
import { pageTransition } from "../utils/motionVariants";

const AboutPage = () => {
  const { title, subtitle } = about;

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
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
