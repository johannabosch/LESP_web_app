"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Home } from "lucide-react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col bg-white border-gray-200 py-2.5">
      <nav>
        <div className="flex w-full items-center justify-between mx-auto px-4">
         
          {/* Logo */}
          <a className="flex items-center">
            <img src="/logos/petrel_logo.png" className="mr-3 h-[80px]" alt="Logo" />

            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              DRAFT Website Name
            </span>
          </a>

          <div className = "flex items-center gap-4">
            <a href= "/">
                <Home className = "w-6 text-gray-700 hover:bg-gray-100 rounded-lg" />
            </a>

            {/* Hamburger Toggle */}
            <button
              type="button"
              className="ml-auto inline-flex text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path

                // section to create hamburger button - draws three horizontal lines to create the classic hamburger menu icon
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

        </div>

      </nav>

      {/* Sidebar with close button */}
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      

    
    </header>
  );
};

export default Header;
