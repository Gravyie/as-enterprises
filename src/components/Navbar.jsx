import React from 'react';

function NavBar() {
  return (
    <header className="bg-white py-4 px-6 border-b border-gray-100 font-inter">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">
          <a href="#" className="hover:text-gray-600 transition-colors">A S Enterprises</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-7">
            <li>
              <a href="#" className="relative text-gray-700 font-medium pb-1 transition-colors group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-700 font-medium pb-1 transition-colors group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-700 font-medium pb-1 transition-colors group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-700 font-medium pb-1 transition-colors group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (for future implementation) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
            {/* Placeholder for Menu icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
