import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Navbar from "./Components/Reusable/Navbar";
import Footer from "./Components/Reusable/Footer";

import Home from "./Components/Pages/Home";
import Work from "./Components/Pages/Work";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import WorkDetail from "./Components/Reusable/WorkDetail";

import Transition from "./Components/Reusable/Transition";
import BlogDetail from "./Components/Reusable/BlogDetail";

const App = () => {
  const location = useLocation();

  return (
    <div className="w-full mx-auto px-10 sm:px-0 flex flex-col max-w-6xl">
      <Navbar />

      <Transition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
        </Routes>
      </Transition>

      <Footer />
    </div>
  );
};

export default App;