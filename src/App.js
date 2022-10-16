import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import GlobalStyles from "./components/shared/Global";

import Nav from "./components/nav/Nav";
import MobileMenu from "./components/nav/mobile-menu/MobileMenu";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Lashes from "./pages/Lashes";
import Brows from "./pages/Brows";
import Skin from "./pages/Skin";
import WaxingTanning from "./pages/Waxing_tanning";
import { AnimatePresence } from "framer-motion";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((oldState) => !oldState);
    console.log(menuIsOpen);
  };
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <main className="container-app">
        {/* <Nav toggleMenu={toggleMenu} /> */}
        {/* <AnimatePresence>{menuIsOpen && <MobileMenu />}</AnimatePresence> */}

        <ScrollToTop>
          {/* <AnimatePresence */}
          {/* // exitBeforeEnter
            onExitComplete={() => setMenuIsOpen(false)} */}
          {/* > */}
          <Routes
            location={location}
            key={location.pathname}
            basename="laceys_beauty_bar/"
          >
            <Route path="/" element={<Home />} />
            <Route path="/lashes" element={<Lashes />} />
            <Route path="/brows" element={<Brows />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/waxing-tanning" element={<WaxingTanning />} />
          </Routes>
          {/* </AnimatePresence> */}
        </ScrollToTop>

        <Footer />
      </main>
    </>
  );
}

export default App;
