import React, { useState } from 'react';

const IPM_matrix: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const matrixImages = [
    { src: "/images/model/equation.svg", width: "auto", height: "150px", left: "0%", top: "0%", info: "Population Projection Matrix" },
    { src: "/images/model/abundance_t.svg", width: "150px", height: "auto", left: "58%", top: "30%", info: "Abundance Time" },
    { src: "/images/model/abundance_t1.svg", width: "150px", height: "auto", left: "58%", top: "30%", info: "Abundance Time+1" },
    { src: "/images/model/transition.svg", width: "150px", height: "auto", left: "58%", top: "30%", info: "Transition Matrix" }
  ];

  return (
    <div className="relative items-center justify-center border border-black">
      {matrixImages.map((image, index) => (
        <div key={index} className="relative w-full mb-4">
          <img
            src={image.src}
            alt={image.info}
            className="w-auto h-auto mx-auto"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
            style={{
              width: image.width,
              height: image.height,
              transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          />
          {hoveredImage === index && (
            <div className="absolute bg-white text-black p-2 border border-gray-400 shadow-md" style={{ top: '0%', left: '0%' }}>
              {image.info}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IPM_matrix;
