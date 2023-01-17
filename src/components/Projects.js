import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
        <h1 className="text-7xl md:text-9xl font-bold py-20 text-center text-header md:text-left">
          Projects
        </h1>
      </div>
      <div className="rounded-md shadow-md bg-[#893168] mx-auto mb-20 max-w-7xl dark:bg-gray-900">
        <div className="max-w-6xl mx-auto -mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-20 ">
          <a href="https://pocketnyc.onrender.com/">
            <div className="relative overflow-hidden">
              <img
                src="/pocketNYC.png"
                alt="Thumbnail for PocketNYC project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
          <div className="rounded-lg">
            <h1 className="font-bold text-navbarText mx-4">
              PocketNYC Capstone Project
            </h1>
            <h3 className="font-light text-navbarText mx-4">
              PocketNYC is a Progressive Web Application that provides
              information on free and low-cost resources and events available to
              New Yorkers. Developed by a team of native New Yorkers, PocketNYC
              breaks down traditional barriers to accessing critical
              information.
            </h3>
            <br />
            <h3 className="font-bold text-navbarText mx-4">Tech Stack</h3>
            <h3 className="font-light text-navbarText mx-4">
              PostgreSQL,Express, React, Redux, Node (PERN), MUI, Bootstrap,
              React Big Calendar, Leaflet, JSON Web Tokens (JWT), and NYC Open
              Data
            </h3>
            <br />
            <a
              href="https://github.com/grace-shopper-team3/graceshopper-team3"
              target={"_blank"}
              rel="noreferrer"
              className="text-contact font-light mx-4"
            >
              <GitHubIcon />
            </a>
          </div>
          <a href="https://team3.onrender.com/home">
            <div className="relative overflow-hidden">
              <img
                src="/punko.png"
                alt="Thumbnail for PunkoFop! project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>

          <div className="rounded-lg">
            <h1 className="font-bold text-navbarText mx-4">
              Punko Fop! E-Commerce Site
            </h1>
            <h3 className="font-light text-navbarText mx-4">
              Punko Fop! is an online store where users can browse and purchase
              their favorite figurines (inspired by Funko Pop!). Customers are
              able to browse and make purchases as guests and/or as signed-in
              users using Stripe to process their transactions.
            </h3>
            <br />
            <h3 className="font-bold text-navbarText mx-4">Tech Stack</h3>
            <h3 className="font-light text-navbarText mx-4">
              React, Redux, Express, Node, Sequelize, PostgreSQL, CSS,
              Bootstrap, JSON Web Tokens (JWT) and Stripe
            </h3>
            <br />
            <a
              href="https://github.com/pocketNYC/pocketNYC"
              target={"_blank"}
              rel="noreferrer"
              className="text-contact font-light mx-4"
            >
              <GitHubIcon />
            </a>
          </div>
          <a href="https://team3.onrender.com/home">
            <div className="relative overflow-hidden">
              <img
                src="/cynthia.png"
                alt="Thumbnail for PunkoFop! project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
          <div className="rounded-lg">
            <h1 className="font-bold text-navbarText mx-4">
              Portfolio Project
            </h1>
            <h3 className="font-light text-navbarText mx-4">
              My portfolio project is my first time experimenting with
              TailwindCSS for styling and seeks to make use of the different
              features Tailwind offers for customizing components.
            </h3>
            <br />
            <h3 className="font-bold text-navbarText mx-4">Tech Stack</h3>
            <h3 className="font-light text-navbarText mx-4">
              Express, React, Node, TailwindCSS, and MUI
            </h3>
            <br />
            <a
              href="https://github.com/cb2866/my-portfolio"
              target={"_blank"}
              rel="noreferrer"
              className="text-contact font-light mx-4"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
