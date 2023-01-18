import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar({ color, children }) {
  return (
    <nav className="bg-navbar shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <Link to="/">
              <h1 className="font-semibold text-navbarText text-xl dark:text-gray-100">
                CYNTHIA BRITO-MENA
              </h1>
              <p className="text-base font-light text-navbarText dark:text-gray-300">
                Home
              </p>
            </Link>
          </div>

          <div className="space-x- hidden md:block text-navbarText">
            <Link to="/about" className="py-4 px-2 font-light">
              About Me
            </Link>
            <Link to="/projects" className="py-4 px-2 font-light">
              Projects
            </Link>
            <Link to="/resume" className="py-4 px-2 font-light">
              Resume
            </Link>
            <Link to="/contact" className="py-4 px-2 font-light">
              Let's Connect
            </Link>
            <a
              href="https://github.com/cb2866"
              rel="noreferrer"
              className="py-4 px-2"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/cynthiabritomena"
              rel="noreferrer"
              className="py-4 px-2"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
