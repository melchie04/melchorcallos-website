import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import SocialMenu from "./components/SocialMenu";
import DownloadButton from "./components/DownloadButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
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
          <NavBar />
          <SocialMenu />
          <DownloadButton />
          <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
}

export default App;
