"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SurvivalModel: React.FC = () => {
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
      title: "Mark-recapture Data",
      content: (
        <div className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px]">
          <span>
            To estimate survival, we utilized capture-mark-recapture (CMR) data collected over two decades from six breeding colonies. This approach involves banding individuals and tracking their presence or absence across multiple years, creating a binary detection history (1 = seen, 0 = not seen) that enables robust statistical inference on survival probabilities (<a href="https://www.jstor.org/stable/2990245">Lebreton et al., 1992</a>). Each year, researchers capture adult storm-petrels, apply unique identifiers (bands, aka. rings), and release them back into their natural habitat. These birds are then re-captured in subsequent years during the breeding season, providing valuable data on survival rates, movement patterns, and site fidelity.
          </span>
  
          <div className="flex flex-wrap justify-between mt-6 text-base text-gray-600 gap-0">
            <figure className="w-[15vw]">
              <img
                src="/images/model/mark_recapture.jpg"
                className="w-full border border-white border-2 rounded-lg"
              />
              <figcaption> Banding Storm-petrels in the field</figcaption>
            </figure>
            <figure className="w-[15vw] sm:w-[15vw] md:w-[15vw] lg:w-[15vw]">
              <img
                src="/images/model/banding_pliers.jpg"
                className="w-full border border-white border-2 rounded-lg"
              />
              <figcaption> Banding pliers</figcaption>
            </figure>
            <figure className="w-[15vw]">
              <img
                src="/images/model/banding_petrel.jpg"
                className="w-full border border-white border-2 rounded-lg"
              />
              <figcaption> Storm-petrel bander's grip </figcaption>
            </figure>
          </div>
  
          <br />
          <span className = "text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px]">
            CMR-based survival estimates were integrated into our model by constraining modeled survival (S3,t) to the empirical estimates and incorporating associated uncertainty using logit-transformed survival values. Given the geographic spread of the colonies and variation in local pressures such as predation and contamination, these data offered critical insights into spatial differences in survival. By comparing survival trends across colonies, we could identify site-specific threats like increased predation, as well as broader regional stressors such as offshore industrial activity or environmental contaminants. The integration of CMR data into the model deepened our understanding of the factors driving survival declines and their potential impact on population dynamics.
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="px-10">
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">
        <h1 className="text-[#7257B0]">Survival Model</h1>
        <hr className="w-full border-t-2 border-gray-300 my-6" />
        <div className="bg-gray-100 rounded-lg p-4 m-[1vw]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] w-[55vw]">
            Given adult survival rates of Leahc's Storm-petrels are well below expected levels (<a>Fife et al., 2015</a>; <a>Pollet, Bond, et al., 2019</a>), understanding the demographic drivers of these declines is crucial. Survival is a key demographic parameter influencing population trajectories, particularly for long-lived seabirds like Leach’s Storm-petrel, where even small reductions in adult survival can have significant impacts on colony viability. Because these birds spend most of their lives at sea and return to breeding colonies only during the nesting season, direct observations of mortality are rare, making survival estimation a complex but essential process. By modeling survival rates over time using capture-mark-recapture data, we can assess trends, identify potential threats, and quantify the impact of environmental and anthropogenic pressures on population persistence. </p>
          </div>
        </div>


        {/* Dropdown Sections */}
        {sections.map(({ id, title, content }) => (
          <div
            key={id}
            className="bg-[#D7CEE8] border-l-4 border-[#7257B0] mt-6 mx-5 transition-all duration-300 rounded-lg shadow-md relative"
          >
            <div
              className="flex justify-between items-center bg-[#7257B0] rounded-lg cursor-pointer p-[1vw]"
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
    </div>
  );
};

export default SurvivalModel;
