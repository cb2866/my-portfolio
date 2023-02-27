import React from "react";
import Form from "./Form";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContactPage() {
  return (
    <section id="contact-section">
      <div className="max-w-6xl mx-auto h-40 dark:bg-gray-800 antialiased">
        <h1 className="text-5xl md:text-9xl font-bold py-10 text-center text-header md:text-left">
          Contact
        </h1>
      </div>
      <div className="rounded-md shadow-md bg-componentBackground p-4 md:p-10 lg:p-20 max-w-7xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header>
              <h1 className="text-contact underline font-semibold text-2xl">
                Get in touch.
              </h1>
              <p className="font-light text-base text-contact mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-10">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#893168] hover:border hover:border-blue-500 py-2">
                <a
                  href="mailto:cynthia.britom@gmail.com"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-contact font-light"
                >
                  <EmailIcon /> cynthia.britom@gmail.com
                </a>
              </div>
              <div className="flex flex-row items-center space-x-6 text-contact font-light rounded-md border border-[#893168] hover:border hover:border-blue-500 py-2">
                <LocationOnIcon className="text-contact" /> Bronx, NY
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#893168] hover:border hover:border-blue-500 py-2">
                <a
                  href="https://www.linkedin.com/in/cynthiabritomena/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-contact font-light"
                >
                  <LinkedInIcon /> linkedin.com/in/cynthiabritomena/
                </a>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#893168] hover:border hover:border-blue-500 py-2">
                <a
                  href="https://github.com/cb2866"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-contact font-light"
                >
                  <GitHubIcon /> github.com/cb2866
                </a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
