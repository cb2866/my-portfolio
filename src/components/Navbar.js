import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 text-navbarText flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-light">
        <Link to="/about" className="flex-items-center" aria-current="page">
          About Me
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-light">
        <Link to="/projects" className="flex-items-center" aria-current="page">
          Projects
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-light">
        <Link to="/resume" className="flex-items-center" aria-current="page">
          Resume
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-light">
        <Link to="/contact" className="flex-items-center" aria-current="page">
          Let's Connect
        </Link>
      </Typography>
      <Typography>
        <a
          href="https://github.com/cb2866"
          target={"_blank"}
          rel="noreferrer"
          className="block py-2 pl-3 pr-3 text-navbarText"
        >
          <GitHubIcon />
        </a>
      </Typography>
      <Typography>
        <a
          href="https://linkedin.com/in/cynthiabritomena"
          target={"_blank"}
          rel="noreferrer"
          className="block py-2 pl-2 pr-2 text-navbarText"
        >
          <LinkedInIcon />
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto bg-navbar max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <h1 className="font-semibold text-navbarText text-xl dark:text-gray-100">
            CYNTHIA BRITO-MENA
          </h1>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-navbarText hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

export default Nav;
