"use client";

import React, { useState } from 'react';

const IPM_matrix: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const matrixImages = [
    { src: "/images/model/abundance_t.svg", width: "auto", height: "140px", left: "82%", top: "10%", info: "Put some info here for the Abundance (t) part of the equation", overlay: false },
    { src: "/images/model/abundance_t1.svg", width: "auto", height: "140px", left: "6%", top: "10%", info: "Put some info here for the Abundance (t+1) part of the equation", overlay: false },
    { src: "/images/model/transition.svg", width: "auto", height: "140px", left: "28%", top: "10%", info: "Put some info here for the Transition part of the equation", overlay: false },
    { src: "/images/model/equation.svg", width: "auto", height: "110px", left: "9%", top: "20%", info: "Population projection matrix equation", overlay: true }
  ];

  return (
    <div className="relative border-black w-[700px] h-[15vw] p-[10px]">
      {matrixImages.map((image, index) => (
        <div key={index} className="absolute" style={{ left: image.left, top: image.top, pointerEvents: image.overlay ? 'none' : 'auto' }}>
          <img
            src={image.src}
            alt={image.info}
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
       <div className="relative bg-gray-100 border-gray-300 border-[2px] border font-semibold text-black text-md text-center w-[600px] left-[60px] h-[30px] shadow-md top-[165px]"
           style={{
            bottom: '5px',
            right: '5px',
          }}>
        {hoveredImage !== null ? matrixImages[hoveredImage].info : "Hover over a part of the diagram to learn more"}
      </div>
    </div>
  );
};

export default IPM_matrix;
