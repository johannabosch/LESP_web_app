"use client"; // enables Next.js client-side rendering

import React, { useState, useEffect } from 'react'; 

// Importing individual components for each model
import SurvivalModel from './ModelSurvival';
import MortalityModel from './ModelMortality';
import PopulationModel from './ModelPopulation';
import ProductivityModel from './ModelReproductive';
import ProcessModel from './ModelProcess';


const IPMGraphic: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  const imageGroups = [
    {
      src: "/images/mortality.svg",
      left: "48%",
      top: "15%",
      info: "OBSERVABLE MORTALITY",
      component: <MortalityModel />,
    },

    {
      src: "/images/survival.svg",
      left: "41%",
      top: "48%",
      info: "SURVIVAL OF BREEDERS",
      component: <SurvivalModel />,
    },
    {
      src: "/images/population.svg",
      left: "15.5%",
      top: "67%",
      info: "POPULATION ABUNDANCE",
      component: <PopulationModel />,
    },
    {
      src: "/images/reproductive.svg",
      left: "32%",
      top: "10%",
      info: "PRODUCTIVITY",
      component: <ProductivityModel />,
    },
    {
      src: "/images/process.svg",
      left: "29.5%",
      top: "40%",
      info: "POPULATION PROCESS MODEL",
      component: <ProcessModel />,
    },
  ];

  // Reset clicked image when clicking outside the images
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const container = document.querySelector(".graphic-container");
      if (container && !container.contains(event.target as Node)) {
        setClickedImage(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Reset function for the button
  const resetSelection = () => {
    setClickedImage(null); // Unselect the clicked image
  };

  return (
    <div>
      <div
        className="relative w-[1000px] h-[600px] graphic-container"
        style={{
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {imageGroups.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Overlay image ${index}`}
            className="absolute w-auto h-auto"
            onMouseEnter={() => setHoveredImage(index)}  // Track hovered image
            onMouseLeave={() => setHoveredImage(null)}   // Reset hover state
            onClick={(e) => {
              e.stopPropagation();
              setClickedImage(index);
            }}
            style={{
              left: image.left,
              top: image.top,
              transform: clickedImage === index ? 'scale(0.5)' : 'scale(0.45)',
              transformOrigin: 'top left',
              transition: 'transform 0.3s ease, filter 0.3s ease',
              cursor: 'pointer',

              // Apply different levels of blur depending on hover and click
              filter:
                clickedImage !== null && clickedImage !== index
                  ? 'blur(8px)' // Strong blur when an image is clicked
                  : hoveredImage !== null && hoveredImage !== index
                  ? 'blur(3px)'  // Slight blur when hovering over another image
                  : 'none',      // No blur otherwise

              zIndex: clickedImage === index ? 2 : 1, // Bring clicked image to front
            }}
          />
        ))}

        {/* Reset button in the bottom right corner */}
        <button
          onClick={resetSelection}
          className="absolute bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>

      {/* Display the detailed component below based on clicked image */}
      <div className="mt-8">
        {clickedImage !== null && (
          <div>
            {imageGroups[clickedImage].component}
          </div>
        )}
      </div>
    </div>
  );
};

export default IPMGraphic;
