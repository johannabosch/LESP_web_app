import React, { useState } from 'react';

const IPM_lifecycle: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const lifecycleImages = [
    { src: "/images/model/lifecycle_n2.svg", width: "150px", height: "auto", left: "58%", top: "30%", info: "Info for N2" },
    { src: "/images/model/lifecycle_mid.svg", width: "150px", height: "auto", left: "40%", top: "35%", info: "Info for Mid" },
    { src: "/images/model/lifecycle_n1.svg", width: "150px", height: "auto", left: "22%", top: "30%", info: "Info for N1" },
    { src: "/images/model/lifecycle_tl.svg", width: "auto", height: "130px", left: "28%", top: "4%", info: "Info for TL" },
    { src: "/images/model/lifecycle_tr.svg", width: "140px", height: "auto", left: "63%", top: "4%", info: "Info for TR" },
    { src: "/images/model/lifecycle_bl.svg", width: "150px", height: "auto", left: "22%", top: "55%", info: "Info for BL" },
    { src: "/images/model/lifecycle_br.svg", width: "150px", height: "auto", left: "59%", top: "56%", info: "Info for BR" }
  ];

  return (
    <div className="relative w-[800px] h-[400px] mx-auto my-[30px] border border-black">
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

export default IPM_lifecycle;
