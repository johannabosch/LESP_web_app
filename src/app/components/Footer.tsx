// Footer.tsx

"use client"; // enables Next.js client-side rendering.

import React from 'react'; 
import Link from 'next/link'; 


const Footer = () => {
  // Our wonderful supporters!
  const sponsorLogos = [
    { src: '/logos/ECCC.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Environment Canada
    { src: '/logos/CAPP.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Placeholder URL
    { src: '/logos/MUN.png', url: 'https://www.canada.ca/en/environment-climate-change.html' },  // Memorial University logo
    { src: '/logos/Alder.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Placeholder URL
    { src: '/logos/Bowdoin.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Placeholder URL
    { src: '/logos/Kenyon.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Placeholder URL
    { src: '/logos/York.png', url: 'https://www.canada.ca/en/environment-climate-change.html' },  // York University
    { src: '/logos/Acadia.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Placeholder URL
    { src: '/logos/BirdsCA.png', url: 'https://www.canada.ca/en/environment-climate-change.html' }, // Placeholder URL
      ];

  return (
    // Footer layout and styling
    <footer className="bg-white pb-0 shadow-[0_-4px_10px_-2px] shadow-xl shadow-[#EDF0F1] border-b-[1px] border-white text-center mt-10 mb-0">
      
      {/* Links to Documentation and Acknowledgments. */}
      <nav className="flex justify-center items-center mb-0">
        <Link href="/documentation">
          <button className="px-5 py-2 mx-2 hover:bg-gray-200">DOCUMENTATION</button> {/* Click to find helpful docs! */}
        </Link>
        <Link href="/privacy-policy">
          <button className="px-5 py-2 mx-2 hover:bg-gray-200">LICENSE</button> {/* License details, fun stuff! */}
        </Link>
        <Link href="/terms-of-service">
          <button className="px-5 py-2 mx-2 hover:bg-gray-200">ACKNOWLEDGMENTS</button> {/* Shoutout to our awesome contributors! */}
        </Link>
      </nav>

      {/* Logo band with links to all the supporters */}
      <div className="flex justify-center items-center flex-wrap gap-2 mb-0">
        {sponsorLogos.map((logo, index) => (

          // Each sponsor logo is clickable
          <Link key={index} href={logo.url}>
            <img src={logo.src} alt={`Sponsor ${index + 1}`} className="w-40 h-40 object-contain" />
          </Link>
        ))}
      </div>

    </footer>
  );
};


export default Footer;
