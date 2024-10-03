import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { LuSend } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../components/PageTitle";
import { contact } from "../assets/contents/contents";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init(publicKey);

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <div className="lg:w-1/3 md:w-1/2 min-w-80 h-full flex flex-col justify-center items-center animate-float">
        <PageTitle title={contact.title} subtitle={contact.subtitle} />
        <Form />
      </div>
      <ToastContainer />
    </motion.div>
  );
};

const Form = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        toastSuccess("Email sent successfully!");
        setLoading(false);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        toastError("Failed to send email. Please try again.");
        setLoading(false);
      }
    );
  };

  const toastSuccess = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  const toastError = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-center px-6 space-y-3"
      onSubmit={sendEmail}
    >
      <input
        className="w-full bg-transparent rounded-md border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary p-2"
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        placeholder="Name"
        required
      />
      <input
        className="w-full bg-transparent rounded-md border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary p-2"
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        placeholder="Email"
        required
      />
      <textarea
        className="w-full bg-transparent rounded-md border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary p-2 pb-12 custom-scrollbar"
        id="message"
        name="message"
        autoComplete="off"
        placeholder="Message"
        required
      ></textarea>
      <button
        className="flex justify-center items-center bg-primary text-lg text-gray-200 font-semibold rounded-lg cursor-pointer py-2 px-8 transition duration-300 hover:bg-primary/60"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg
              class="size-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="ml-2">Sending...</span>
          </>
        ) : (
          <>
            <LuSend />
            <span className="ml-2">Send</span>
          </>
        )}
      </button>
    </form>
  );
};

export default Contact;
