function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#893168] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/pocketNYC.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />

              {/* <h1 className="absolute bottom-0 left-10 font-bold text-xl">
                PocketNYC
              </h1> */}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
