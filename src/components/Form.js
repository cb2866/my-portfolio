import React, { useRef } from "react";

function Form() {
  return (
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
  );
}

export default Form;
