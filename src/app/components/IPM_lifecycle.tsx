"use client"; // enables Next.js client-side rendering

import React, { useState } from 'react';

const IPM_lifecycle: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const lifecycleImages = [
    { src: "/images/model/lifecycle_n2.svg", width: "150px", height: "auto", left: "51%", top: "30%", info: "Abundance of breeders (i.e., available to census)" },
    { src: "/images/model/lifecycle_mid.svg", width: "150px", height: "auto", left: "27%", top: "35%", info: "Info for Mid" },
    { src: "/images/model/lifecycle_n1.svg", width: "150px", height: "auto", left: "2%", top: "30%", info: "Abundance of non-breeders (unobservable)" },
    { src: "/images/model/lifecycle_tl.svg", width: "auto", height: "130px", left: "10%", top: "4%", info: "Info for TL" },
    { src: "/images/model/lifecycle_tr.svg", width: "140px", height: "auto", left: "58%", top: "4%", info: "Info for TR" },
    { src: "/images/model/lifecycle_bl.svg", width: "150px", height: "auto", left: "2%", top: "55%", info: "Info for BL" },
    { src: "/images/model/lifecycle_br.svg", width: "150px", height: "auto", left: "52%", top: "56%", info: "Info for BR" }
  ];

  const [showProbabilities, setShowProbabilities] = useState(false); // state for dropdown

  const toggleProbabilities = () => {
    setShowProbabilities(prev => !prev);  // toggle the visibility of dropdown
  };

  return (
    <div className="relative w-[600px] h-[400px] my-[30px]">
      {lifecycleImages.map((image, index) => (
        <div key={index} className="absolute" style={{ left: image.left, top: image.top }}>
          <img
            src={image.src}
            alt={image.info}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
            style={{
              width: image.width,
              height: image.height,
              transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          />
        </div>
      ))}

      {/* Info box positioned at the bottom right of the container */}
      <div className="absolute bg-white text-black text-lg p-1 w-[20vw] shadow-md"
        style={{ bottom: '10px', right: '10px', zIndex: 1000 }}>
        {hoveredImage !== null ? lifecycleImages[hoveredImage].info : "Hover over a part of the diagram for more info"}
      </div>

      {/* Button to toggle the probabilities legend */}
      <button 
        onClick={toggleProbabilities} 
        className="btn btn-ghost font-bold absolute text-md top-4 right-2 z-50 border border-black">
        {showProbabilities ? 'Hide Legend ▲' : 'Show Legend ▼'}
      </button>

      {showProbabilities && (
        <div className="absolute top-[3.5vw] left-[28vw] bg-white p-2 w-[250px] shadow-md">
          <img src="/images/model/probabilities_legend.svg" alt="Probabilities Legend" className="w-auto h-auto" />
        </div>
      )}
    </div>
  );
};

export default IPM_lifecycle;
