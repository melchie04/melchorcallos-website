import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Background from "./layouts/Background";
import Preloader from "./layouts/Preloader";
import NavBar from "./layouts/NavBar";
import SocialMenu from "./layouts/SocialMenu";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
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
          <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/works" element={<WorksPage />} />
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
