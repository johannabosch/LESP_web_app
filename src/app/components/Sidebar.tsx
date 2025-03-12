import { useState } from "react";
import { View, Blocks, BookOpenText, TrendingUpDown, X, BrainCog } from "lucide-react";

// Boolean is called isOpen (expecting true/false for isOpen)
interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void; // Function to close the sidebar
}

// dropdown states for both menu items
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({
    aboutProject: false,
    visData: false,
  });

  // toggle function for each
  const toggleDropdown = (dropdown: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
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

        {/* Dropdown for about the proj tab */}
        <li>
          <button
            onClick= {() => toggleDropdown("aboutProject")}
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 w-full text-left"
          >
            <BrainCog className="inline-block mr-2 mb-2" />
            About the Project
            {/* Arrow for dropdown */}
            <svg
              className={`inline-block w-4 h-4 ml-2 transform transition-transform ${
                dropdowns.aboutProject ? "rotate-180" : ""
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

          {dropdowns.aboutProject && (
            <ul className="pl-8 mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <Blocks className="inline-block mr-2 mb-2" />
                  Model Schematic
                </a>
              </li>
              <li>
                <a
                  href="/IPM_page"
                  className="block py-2 pr-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <BookOpenText className="inline-block mr-2 mb-2" />
                  Full Manuscript
                </a>
              </li>
              
            </ul>
          )}
        </li>


        {/* Dropdown for model tab */}
        <li>`
          <button
            onClick= {() => toggleDropdown("visData")}
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 w-full text-left"
          >
            <View className="inline-block mr-2 mb-2" />
            Visualize Data
            {/* Arrow for dropdown */}
            <svg
              className={`inline-block w-4 h-4 ml-2 transform transition-transform ${
                dropdowns.visData ? "rotate-180" : ""
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

          {dropdowns.visData && (
            <ul className="pl-8 mt-2 space-y-2">

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
