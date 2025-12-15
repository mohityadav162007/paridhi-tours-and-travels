import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import CTA from "./components/CTA";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import DomesticTrips from "./pages/DomesticTrips";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Home />
              </motion.div>
            }
          />

          <Route
            path="/gallery"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Gallery />
              </motion.div>
            }
          />

          <Route
            path="/domestic-trips"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <DomesticTrips />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <CTA />
      <Footer /> 
    </>
  );
}

export default App;
