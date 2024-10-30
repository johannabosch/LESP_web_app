// Footer.tsx

"use client"; // enables Next.js client-side rendering.

import React from 'react'; 
import Link from 'next/link'; 


const Footer = () => {
  // Our wonderful supporters!
  const sponsorLogos = [
    { src: '/logos/CAPP.png', url: 'https://www.capp.ca/en/', width: '120px', height: 'auto'  },
    { src: '/logos/MUN.png', url: 'https://www.canada.ca/en/environment-climate-change.html', width: '150px', height: 'auto'  },
    { src: '/logos/Alder.png', url: 'https://www.canada.ca/en/environment-climate-change.html' , width: '140px', height: 'auto' }, 
    { src: '/logos/Bowdoin.png', url: 'https://www.canada.ca/en/environment-climate-change.html' , width: '110px', height: 'auto' }, 
    { src: '/logos/Kenyon.png', url: 'https://www.canada.ca/en/environment-climate-change.html', width: '130px', height: 'auto'  },
    { src: '/logos/York.png', url: 'https://www.canada.ca/en/environment-climate-change.html' , width: '150px', height: 'auto' }, 
    { src: '/logos/Acadia.png', url: 'https://www.canada.ca/en/environment-climate-change.html', width: '170px', height: 'auto'  },
    { src: '/logos/BirdsCA.png', url: 'https://www.canada.ca/en/environment-climate-change.html', width: '170px', height: 'auto'  },
      ];

      const ECLogo = [
        { src: '/logos/ECCC.png', url: 'https://www.canada.ca/en/environment-climate-change.html',  width: '380px', height: 'auto'  }];

  return (
    // Footer layout and styling
    <footer className="z-10 flex flex-col justify-center items-center relative bg-white shadow-[0_-4px_10px_-2px] shadow-xl shadow-[#EDF0F1] border-b-[1px] border-white mt-10">
      

      {/* Links to Documentation and Acknowledgments. */}
      <nav className="flex justify-center items-center mb-0">
        <Link href="https://github.com/AnnaCalvert/PIPLanalysis">
          <button className="btn btn-ghost px-5 py-2 mx-2 hover:bg-gray-200">DOCUMENTATION</button> 
        </Link>
        <Link href="https://github.com/AnnaCalvert/PIPLanalysis/LICENSE">
          <button className=" btn btn-ghost px-5 py-2 mx-2 hover:bg-gray-200">LICENSE</button> 
        </Link>
        <Link href="https://github.com/AnnaCalvert/PIPLanalysis/LICENSE">
          <button className="btn btn-ghost px-5 py-2 mx-2 hover:bg-gray-200 z-10">ACKNOWLEDGMENTS</button>
        </Link>
      </nav>

      {/* Our logo */}
      <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
        {ECLogo.map((logo, index) => (

          // make it clickable
          <Link href={ECLogo[0].url}>
            <img src={ECLogo[0].src} 
                 alt={"Environment and Climate Change logo"} 
                 className="object-contain"
                 style={{width:logo.width, height: logo.height }} />
          </Link>
        ))}
      </div>

      {/* Logo band with links to all the supporters */}
      <div className="flex justify-center items-center flex-wrap gap-[10px] mt-10">
        {sponsorLogos.map((logo, index) => (

          // each sponsor logo is clickable
          <Link key={index} href={logo.url}>
            <img src={logo.src}
                 alt={`Sponsor ${index + 1}`}
                 className="object-contain"
                 style={{width:logo.width, height: logo.height }}  />
          </Link>
        ))}
      </div>

    </footer>
  );
};


export default Footer;
