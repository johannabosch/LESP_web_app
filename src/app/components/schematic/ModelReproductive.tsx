"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ReproductiveModel: React.FC = () => {
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
      title: "Fledging Success Data",
      content: (
        <div className="flex items-center">
          <div className="text-base max-w-[50vw] text-left">
            Fledging success data in the model were based on the probability of females reaching stage 3 (fledging) in a given year and colony. This probability was derived from the proportion of monitored nests that produced a fledging-aged chick. Productivity was modeled as a binomial, with additional years of no data constrained using mean and standard deviation from monitored years. Read the <a>full manuscript</a> to learn more about the model parameters.
            <br></br><br></br>
            This data is typically collected through long-term nest monitoring at breeding sites, where researchers track active burrows each nesting season and record the number of chicks that successfully fledge. Researchers visit these sites multiple times throughout the season to monitor burrow productivity and document any failed burrows.
          </div>
          <div className="ml-6">
          <figure className="text-center text-sm text-bold ">
            <img
              src="/images/model/baccalieu.jpg"
              className="w-[20vw] sm:w-[25vw] lg:w-[50vw] border border-white border-2 rounded-lg"
            />
            <figcaption className="text-sm text-gray-600 mt-2">Storm-petrel nesting habitat on Baccalieu Island, Newfoundland</figcaption>
          </figure>

          </div>
        </div>
      ),
    },
  ];

  const imageData = [
    { src: "/images/model/petrel_egg.jpg", caption: "Petrel egg" },
    { src: "/images/model/young_petrel.jpg", caption: "Young petrel" },
    { src: "/images/model/juvenile_petrel.jpg", caption: "Juvenile stage" },
    { src: "/images/model/adult_petrel.jpg", caption: "Adult petrel" },
  ];

  return (
    <div className="px-10">
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">
        <h1 className="text-[#012259]">Reproductive Model</h1>
        <hr className="w-full border-t-2 border-gray-300 my-6" />
        <div className="bg-gray-100 rounded-lg p-4 m-[1vw]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm max-w-[63vw]">
              <span className="text-base font-bold max-w-[10vw]">
                Storm-petrels only lay one egg per year, and their population growth is highly sensitive to changes in adult survival.
              </span>
              <br></br> Very little is known about the life history and demographics of Storm-petrels before they begin to breed. Therefore, age-specific data are not available for any parameter in our model. Among the younger cohorts that are not breeding, there are likely two types of individuals, <span className="font-bold">immatures</span> not physiologically or behaviourally capable of breeding, and <span className="font-bold">pre-breeders</span>, which are sexually mature birds that have not yet recruited into the breeding population. Based on studies that suggest the mean breeding age is around 6 and that birds start breeding at about 4 years of age (<a>I. L. Pollet</a>, <a>Bond, et al., 2019</a>), we categorize immatures as birds up to three years of age, while pre-breeders are individuals that are four years and older and have not yet bred; birds are categorized as breeding once they start breeding and remain there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {imageData.map(({ src, caption }, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-lg border-4 border-white p-2">
                <a href={src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt={caption}
                    className="w-[14vw] sm:w-[20vw] lg:w-[20vw] rounded-lg "
                  />
                </a>
                <p className="text-lg mb-0 text-gray-600 font-bold mt-2 max-w-[18vw]">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dropdown Sections */}
        {sections.map(({ id, title, content }) => (
          <div
            key={id}
            className="bg-[#B9D2FE] border-l-4 border-[#012259] mt-6 mx-5 transition-all duration-300 rounded-lg shadow-md relative"
          >
            <div
              className="flex justify-between items-center bg-[#012259] rounded-lg cursor-pointer p-[1vw]"
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

export default ReproductiveModel;
