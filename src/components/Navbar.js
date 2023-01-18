import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar({ color, children }) {
  return (
    <nav className="bg-navbar shadow-lg">
      <div className="container text-navbarText flex flex-wrap items-center justify-between mx-auto">
        <Link to="/">
          <h1 className="font-semibold text-navbarText text-xl dark:text-gray-100">
            CYNTHIA BRITO-MENA
          </h1>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          class="hidden w-full md:block md:w-auto text-navbarText"
          id="navbar-default"
        >
          <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0">
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-navbarText"
                aria-current="page"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 pl-3 pr-4 text-navbarText"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="block py-2 pl-3 pr-4 text-navbarText"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-navbarText"
              >
                Let's Connect
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/cb2866"
                rel="noreferrer"
                className="block py-2 pl-3 pr-4 text-navbarText"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/cynthiabritomena"
                rel="noreferrer"
                className="block py-2 pl-3 pr-4 text-navbarText"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
