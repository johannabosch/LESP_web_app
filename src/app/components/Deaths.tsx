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
          <iframe src="/figures/Dpred all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Dpred" />
          
          <h3>(Hpred)</h3>
          <iframe src="/figures/Hpred all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Hpred" />
        </>
      )}
      
      {activeSection === "Fox predation" && (
        <>
          <h3>(Dflox)</h3>
          <iframe src="/figures/Dflox all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Dflox" />
        
          <h3>(Hflox)</h3>
          <iframe src="/figures/Hflox all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Hflox" />
        </>
      )}
      
      {activeSection === "Offshore mortalities" && (
        <>
          <h3>(Doffshore)</h3>
          <iframe src="/figures/Doffshore all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Doffshore" />
          
          <h3>(Hoffshore)</h3>
          <iframe src="/figures/Hoff all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Hoffshore" />
        </>
      )}
      
      {activeSection === "Onshore mortalities" && (
        <>
          <h3>(Donshore)</h3>
          <iframe src="/figures/Donshore all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Donshore" />
          
          <h3>(Honshore)</h3>
          <iframe src="/figures/Hon all scenarios as frames plotly widget.html" 
          className="w-[70vw] h-[55vw] border rounded-lg shadow-md" title="Honshore" />
        </>
      )}
    </div>
  );
};

export default Deaths;
