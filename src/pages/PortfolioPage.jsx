import { motion } from "framer-motion";
import PageTitle from "../components/global/PageTitle";
import { portfolio } from "../assets/contents/contents";
import ActiveSlider from "../components/portfolio/ActiveSlider";

const PortfolioPage = () => {
  const { title, subtitle } = portfolio;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="xl:w-5/6 lg:w-4/5 md:w-3/4 min-w-80 h-full flex flex-col justify-center items-center">
        <PageTitle title={title} subtitle={subtitle} />
        <ActiveSlider />
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
