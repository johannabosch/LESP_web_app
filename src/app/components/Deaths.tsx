"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCrow, faHouseFloodWater, faCity} from "@fortawesome/free-solid-svg-icons";

const sections = [
  { name: "Gull predation", key: "Gull predation", icon: faCrow }, // Use faPaw directly
  { name: "Fox predation", key: "Fox predation", icon: faPaw },
  { name: "Offshore mortalities", key: "Offshore mortalities", icon: faHouseFloodWater },
  { name: "Onshore mortalities", key: "Onshore mortalities", icon: faCity },
];

const Deaths: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Gull predation");

  return (
    <div className="space-y-4 flex flex-col justify-center items-center">
      <div className="w-[70vw] bg-[#addaf0] rounded-lg">
        <p className="text-md p-4 text-md"> Info here on vital rates results </p>
      </div>
      
      <div className="flex space-x-4 border-b pb-2">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className={`flex flex-col items-center px-4 py-2 rounded-t-lg text-gray-700 hover:bg-gray-100 ${
              activeSection === section.key ? "border-b-2 border-blue-500 font-semibold" : ""
            }`}
          >
            <FontAwesomeIcon icon={section.icon} size="lg" />
            {section.name}
          </button>
        ))}
      </div>
      
      {activeSection === "Gull predation" && (
        <>
          <h3>(Dpred)</h3>
          <object 
            data="/figures/Dpred all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
          
          <h3>(Hpred)</h3>
          <object 
            data="/figures/Hpred all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />

        </>
      )}
      
      {activeSection === "Fox predation" && (
        <>


        <h3>(Dflox)</h3>
          <object 
            data="/figures/Dflox all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />

        <h3>(Hflox)</h3>
        <object 
            data="/figures/Hflox all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />


        </>
      )}
      
      {activeSection === "Offshore mortalities" && (
        <>
          <h3>(Doffshore)</h3>
          <object 
            data="/figures/Doffshore all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
          
          <h3>(Hoffshore)</h3>
          <object 
            data="/figures/Hoff all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
        </>
      )}
      
      {activeSection === "Onshore mortalities" && (
        <>
          <h3>(Donshore)</h3>
          <object 
            data="/figures/Donshore all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
          
          <h3>(Honshore)</h3>
          <object 
            data="/figures/Hon all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
        </>
      )}
    </div>
  );
};

export default Deaths;
