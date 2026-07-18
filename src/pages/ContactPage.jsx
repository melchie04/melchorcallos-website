import { motion } from "motion/react";
import { ToastContainer } from "react-toastify";
import PageTitle from "../components/global/PageTitle";
import ContactForm from "../components/contact/ContactForm";
import { contact } from "../assets/contents/contents";
import { pageTransition } from "../utils/motionVariants";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const { title, subtitle } = contact;

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="lg:w-1/3 md:w-1/2 min-w-80 h-full flex flex-col justify-center items-center">
        <PageTitle title={title} subtitle={subtitle} />
        <ContactForm />
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default ContactPage;
