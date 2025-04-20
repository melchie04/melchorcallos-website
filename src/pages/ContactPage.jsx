import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import PageTitle from "../components/global/PageTitle";
import ContactForm from "../components/contact/ContactForm";
import { contact } from "../assets/contents/contents";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const { title, subtitle } = contact;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
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
