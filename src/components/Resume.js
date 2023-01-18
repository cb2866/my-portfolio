import React from "react";

function Resume() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-40 dark:bg-gray-800">
        <h1 className="text-7xl md:text-9xl font-bold py-10 text-center text-header md:text-left">
          Resume
        </h1>
      </div>

      <div className="rounded-md shadow-md bg-[#893168] mx-auto mb-20 max-w-7xl dark:bg-gray-900">
        <div className="max-w-6xl mx-auto -mt-4 grid py-10 ">
          <embed
            src="CBMResume.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;
