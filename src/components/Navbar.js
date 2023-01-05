function Navbar() {
  return (
    <nav class="bg-navbar shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="/" class="flex items-center py-4 px-2">
                <img src="CBM.png" alt="Logo" class="h-10 w-10 mr-2" />
                <span class="font-semibold text-white text-lg">
                  Cynthia Brito-Mena
                </span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a
                href="/"
                class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
              >
                Home
              </a>
              <a
                href="/"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Projects
              </a>
              <a
                href="/"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About Me
              </a>
              <a
                href="/"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
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
