import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LuSend } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Environment Variables
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init(publicKey);

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        console.log(result.text);
        toastSuccess("Email sent successfully!");
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        toastError("Failed to send email. Please try again.");
        setLoading(false);
      });
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
        className="w-full bg-transparent rounded-md border-2 border-dark/70 dark:border-light/70
        focus:outline-none focus:ring-2 focus:ring-dark focus:dark:ring-light p-2 custom-placeholder"
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        placeholder="Name"
        required
      />
      <input
        className="w-full bg-transparent rounded-md border-2 border-dark/70 dark:border-light/70
        focus:outline-none focus:ring-2 focus:ring-dark focus:dark:ring-light p-2 custom-placeholder"
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        placeholder="Email"
        required
      />
      <textarea
        className="w-full bg-transparent rounded-md border-2 border-dark/70 dark:border-light/70
        focus:outline-none focus:ring-2 focus:ring-dark focus:dark:ring-light p-2 pb-12 custom-scrollbar custom-placeholder"
        id="message"
        name="message"
        autoComplete="off"
        placeholder="Message"
        required
      ></textarea>
      <button
        className="flex justify-center items-center bg-dark/70 dark:bg-light/70 text-lg text-light dark:text-dark
        font-semibold rounded-lg cursor-pointer py-2 px-8 transition duration-300 hover:bg-dark/50 hover:dark:bg-light/50"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg
              className="size-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
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

export default ContactForm;
