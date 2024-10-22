"use client";

import React, { useState, useEffect } from 'react';

// components for each model
import SurvivalModel from '@/app/components/schematic/ModelSurvival';
import PopulationModel from '@/app/components//schematic/ModelPopulation';
import ProductivityModel from '@/app/components//schematic/ModelReproductive';
import ProcessModel from '@/app/components/schematic/ModelProcess';

const IPMGraphic: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [clickedImage, setClickedImage] = useState<number | null>(null);

  const imageGroups = [
    {src: "/images/PIPL/survival.svg", left: "38%", top: "47%", info: "SURVIVAL OF BREEDERS", component: <SurvivalModel />,},
    {src: "/images/PIPL/population.svg", left: "8%", top: "66%", info: "POPULATION ABUNDANCE", component: <PopulationModel />, },
    {src: "/images/PIPL/reproductive.svg", left: "28%", top: "5%", info: "PRODUCTIVITY", component: <ProductivityModel />,},
    {src: "/images/PIPL/process.svg", left: "23%", top: "34%", info: "POPULATION PROCESS MODEL", component: <ProcessModel />,},
  ];

  // handel clicking on an image to show/hide the corresponding card
  const handleImageClick = (index: number) => {
    // toggle the card visibility by clicking the image again
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
            onMouseEnter={() => setHoveredImage(index)} // track hovered image
            onMouseLeave={() => setHoveredImage(null)}  // reset hover state
            onClick={() => handleImageClick(index)}     // toggle card on imge click
            style={{
              left: image.left,
              top: image.top,
              transform: clickedImage === index
                ? 'scale(0.65)' // shrinks on click
                : hoveredImage === index
                ? 'scale(0.62)' // slight zoom on hovre
                : 'scale(0.6)', // default scale
              transformOrigin: 'top left',
              transition: 'transform 0.3s ease, filter 0.3s ease, 0.3s ease',
              cursor: 'pointer',

              // apply different levels of blur depending on hover and click
              filter:
                clickedImage !== null && clickedImage !== index
                  ? 'blur(4px)' // strong blur when an image is clicked
                  : hoveredImage !== null && hoveredImage !== index
                  ? 'blur(2px)' // slight blur when hovering over another image
                  : 'none',     // no blur otherwise

              zIndex: clickedImage === index ? 2 : 1, // bring clicked image front
            }}
          />
        ))}
      </div>

      {/* display the detailed component below based on clicked image */}
      <div className="relative bottom-[40px]">
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
