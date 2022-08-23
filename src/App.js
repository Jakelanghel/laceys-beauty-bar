import React from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./components/styled/Global";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Lashes from "./pages/Lashes";
import Brows from "./pages/Brows";
import Skin from "./pages/Skin";
import Tanning from "./pages/Tanning";
import Waxing from "./pages/Waxing";
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
            <Route path="/tanning" element={<Tanning />} />
            <Route path="/waxing" element={<Waxing />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </main>
    </>
  );
}

export default App;
