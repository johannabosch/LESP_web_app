"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MortalityModel: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    S1: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      id: "S1",
      title: "Lighted Structures Data",
      content: (
               <div className="flex flex-col items-center">
               <div className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] w-[55vw] text-left mb-5">
               Light pollution from human infrastructure is a growing conservation concern, particularly for nocturnal seabirds like storm-petrels. Offshore oil and gas platforms, as well as coastal developments, produce bright artificial light that can disorient birds, leading to collisions, exhaustion, and increased predation risk. This phenomenon, known as light-induced stranding, has been documented offshore, where birds become trapped on brightly lit structures (<a>Gjerdrum et al., 2021</a>), and onshore, where fledglings are drawn to coastal lights and become grounded. To integrate this source of mortality into our model, we accounted for observable mortality from lighted structures by incorporating reported stranding data into stage-structured survival estimates. The proportion of stranded individuals was linked to adult mortality after subtracting estimated survival from breeder populations (<a>Calvert et al., 2024</a>). Mortality rates due to light-induced stranding were then scaled relative to estimated population sizes at each time period, allowing us to assess the impact of artificial lighting across different life stages. This approach enables a more comprehensive understanding of how light pollution contributes to storm-petrel mortality and informs potential mitigation measures.

               </div>
               <div className="ml-6 flex flex-row gap-2 w-[50vw] ">
               <figure className="text-center text-sm text-bold ">
                 <img
                   src="/images/model/offshore_lighting.jpg"
                   className="border border-white border-2 rounded-lg"
                 />
                 <figcaption className="text-sm text-gray-600 mt-2"> <span className="text-base sm:text-base md:text-base lg:text-lg font-bold">Drilling vessel </span><br></br>(offshore lighted structure)</figcaption>
               </figure>
               <figure className="text-center text-sm text-bold ">
                 <img
                   src="/images/model/onshore_lighting.jpg"
                   className="border border-white border-2 rounded-lg"
                 />
                 <figcaption className="text-sm text-gray-600 mt-2"> <span className="font-bold text-base sm:text-base md:text-base lg:text-lg">Fishplant (foreground) and city (background) </span><br></br>(onshore lighted structures)</figcaption>
               </figure>
     
               </div>
             </div>
      ),
    },
    {
      id: "S2",
      title: "Predation Data",
      content: (
        <div className="flex flex-col items-center">
          <div className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] w-[55vw] text-left">
            Predation is another significant source of mortality, particularly at breeding colonies. While Leach’s Storm-petrel colonies were historically free of mammalian predators, introduced foxes and expanding gull populations have increasingly targeted nesting sites (<a>Bond et al., 2023</a>; <a>I. L. Pollet</a>, <a>Lenske, et al., 2023</a>). Gulls are known to prey on both adult petrels and chicks, while foxes can devastate entire burrow systems, leading to significant local population declines. In our model, predation mortality was incorporated by estimating reported kills and linking them to stage-specific mortality rates. Specifically, observed predation rates were divided by the estimated population size at each time period, and for post-fledging mortality, we used the product of productivity (Ft) and breeder population size to estimate the total number of fledglings at risk. By incorporating both reported and estimated predation impacts, our model captures the variability in predation pressure across different colonies and years. These findings emphasize the importance of ongoing monitoring and mitigation strategies, particularly at colonies with high predation pressure, to support the conservation of Leach’s Storm-petrel populations.
          </div>
          <div className="ml-6 flex flex-row gap-2 w-[50vw] mt-5">
            <figure className="text-center text-sm font-bold flex flex-col items-center">
              <img
                src="/images/model/gull_NL.jpg"
                className="border border-white border-2 rounded-lg w-[50vw] object-cover"
              />
              <figcaption className="text-sm text-gray-600 mt-2">
                <span className="text-base font-bold">Black-backed gull, Gull Island, Newfoundland </span>
                <br></br>(<span className="italic">Larus marinus</span>)
              </figcaption>
            </figure>

            <figure className="text-center text-sm font-bold flex flex-col items-center">
              <img
                src="/images/model/fox_NL.png"
                className="border border-white border-2 rounded-lg w-[50vw] object-cover"
              />
              <figcaption className="text-sm text-gray-600 mt-2">
                <span className="font-bold text-base">Red Fox, Newfoundland </span>
                <br></br>(<span className="italic">Vulpes vulpes deletrix</span>)
              </figcaption>
            </figure>
          </div>

        </div>
      ),
    },
  ];


  return (

      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">

        <h1 className="text-[#EC7D33]">Observed Deaths Model</h1>

        <hr className="w-full border-t-2 border-gray-300 my-6" />

        <div className="bg-gray-100 rounded-lg p-4 m-[1vw]">
          <div className="flex flex-col justify-center items-start sm:flex-row">
            <span className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] w-[55vw]">
            Observed mortality in Leach’s Storm-petrels is a critical factor in understanding population declines, particularly given the species’ life-history strategy, which relies on high adult survival for stability (<a>Hamer et al., 2001</a>; <a>Schreiber & Burger, 2001</a>). Two key drivers of mortality identified in the region are predation at breeding colonies and attraction to artificial light sources. Avian and mammalian predation, particularly by gulls and foxes, has been recognized as a primary onshore threat, with colony-specific impacts (<a>Bond et al., 2023</a>; <a>I. L. Pollet</a>, <a>Lenske, et al., 2023</a>). Meanwhile, light pollution from offshore installations and coastal infrastructure contributes to strandings, further exacerbating mortality risks (<a>Gjerdrum et al., 2021</a>). These threats, along with broader-scale environmental stressors such as mercury contamination and shifting prey availability, underscore the importance of integrating diverse data sources — including colony-based surveys, capture-mark-recapture programs, and stranding records—into population models to assess long-term viability and inform conservation strategies.
            </span>
          </div>
        </div>


        {/* Dropdown Sections */}
        {sections.map(({ id, title, content }) => (
          <div
            key={id}
            className="bg-[#F3AF81] border-l-4 border-[#EC7D33] mt-6 mx-5 transition-all duration-300 rounded-lg shadow-md relative"
          >
            <div
              className="flex justify-between items-center bg-[#EC7D33] rounded-lg cursor-pointer p-[1vw]"
              onClick={() => toggleSection(id)}
            >
              <h3 className="text-lg text-white font-semibold">{title}</h3>
              {openSections[id] ? (
                <ChevronUp size={20} className="text-white" />
              ) : (
                <ChevronDown size={20} className="text-white" />
              )}
            </div>

            {openSections[id] && (
              <div className="mt-4 flex flex-col justify-between items-center">
                <div className="text-gray-700 px-[3vw] py-[1vw] w-full">
                  {content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default MortalityModel;
