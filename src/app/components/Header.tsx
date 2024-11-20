import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-50 w-full bg-transparent">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo on the left */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        {/* Buttons on the right */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            VISUALIZE RESULTS
          </button>

          <button
            data-collapse-toggle="navbar-cta"
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 bg-transparent rounded-lg z-50 
          dark:bg-gray-800 dark:border-gray-700"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 bg-transparent rounded-lg">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900
                hover:font-bold hover:text-white
                dark:text-white dark:hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 
                hover:font-bold hover:text-white
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 
                hover:font-bold hover:text-white
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 
                hover:font-bold hover:text-white
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
