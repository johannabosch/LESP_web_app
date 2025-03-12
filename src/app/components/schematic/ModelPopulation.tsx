"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PopulationModel: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    S1: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="px-10">
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">
        <h1 className="text-[#940336]">Population Size Model</h1>
        <hr className="w-full border-t-2 border-gray-300 my-6" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-base text-gray-700 max-w-[50vw] text-center mb-4">
            This paragraph will introduce the model for plovers, including some
            information about current population sizes for plovers and their
            vulnerability.
          </p>
        </div>

        {/* Dropdown Sections */}
        {[ 
          {
            id: "S1",
            title: "Colony Census Data",
            content:
              "This dataset includes stranding data collected from offshore lighted structures, which has been identified as a significant mortality factor for plovers.",
            imageHref: "/images/model/offshore_lighting.jpg", // Link to your image page or external URL
          },
        ].map(({ id, title, content, imageHref }) => (
          <div
            key={id}
            className="bg-[#C893B5] border-l-4 border-[#940336] mt-6 mx-5 transition-all duration-300 rounded-lg shadow-md relative"
          >
            <div
              className="flex justify-between items-center bg-[#940336] rounded-lg cursor-pointer p-[1vw]"
              onClick={() => toggleSection(id)}
            >
              <h3 className="text-lg text-white font-semibold">{title}</h3>
              {openSections[id] ? <ChevronUp size={20} className="text-white" /> : <ChevronDown size={20} className="text-white" />}
            </div>

            {openSections[id] && (
              <div className="mt-4 flex justify-between items-center">
                <div className="text-gray-700 px-[3vw] py-[1vw] w-full">
                  <p className="text-base">{content}</p>
                </div>
                <a href={imageHref} target="_blank" rel="noopener noreferrer" className="m-[1vw]">
                  <img
                    src={imageHref}
                    alt={title}
                    className="w-[18vw] rounded-lg border-4 border-white"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulationModel;
