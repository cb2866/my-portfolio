function Navbar() {
  return (
    <nav className="bg-navbar shadow-lg">
      <div className="flex justify-end max-w-7xl ">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-4 px-2 text-navbarText font-light">
                Home
              </a>
              <a href="/about" className="py-4 px-2 text-navbarText font-light">
                About Me
              </a>
              <a
                href="/projects"
                className="py-4 px-2 text-navbarText font-light"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="py-4 px-2 text-navbarText font-light"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="py-4 px-2 text-navbarText font-light"
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
