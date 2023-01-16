import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContactPage() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#893168] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-contact font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-contact mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#893168] hover:border hover:border-blue-500 p-4">
                <a
                  href="mailto:cynthia.britom@gmail.com"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-contact font-light"
                >
                  <EmailIcon />
                  cynthia.britom@gmail.com
                </a>
              </div>
              <div className="flex flex-row items-center space-x-6 text-contact font-light rounded-md border border-[#893168] hover:border hover:border-blue-500 p-4">
                <LocationOnIcon className="text-contact" />
                Bronx, NY
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#893168] hover:border hover:border-blue-500 p-4">
                <a
                  href="https://www.linkedin.com/in/cynthiabritomena/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-contact font-light"
                >
                  <LinkedInIcon />
                  linkedin.com/in/cynthiabritomena/
                </a>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#893168] hover:border hover:border-blue-500 p-4">
                <a
                  href="https://github.com/cb2866"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-contact font-light"
                >
                  <GitHubIcon />
                  github.com/cb2866
                </a>
              </div>
            </div>
          </div>
          <form className="form rounded-lg bg-form p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              Your Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
            />
            <label htmlFor="name" className="text-sm text-gray-600 mx-4 mt-4">
              Message
            </label>
            <textarea
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 form-control block"
              name="message"
              rows="5"
            />
            <button
              type="submit"
              className="bg-button rounded-md w-1/2 mx-4 mt-8 py-2 text-contact text-sm font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
