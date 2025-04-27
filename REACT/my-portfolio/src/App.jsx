import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* You can add more routes like <Route path="/contact" ...> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
