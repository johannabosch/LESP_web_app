"use client";

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
      src: "/images/PIPL/survival.svg",
      left: "38%",
      top: "47%",
      info: "SURVIVAL OF BREEDERS",
      component: <SurvivalModel />,
    },
    {
      src: "/images/PIPL/population.svg",
      left: "8%",
      top: "66%",
      info: "POPULATION ABUNDANCE",
      component: <PopulationModel />,
    },
    {
      src: "/images/PIPL/reproductive.svg",
      left: "28%",
      top: "5%",
      info: "PRODUCTIVITY",
      component: <ProductivityModel />,
    },
    {
      src: "/images/PIPL/process.svg",
      left: "23%",
      top: "34%",
      info: "POPULATION PROCESS MODEL",
      component: <ProcessModel />,
    },
  ];


  // Handle clicking on an image to show/hide the corresponding card
  const handleImageClick = (index: number) => {
    // Toggle the card visibility by clicking the image again
    setClickedImage((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {/* Image section */}
      <div
        className="relative w-[1000px] h-[720px] graphic-container"
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
            onMouseEnter={() => setHoveredImage(index)} // Track hovered image
            onMouseLeave={() => setHoveredImage(null)}  // Reset hover state
            onClick={() => handleImageClick(index)}     // Toggle card on image click
            style={{
              left: image.left,
              top: image.top,
              transform: clickedImage === index
                ? 'scale(0.65)' // Shrinks on click
                : hoveredImage === index
                ? 'scale(0.62)' // Slight zoom on hover
                : 'scale(0.6)', // Default scale
              transformOrigin: 'top left',
              transition: 'transform 0.3s ease, filter 0.3s ease, 0.3s ease',
              cursor: 'pointer',

              // Apply different levels of blur depending on hover and click
              filter:
                clickedImage !== null && clickedImage !== index
                  ? 'blur(4px)' // Strong blur when an image is clicked
                  : hoveredImage !== null && hoveredImage !== index
                  ? 'blur(2px)' // Slight blur when hovering over another image
                  : 'none',     // No blur otherwise

              zIndex: clickedImage === index ? 2 : 1, // Bring clicked image to front
            }}
          />
        ))}
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
