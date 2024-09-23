import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Preloader from "./pages/Preloader";
import NavBar from "./components/NavBar";
import DownloadButton from "./components/DownloadButton";
import SocialMenu from "./components/SocialMenu";
import Background from "./components/Background";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
        
      <div className="w-screen h-screen flex flex-col items-center overflow-hidden">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        //{" "}
      </AnimatePresence>
      <SocialMenu />
      <DownloadButton />
      <Background />
    </div>
      )}
    </>
  );
}

export default App;
