import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { contents } from "../assets/contents/contact";
import PageTitle from "../components/PageTitle";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

emailjs.init(publicKey);

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey, {
        privateKey: privateKey,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const Form = () => {
    return (
      <form
        className="lg:w-1/3 md:w-1/2 w-full flex flex-col justify-center items-center mx-auto p-6 space-y-3"
        onSubmit={sendEmail}
      >
        <input
          className="w-full bg-transparent rounded-md border-2 border-primary focus:outline-none focus:ring-2  focus:ring-primary p-2"
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          placeholder="Name"
        />
        <input
          className="w-full bg-transparent rounded-md border-2 border-primary focus:outline-none focus:ring-2  focus:ring-primary p-2"
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
        />
        <textarea
          className="w-full bg-transparent rounded-md border-2 border-primary focus:outline-none focus:ring-2  focus:ring-primary p-2 pb-12 custom-scrollbar"
          id="message"
          name="message"
          autoComplete="off"
          placeholder="Message"
        ></textarea>
        <input
          className="flex justify-center items-center bg-primary text-lg text-gray-200 dark:text-gray-800 font-bold 
              rounded-lg cursor-pointer py-2 px-8 transition duration-300 hover:bg-primary/60"
          type="submit"
        />
      </form>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <PageTitle
        title={contents.title.toUpperCase()}
        subtitle={contents.subtitle}
      />
      <Form />
    </motion.div>
  );
};

export default Contact;
