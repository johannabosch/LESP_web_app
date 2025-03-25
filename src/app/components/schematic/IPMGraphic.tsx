"use client";

import React, { useState } from "react";

// Components for each model
import SurvivalModel from "@/app/components/schematic/ModelSurvival";
import PopulationModel from "@/app/components/schematic/ModelPopulation";
import ProductivityModel from "@/app/components/schematic/ModelReproductive";
import ProcessModel from "@/app/components/schematic/ModelProcess";
import MortalityModel from "@/app/components/schematic/ModelMortality";

const IPMGraphic: React.FC = () => {

    // State for legend dropdown visibility
    const [showLegend, setShowLegend] = useState(false);

    // Toggle the legend dropdown
    const toggleLegend = () => {
      setShowLegend(!showLegend);
    };

  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  const imageGroups = [
    { src: "/images/model/observed_deaths.png", left: "50%", top: "5%", width: "400px", info: "MORTALITY MODEL", component: <MortalityModel /> },
    { src: "/images/model/survival.png", left: "42.5%", top: "44%", width: "500px", info: "SURVIVAL OF BREEDERS", component: <SurvivalModel /> },
    { src: "/images/model/reproductive.png", left: "32%", top: "1%", width: "160px", info: "PRODUCTIVITY", component: <ProductivityModel /> },
    { src: "/images/model/population.png", left: "11%", top: "65%", width: "340px", info: "POPULATION ABUNDANCE", component: <PopulationModel /> },
    { src: "/images/model/process.png", left: "32%", top: "35%", width: "500px",  info: "POPULATION PROCESS MODEL", component: <ProcessModel /> },

  ];

  const handleImageClick = (index: number) => {
    setClickedImage((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center">
      
      <div 
        className="relative flex justify-center items-center border border-grey-700 rounded-lg shadow-lg" 
        style={{ width: "1000px", height: "650px"}}>

        {imageGroups.map((image, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: image.left,
              top: image.top,
              cursor: "pointer",
              zIndex: clickedImage === index ? 2 : 1,
            }}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={`Overlay image ${index}`}
              style={{
                width: image.width,
                transform: clickedImage === index ? "scale(0.9)" : hoveredImage === index ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.3s ease, filter 0.3s ease",
                filter: clickedImage !== null && clickedImage !== index ? "blur(4px)" : hoveredImage !== null && hoveredImage !== index ? "blur(2px)" : "none",
              }}
            />
          </div>
        ))}

        {/* Legend Button - Positioned at Bottom Right */}
        <div className="absolute bottom-3 right-3">
          <button
            onClick={toggleLegend}
            className="font-bold text-black bg-[#F6F6F6] text-[8px] sm:text-[8px] md:text-[11px] lg:text-[11px] w-[180px] rounded-lg border border-grey-700 p-2 hover:shadow-lg"
          >
            {showLegend ? "HIDE LEGEND" : "SHOW LEGEND"}
          </button>
        </div>

        {/* Legend Image - Positioned Close to the Button */}
        {showLegend && (
          <div className="absolute bottom-[60px] right-4 bg-white p-2 shadow-md z-50">
            <img
              src="/images/model/legend.png"
              alt="PIPL Legend"
              className="w-[400px] h-auto"
            />
          </div>
        )}
      </div>


      {/* Detailed component (completely outside & below the image div) */}
      {clickedImage !== null && (
        <div className="mt-6 bg-white p-4">
          {imageGroups[clickedImage].component}
        </div>
      )}
    </div>
  );
};

export default IPMGraphic;
