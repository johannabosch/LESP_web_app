import React, { useState } from "react";
import { Collapse } from "flowbite";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpenItem1, setIsDropdownOpenItem1] = useState(false);
  const [isDropdownOpenItem2, setIsDropdownOpenItem2] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleDropdownItem1 = () => {
    setIsDropdownOpenItem1(!isDropdownOpenItem1);
    setIsDropdownOpenItem2(false); // Close other dropdown
  };

  const toggleDropdownItem2 = () => {
    setIsDropdownOpenItem2(!isDropdownOpenItem2);
    setIsDropdownOpenItem1(false);
  };


  return (
    <nav className="fixed z-50 w-full bg-transparent">
      <div className="w-full flex items-center justify-between mx-auto 
      p-4 sm:p-4 md:p-10 lg:p-10 xl:p-10">
        {/* Logo on the left */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center font-semibold whitespace-nowrap dark:text-white
          text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
            Leach's Storm Petrel</span>
        </a>

        {/* Buttons on the right */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            text-sm sm:text-sm md:text-lg lg:text-xl "
          >
            VISUALIZE RESULTS
          </button>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-white rounded-lg hover:text-blue-800"
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
          className="fixed w-30 px-[0px] bg-white rounded-lg z-50 right-0 mx-10
          dark:bg-gray-800 dark:border-gray-700"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 bg-transparent rounded-lg">
            <li>
              <button
                onClick={toggleDropdownItem1}
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 
                hover:font-bold dark:hover:bg-gray-600 dark:hover:text-white
                text-md sm:text-md md:text-lg lg:text-lg"
                aria-expanded={isDropdownOpenItem1}
              >
                Population Modeling
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpenItem1 && (
                <div
                  id="dropdownNavbar"
                  className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 mx-5"
                  aria-hidden={!isDropdownOpenItem1}
                >
                  <ul className="text-md text-gray-700 dark:text-gray-200 px-2">
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-900 hover:font-bold hover:font-bold dark:text-white
                        text-md sm:text-md md:text-lg lg:text-lg"
                      >
                        About the model
                      </a>
                    </li>
                  </ul>
                  <ul className="text-md text-gray-700 dark:text-gray-200 px-2">
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-900 hover:font-bold hover:font-bold dark:text-white
                        text-md sm:text-md md:text-lg lg:text-lg"
                      >
                        Visualise the results
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>


            <li>
              <button
                onClick={toggleDropdownItem2}
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600
                text-md sm:text-md md:text-lg lg:text-lg"
                aria-expanded={isDropdownOpenItem2}
              >
                Distribution
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpenItem2 && (
                <div
                  id="dropdownNavbar"
                  className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 mx-5"
                  aria-hidden={!isDropdownOpenItem2}
                >
                  <ul className="text-md text-gray-700 dark:text-gray-200 px-2">
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-900 hover:font-bold hover:font-bold dark:text-white
                        text-md sm:text-md md:text-lg lg:text-lg"
                      >
                        GPS/GLS Tracking
                      </a>
                    </li>
                  </ul>
                  <ul className="text-md text-gray-700 dark:text-gray-200 px-2">
                    <li>
                      <a
                        href="#"
                        className="block py-2 text-gray-900 hover:font-bold hover:font-bold dark:text-white
                        text-md sm:text-md md:text-lg lg:text-lg"
                      >
                        Map
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>


            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 
                hover:font-bold hover:font-bold dark:text-white dark:hover:bg-gray-700
                text-md sm:text-md md:text-lg lg:text-lg"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 
                hover:font-bold hover:font-bold dark:text-white dark:hover:bg-gray-700
                text-md sm:text-md md:text-lg lg:text-lg"
              >
                Acknowledgments
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;