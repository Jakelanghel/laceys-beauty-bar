import React from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./components/styled/Global";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Services from "./pages/Services";

function App() {
  return (
    <>
      <GlobalStyles />
      <main className="container-app">
        <Nav />
        <Routes>
          <Route path="/laceys-beauty-bar" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
