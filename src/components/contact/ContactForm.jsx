import { useState } from "react";
import { LuSend } from "react-icons/lu";
import { toast } from "react-toastify";
import { sendTelegramMessage } from "../../services/telegramService";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    sendTelegramMessage({ name, email, message })
      .then(() => {
        toastSuccess("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toastError("Failed to send message. Please try again.");
      })
      .finally(() => {
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
      onSubmit={sendMessage}
    >
      <input
        className="w-full bg-transparent rounded-md border border-dark/70 dark:border-light/70
        focus:outline-none focus:ring-2 focus:ring-[#0e504c] focus:dark:ring-[#1ba098] p-2 custom-placeholder"
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        placeholder="Name"
        required
      />
      <input
        className="w-full bg-transparent rounded-md border border-dark/70 dark:border-light/70
        focus:outline-none focus:ring-2 focus:ring-[#0e504c] focus:dark:ring-[#1ba098] p-2 custom-placeholder"
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        placeholder="Email"
        required
      />
      <textarea
        className="w-full bg-transparent rounded-md border border-dark/70 dark:border-light/70
        focus:outline-none focus:ring-2 focus:ring-[#0e504c] focus:dark:ring-[#1ba098] p-2 pb-12 custom-scrollbar custom-placeholder"
        id="message"
        name="message"
        autoComplete="off"
        placeholder="Message"
        required
      ></textarea>
      <button
        className="relative flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer py-2 px-8
        text-light dark:text-dark bg-primary-light dark:bg-primary-dark disabled:opacity-60 
        transition-all duration-300 hover:scale-105 active:scale-95"
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
