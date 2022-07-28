import React from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./components/styled/Global";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Lashes from "./pages/Lashes";
import Brows from "./pages/Brows";
import Skin from "./pages/Skin";
// import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <main className="container-app">
        <Nav />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lashes" element={<Lashes />} />
            <Route path="/brows" element={<Brows />} />
            <Route path="/skin" element={<Skin />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
          </Routes>
        </ScrollToTop>

        <Footer />
      </main>
    </>
  );
}

export default App;
