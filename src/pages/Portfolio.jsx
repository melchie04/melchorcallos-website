import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlayCircle,
  FaGithub,
} from "react-icons/fa";
import { contents, projects } from "../assets/contents/portfolio";
import PageTitle from "../components/PageTitle";
import PageHeading2 from "../components/PageHeading2";
import PageContent2 from "../components/PageContent2";
import LinkButton from "../components/LinkButton";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      let calculatedItemsPerPage;

      if (screenWidth >= 1280) {
        calculatedItemsPerPage = 6;
      } else if (screenWidth >= 768) {
        calculatedItemsPerPage = 3;
      } else {
        calculatedItemsPerPage = 2;
      }

      setItemsPerPage(calculatedItemsPerPage);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const getPageNumbers = () => {
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const Collage = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-40 md:h-56 bg-gray-800 dark:bg-gray-200 border-2 border-primary relative group"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div
              className="w-full absolute bottom-0 left-0 bg-opacity-30 bg-gray-800 dark:bg-gray-200 
              text-light dark:text-dark text-center font-semibold p-2"
            >
              {item.name}
            </div>
            <div
              className="flex flex-col justify-center items-center absolute inset-0 bg-gray-200 dark:bg-gray-800 p-4 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <PageHeading2>{item.name}</PageHeading2>
              <PageContent2>{item.details}</PageContent2>
              <div className="flex space-x-2 mt-4">
                {item.github && (
                  <LinkButton href={item.github}>
                    <FaGithub size={24} />
                  </LinkButton>
                )}
                {item.demo && (
                  <LinkButton href={item.demo}>
                    <FaPlayCircle size={24} />
                  </LinkButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Pagination = () => {
    return (
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() =>
            currentPage > 1 ? setCurrentPage(currentPage - 1) : null
          }
          className="md:text-md text-sm font-semibold bg-gray-300 text-gray-800 hover:bg-primary hover:text-white rounded-full shadow-md mx-1 px-3 py-1 
             opacity-90 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`md:text-md text-sm font-semibold hover:bg-primary hover:text-white rounded-full shadow-md mx-1 px-3 py-1  
               opacity-90 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-25 disabled:cursor-not-allowed ${
                 currentPage === pageNumber
                   ? "bg-primary text-gray-200"
                   : "bg-gray-300 text-gray-800"
               }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() =>
            currentPage < totalPages ? setCurrentPage(currentPage + 1) : null
          }
          className="md:text-md text-sm font-semibold bg-gray-300 text-gray-800 hover:bg-primary hover:text-white rounded-full shadow-md mx-1 px-3 py-1 
             opacity-90 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          <FaAngleRight />
        </button>
      </div>
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
      <div className="p-4">
        <Collage />
        <Pagination />
      </div>
    </motion.div>
  );
};

export default Portfolio;
