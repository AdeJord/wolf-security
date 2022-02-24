import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import Gallery from "./pages/gallery";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
