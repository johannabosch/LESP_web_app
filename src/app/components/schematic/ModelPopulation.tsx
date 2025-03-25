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

  const sections = [
    {
      id: "S1",
      title: "Colony Census Data",
      content: (
        <div className="flex items-center">
          <div className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] min-w-[40vw] text-left">
            In the population model, breeding population size is estimated from plot-based colony surveys which extrapolate occupied burrow densities across study sites. These methods vary slightly by colony; some surveys stratify the breeding habitats for large colonies (<a href="https://doi.org/10.1017/S0959270919000248">Wilhelm et al., 2020</a>). To incorporate as much survey data as possible, the model uses population estimates from surveys conducted up to two years before and after the modeling period. Although this introduces a potential bias, it ensures that the model benefits from the widest range of available data. In years where population size is not directly estimated, the model uses a normal distribution based on survey data to constrain estimates, while the population size of younger, non-breeding individuals is modeled using a stable stage vector. This integrated approach helps produce a more robust and accurate population estimate, while still considering uncertainties and variations in the data.
          </div>

        </div>
      ),
    },
  ];

  return (

      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">

        <h1 className="text-[#940336]">Population Size Model</h1>

        <hr className="w-full border-t-2 border-gray-300 my-6" />

        <div className="bg-gray-100 rounded-lg p-4 m-[1vw]">
          <div className="flex flex-col justify-center items-start sm:flex-row">
            <p className="text-base w-[55vw]">
              <span className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] font-bold"></span>
                Newfoundland and Labrador hosts the largest breeding colonies of Leach’s Storm-petrel in the world (<a href="https://doi.org/10.1017/S0959270919000248">Wilhelm et al., 2020</a>), and surveys have documented substantial reductions in numbers, both in Newfoundland (<a href="https://www.researchgate.net/publication/285634086_Update_and_trends_of_three_important_seabird_populations_in_the_western_North_Atlantic_using_a_geographic_information_system_approach#fullTextFileContent">Wilhelm et al., 2015,</a> <a href="https://doi.org/10.1017/S0959270919000248">2020</a>) and other regions (<a href="https://www.ace-eco.org/vol15/iss1/art11/">d’Entremont et al., 2020</a>; <a href="https://doi.org/10.61350/sbj.31.75">Pollet & Shutler, 2019</a>). Due to these declines, Leach’s storm-petrel was classified as <strong>Vulnerable</strong> by the IUCN in 2016 and as <strong>Threatened</strong> by COSEWIC in 2020 for the Atlantic population, which has experienced over a 30% decrease in numbers over the last three generations. <br></br><br></br>Population size data is critical in understanding the status and dynamics of Leach's Storm-petrel populations, particularly in light of the significant declines observed across colonies in Atlantic Canada. Accurate population size estimates are essential for developing conservation strategies and assessing the health of the species. These data help inform demographic models that integrate key factors like breeding success, survival rates, and environmental impacts.
            </p>
          </div>
          </div>

        {/* Dropdown Sections */}
        {sections.map(({ id, title, content }) => (
          <div
            key={id}
            className="bg-[#C893B5] border-l-4 border-[#940336] mt-6 mx-5 transition-all duration-300 rounded-lg shadow-md relative"
          >
            <div
              className="flex justify-between items-center bg-[#940336] rounded-lg cursor-pointer px-[1vw]"
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

export default PopulationModel;
