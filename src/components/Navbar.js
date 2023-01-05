function Navbar() {
  return (
    <nav class="bg-navbar shadow-lg">
      <div class="flex justify-end max-w-7xl ">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div class="hidden md:flex items-center space-x-1">
              <a
                href="/"
                class="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Home
              </a>
              <a
                href="/projects"
                class="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Projects
              </a>
              <a
                href="/about"
                class="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                About Me
              </a>
              <a
                href="/contact"
                class="py-4 px-2 text-navbarText font-semibold transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-300"
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
