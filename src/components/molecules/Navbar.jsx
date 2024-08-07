function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            Logo
          </a>
        </div>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
