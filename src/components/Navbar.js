function Navbar() {
  return (
    <nav className="bg-navbar shadow-lg font-shine">
      <div className="flex justify-end max-w-7xl ">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Home
              </a>
              <a
                href="/projects"
                className="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
