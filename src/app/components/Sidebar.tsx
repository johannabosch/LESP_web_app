import { useState } from "react";
import { Home, BarChart, Map, TrendingUpDown, X } from "lucide-react";

// Boolean is called isOpen (expecting true/false for isOpen)
interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void; // Function to close the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`fixed top-[80px] right-0 z-50 bg-white w-64 h-full shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close (X) Button inside Sidebar */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
      >
        <X size={15} />
      </button>

      <ul className="flex flex-col mt-12 font-medium">
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 dark:text-white"
            aria-current="page"
          >
            <Home className="inline-block mr-2 mb-2" />
            Homepage
          </a>
        </li>

        {/* Dropdown for Visualize Data tab */}
        <li>
          <button
            onClick={toggleDropdown}
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 w-full text-left"
          >
            <BarChart className="inline-block mr-2 mb-2" />
            Visualize Data
            {/* Arrow for dropdown */}
            <svg
              className={`inline-block w-4 h-4 ml-2 transform transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="pl-8 mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <Map className="inline-block mr-2 mb-2" />
                  GPS/GLS Tracking
                </a>
              </li>
              <li>
                <a
                  href="/IPM_page"
                  className="block py-2 pr-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <TrendingUpDown className="inline-block mr-2 mb-2" />
                  Population Modelling
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
