// IPMGraphic.tsx

/*
  This component shows clickable images for the IPM schematic. 
  When you click a model on the schematic, a card pops up with some info about it and an image carousel. 
*/

"use client"; // enables Next.js client-side rendering

import React, { useState } from 'react'; // manage hovering or clicking

const IPMGraphic: React.FC = () => {
  // This component tracks which image is being hovered over or clicked in real-time

  // State to track the index of the image being hovered over
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  
  // State to track the index of the image that was clicked and is currently displayed in the card.
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  
  // State to track the current image index within the carousel for a clicked image.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image data that make up the IPM schematic
  const imageGroups = [

    {  // survival
      src: "/images/survival.svg",
      left: "40%",
      top: "46%",
      info: "SURVIVAL OF BREEDERS",
      infoParagraph: "This metric tracks the survival rate of breeding seabirds over time.",
      carouselImages: ["images/petrel_banded.jpg", "/images/1Aband.jpg"]
    },

    {  // mortality
      src: "/images/mortality.svg",
      left: "47%", 
      top: "5%", 
      info: "OBSERVABLE MORTALITY", 
      infoParagraph: "Placeholder text for martality card, with info on offshore/onshore lighted structures and gull predation",
      carouselImages: ["/images/drillmax.jpg", "/images/gull.jpg", "/images/fishplant.png" ]
    },

    {  // population abundance
      src: "/images/population.svg",
      left: "15%", 
      top: "68%", 
      info: "POPULATION ABUNDANCE", 
      infoParagraph: "Population abundance refers to the estimated number of seabirds in a given colony.",
      carouselImages: ["/images/productivity.svg", "/images/blood_card.svg"]
    },

    {  // reproductive productivity
      src: "/images/reproductive.svg",
      left: "32%", 
      top: "1%", 
      info: "PRODUCTIVITY", 
      infoParagraph: "Productivity indicates the reproductive success of seabirds in terms of the number of offspring produced.",
      carouselImages: ["/images/petrel_egg.svg", "/images/petrel_band.svg"]
    },

    {  // population process model
      src: "/images/process.svg",
      left: "29%", 
      top: "36%", 
      info: "POPULATION PROCESS MODEL", 
      infoParagraph: "This model simulates the dynamics of seabird populations based on various ecological factors.",
      carouselImages: ["/images/petrel_egg.svg", "/images/petrel_band.svg"]
    },
  ];
  
  // Navigate to the next image in the carousel for the clicked card
  const nextImage = (clickedIndex: number) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageGroups[clickedIndex].carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevImage = (clickedIndex: number) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageGroups[clickedIndex].carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-[1000px] h-[500px]"
      style={{
        border: '2px solid #ccc',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Map through the imageGroups array, overlay display image */}
      {imageGroups.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Overlay image ${index}`}
          className="absolute w-auto h-auto"

          onMouseEnter={() => setHoveredImage(index)} // track hovering state
          onMouseLeave={() => setHoveredImage(null)} // remove hover effect
          onClick={() => setClickedImage(index)} // set clicked image

          // Mofidy the style of the graphic
          style={{
            left: image.left, top: image.top, 
            transform: hoveredImage === index || clickedImage === index ? 'scale(0.5)' : 'scale(0.45)',
            transformOrigin: 'top left', transition: 'transform 0.3s ease, filter 0.3s ease', 
            filter:
              clickedImage !== null && clickedImage !== index
                ? 'blur(5px)' // blur unclicked images on click
                : hoveredImage !== null && hoveredImage !== index
                ? 'blur(3px)' // blur other images slightly on hover
                : 'none',

            zIndex: clickedImage === index ? 2 : 1, // clicked image come to the front
            cursor: 'pointer', // cursor to pointer for clickable images
          }}

        />

      ))}

      {/* rendering a card for the clicked image */}
      {clickedImage !== null && (
        <div

          className="absolute"
          style={{
            top: '0', // top position for the card
            left: clickedImage === 2 || clickedImage === 3 ? 'auto' : '0', // right alignment
            right: clickedImage === 2 || clickedImage === 3 ? '0' : 'auto', // right alignment
            zIndex: 3, // overlay clicked card
          }}
        >

          <div className="card glass w-96 relative">
            {/*  "X" Icon to close the card */}
            <div
              className="absolute mt-0 left-2 cursor-pointer text-4xl text-gray-800 hover:text-gray-600 transition"
              onClick={() => setClickedImage(null)} // close card on click
            >
              &times;
            </div>

            {/* Left Arrow */}
            <div
              className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 text-2xl rounded-full text-white p-2 hover:bg-gray-600 transition"
              onClick={() => prevImage(clickedImage)} // previous image
            >
              &#9664;
            </div>

            {/* Display the current image in the carousel */}
            <figure className="mt-8">

              <img
                src={imageGroups[clickedImage].carouselImages[currentImageIndex]}
                alt="Carousel image" 
                className="w-full h-[250px] object-cover"
              />
            </figure>

            {/* Right Arrow */}
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-gray-800 text-2xl rounded-full text-white p-2 hover:bg-gray-600 transition"
              onClick={() => nextImage(clickedImage)} // next image
            >
              &#9654;
            </div>

            {/* Card content */}
            <div className="card-body">
              <h2 className="card-title">{imageGroups[clickedImage].info}</h2>
              <p>{imageGroups[clickedImage].infoParagraph}</p>
            </div>

          </div>
        </div>

      )}
    </div>
  );
};

export default IPMGraphic;
