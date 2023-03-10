import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <section id="projects-section">
      <div className="max-w-6xl mx-auto h-40 dark:bg-gray-800 ">
        <h1 className="text-7xl md:text-9xl font-bold py-10 text-center text-header md:text-left">
          Projects
        </h1>
      </div>
      <div className="rounded-md shadow-md bg-componentBackground text-project mx-auto mb-20 max-w-7xl dark:bg-gray-900">
        <div className="max-w-6xl mx-auto -mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-20 ">
          <a href="https://www.medexperts.io" rel="noreferrer" target={"_blank"}>
            <div className="relative overflow-hidden border-solid border-2 border-project py-2 px-2">
              <img
                src="/medexperts.png"
                alt="Thumbnail for MedExperts project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
          <div className="rounded-lg">
            <h1 className="font-bold mx-4">MedExperts</h1>
            <h3 className="font-light mx-4">
              MedExperts is a question and answer portal designed for medical
              professionals in the field of pulmonary medicine. It provides a
              vast collection of questions on various difficulty levels and
              sub-categories to help users enhance their knowledge and skills.
            </h3>
            <br />
            <h3 className="font-bold mx-4">Tech Stack</h3>
            <h3 className="font-light mx-4">
              PostgreSQL,Express, React, Node (PERN), Redux, MUI, Bootstrap,
              Nodemailer, Framer Motion, JSON Web Tokens (JWT), and Firebase
            </h3>
            <br />
            <a
              href="https://github.com/MedExperts-io/MedExperts.io"
              target={"_blank"}
              rel="noreferrer"
              className="font-light mx-4"
            >
              <GitHubIcon />
            </a>
          </div>
          <a
            href="https://pocketnyc.onrender.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <div className="relative overflow-hidden border-solid border-2 border-project py-2 px-2">
              <img
                src="/pocketNYC.png"
                alt="Thumbnail for PocketNYC project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
          <div className="rounded-lg">
            <h1 className="font-bold mx-4">PocketNYC</h1>
            <h3 className="font-light mx-4">
              PocketNYC is a Progressive Web Application that provides
              information on free and low-cost resources and events available to
              New Yorkers. Developed by a team of native New Yorkers, PocketNYC
              breaks down traditional barriers to accessing critical
              information.
            </h3>
            <br />
            <h3 className="font-bold mx-4">Tech Stack</h3>
            <h3 className="font-light mx-4">
              PostgreSQL,Express, React, Redux, Node (PERN), MUI, Bootstrap,
              React Big Calendar, Leaflet, JSON Web Tokens (JWT), and NYC Open
              Data
            </h3>
            <br />
            <a
              href="https://github.com/pocketNYC/pocketNYC"
              target={"_blank"}
              rel="noreferrer"
              className="font-light mx-4"
            >
              <GitHubIcon />
            </a>
          </div>
          <a
            href="https://team3.onrender.com/home"
            rel="noreferrer"
            target={"_blank"}
          >
            <div className="relative overflow-hidden border-solid border-2 border-project py-2 px-2">
              <img
                src="/punko.png"
                alt="Thumbnail for PunkoFop! project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>

          <div className="rounded-lg">
            <h1 className="font-bold mx-4">Punko Fop! (E-Commerce Site)</h1>
            <h3 className="font-light mx-4">
              Punko Fop! is an online store where users can browse and purchase
              their favorite figurines (inspired by Funko Pop!). Customers are
              able to browse and make purchases as guests and/or as signed-in
              users using Stripe to process their transactions.
            </h3>
            <br />
            <h3 className="font-bold mx-4">Tech Stack</h3>
            <h3 className="font-light mx-4">
              React, Redux, Express, Node, Sequelize, PostgreSQL, CSS,
              Bootstrap, JSON Web Tokens (JWT) and Stripe
            </h3>
            <br />
            <a
              href="https://github.com/pocketNYC/pocketNYC"
              target={"_blank"}
              rel="noreferrer"
              className="font-light mx-4"
            >
              <GitHubIcon />
            </a>
          </div>
          <a
            href="https://github.com/cb2866/my-portfolio"
            rel="noreferrer"
            target={"_blank"}
          >
            <div className="relative overflow-hidden border-solid border-2 border-project py-2 px-2">
              <img
                src="/portfolio.png"
                alt="Thumbnail for Portfolio"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
          <div className="rounded-lg">
            <h1 className="font-bold mx-4">Portfolio Project</h1>
            <h3 className="font-light mx-4">
              My portfolio project is my first time experimenting with
              TailwindCSS for styling and seeks to make use of the different
              features Tailwind offers for customizing components.
            </h3>
            <br />
            <h3 className="font-bold mx-4">Tech Stack</h3>
            <h3 className="font-light mx-4">
              React, Node, TailwindCSS, MUI, EmailJS and React Rough Notation
            </h3>
            <br />
            <a
              href="https://github.com/cb2866/my-portfolio"
              target={"_blank"}
              rel="noreferrer"
              className="font-light mx-4"
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
