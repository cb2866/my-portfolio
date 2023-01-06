import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
