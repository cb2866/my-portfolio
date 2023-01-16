function Projects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center text-header md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#893168] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto -mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/pocketNYC.png"
                alt="Thumbnail for PocketNYC project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/punko.png"
                alt="Thumbnail for PunkoFop! project"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
