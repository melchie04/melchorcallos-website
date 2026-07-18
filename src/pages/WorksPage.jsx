import { motion } from "motion/react";
import PageTitle from "../components/global/PageTitle";
import { works } from "../assets/contents/contents";
import ActiveSlider from "../components/works/ActiveSlider";
import { pageTransition } from "../utils/motionVariants";

const WorksPage = () => {
  const { title, subtitle } = works;

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="xl:w-5/6 lg:w-4/5 md:w-3/4 min-w-80 h-full flex flex-col justify-center items-center">
        <PageTitle title={title} subtitle={subtitle} />
        <ActiveSlider />
      </div>
    </motion.div>
  );
};

export default WorksPage;
