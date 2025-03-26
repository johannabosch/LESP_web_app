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
      <div className = "w-[80vw] max-w-[1000px] bg-[#addaf0] rounded-lg"  >
        <p className="text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] p-4 text-md"> Mortality estimates for petrels were categorized into two main sources: predation-related deaths (including gull predation on colonies and fox kills at off-colony headlands) and lighted-structure-related deaths (strandings at offshore and onshore locations). The model allocated total mortality to stage-specific estimates for each colony. Various scenarios were explored to account for uncertainty in reported mortality data, with scaling factors applied to adjust the reported mortality numbers for different sources. To read more about the model parameters, visit the <a href="/model-schematic">model schematic</a> page. <br /><br /> 
        
        <strong>RESULTS:</strong> Predation mortality was highest at Bon Portage and Kent Islands, with significant mortality from gulls. Fox predation off colonies was relatively low but contributed to mortality in Newfoundland colonies, particularly during the breeding season. Mortality from lighted structures was higher in Newfoundland colonies, with Baccalieu Island and Gull Island showing significant strandings. Mortality rates from strandings were generally low, with substantial variation across colonies. For more detailed results, refer to the <a href="/manuscript">full manuscript</a>.</p> </div>
      
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
          <h3>Modeled Number of Individuals Killed by Gull Predation</h3>
          <object 
            data="/figures/Dpred all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
          
          <h3>Modeled Annual Mortailty Rate from Gull Predation</h3>
          <object 
            data="/figures/Hpred all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />

        </>
      )}
      
      {activeSection === "Fox predation" && (
        <>


        <h3>Modeled Number of Individuals Killed by Fox Predation</h3>
          <object 
            data="/figures/Dflox all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />

        <h3>Modeled Annual Mortailty Rate from Fox Predation</h3>
        <object 
            data="/figures/Hflox all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />


        </>
      )}
      
      {activeSection === "Offshore mortalities" && (
        <>
          <h3>Modeled Number of Individuals Killed by Offshore Lighting</h3>
          <object 
            data="/figures/Doffshore all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
          
          <h3>Modeled Annual Mortailty Rate from Offshore Lighting</h3>
          <object 
            data="/figures/Hoff all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
        </>
      )}
      
      {activeSection === "Onshore mortalities" && (
        <>
          <h3>Modeled Number of Individuals Killed by Onshore Lighting</h3>
          <object 
            data="/figures/Donshore all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
          
          <h3>Modeled Annual Mortailty Rate from Onshore Lighting</h3>
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
