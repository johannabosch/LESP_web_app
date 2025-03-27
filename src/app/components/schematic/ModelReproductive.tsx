"use client";

import React from "react";

const ReproductiveModel: React.FC = () => {


  const sections = [
    {
      id: "S1",
      title: "Fledging Success Data",
      content: (
        <div className="flex flex-col items-center">
          <span className="text-[13px] sm:text-[13px] md:text-[13px] lg:text-[15px] max-w-[50vw] text-left mb-10">
          Fledging success data in the model were based on the proportion of monitored nests that produced a chick that survived to fledgling. Productivity was modeled as a binomial, with unsampled years constrained using mean and standard deviation from monitored years. This data is typically collected through long-term nest monitoring at breeding sites, where researchers track active burrows each nesting season and record the number of chicks that successfully fledge. Researchers visit these sites multiple times throughout the season to monitor burrow productivity and document any failed burrows. </span>

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

      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">

        <h1 className="text-[#012259]">Reproductive Model</h1>

        <hr className="w-full border-t-2 border-gray-300 my-6" />

        <div className="bg-gray-100 rounded-lg p-4 m-[1vw]">

          <div className="flex flex-col justify-center items-start sm:flex-row">
            <p className="text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] w-[55vw] max-w-[1000px]">

              <span className="text-[#012259] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-bold">
                Storm-petrels only lay one egg per year, and their population growth is highly sensitive to changes in adult survival.
              </span>
              
              <br></br><br></br> Very little is known about the life history and demographics of Storm-petrels before they begin to breed. Therefore, age-specific data are not available for any parameter in our model. Among the younger cohorts that are not breeding, there are likely two types of individuals, <span className="font-bold">immatures</span> not physiologically or behaviourally capable of breeding, and <span className="font-bold">pre-breeders</span>, which are sexually mature birds that have not yet recruited into the breeding population. Productivity was one demographic parameter in our model that was measured directly using fledging success data. Here, productivity in year t at colony c(<strong>F<sub>tc</sub></strong>) is defined as the number of chicks reaching fledging age in year t at colony c (<strong>fledge<sub>t,c</sub></strong>) divided by the number of active burrows tracked annually in year t at colony c(<strong>nests<sub>t,c</sub></strong>), .
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

        {sections.map(({ id, title, content }) => (
          <div
            key={id}
            className="bg-[#B9D2FE] border-l-4 border-[#012259] mt-6 mx-5 transition-all duration-300 rounded-lg shadow-md relative">
            <div className="flex justify-between items-center bg-[#012259] rounded-lg cursor-pointer px-[1vw]">
              <h3 className="text-lg text-white font-semibold">{title}</h3>
            </div>

              <div className="mt-4 flex flex-col justify-between items-center">
                <div className="text-gray-700 px-[3vw] py-[1vw] w-full">{content}</div>
              </div>
            
          </div>
        ))}
      </div>
  );
};

export default ReproductiveModel;
