import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/global/Background";
import Preloader from "./components/global/Preloader";
import NavBar from "./components/global/NavBar";
import SocialMenu from "./components/global/SocialMenu";
import DownloadButton from "./components/global/DownloadButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

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
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
}

export default App;
