import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Blogs from "../pages/blogs";
import Careers from "../pages/careers";
import Contact from "../pages/contact";
import Features from "../pages/features";
import Pricing from "../pages/pricing";
import BlogSingle from "../pages/blogs-single";
import Home from "../pages/home";
import CareersSingle from "../pages/careers-single";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs-single" element={<BlogSingle />} />
        <Route path="/careers-single" element={<CareersSingle />} />
      </Routes>
    </Router>
  );
}
