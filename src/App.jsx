import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Background from "./components/Background";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import SocialMenu from "./components/SocialMenu";
import DownloadButton from "./components/DownloadButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

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
      <Background />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <SocialMenu />
          <DownloadButton />
          <div className="min-h-dvh flex flex-col justify-center items-center overflow-hidden">
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
          </div>
        </>
      )}
    </>
  );
}

export default App;
