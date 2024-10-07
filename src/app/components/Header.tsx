"use client"; // enables Next.js client-side rendering

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // access the current URL path.

const Header = () => {
  // current pathname to determine which page is active
  const pathname = usePathname();

  // check which page is active for styling purposes
  const isPloverPage = pathname === '/plover_page'; // check if we're on the Plover page
  const isPetrelPage = pathname === '/petrel_page'; // check if we're on the Petrel page

  // Apply a white border on specific pages
  const isWhiteBorder = pathname === '/' || pathname === '/documentation' || pathname === '/about_page';

  return (
    // The header (or navbar) with dynamic border color based on the active page.
    // Otherwise, or petrel
    <header
      className={`navbar bg-base-100 sticky mb-10 z-50 ${
        isPloverPage    // uses a plover-colored border

          ? 'border-b-4 border-plover'
          : isPetrelPage // uses a petrel-colored border
          ? 'border-b-4 border-petrel'
          : isWhiteBorder // defaults to white 
          ? 'border-b-4 border-white'
          : 'border-b-4 border-petrel'
      }`}
    >

      {/* Logo links back to the homepage */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">
          <img 
            src="logo.png" 
            alt="logo"
            className="w-32 h-auto"
          />
        </Link>
      </div>


      {/* Right side navigation links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          {/* Dropdown menu for species - MIGHT REMOVE */}
          <li tabIndex={0}>
            <details>
              <summary className="btn btn-ghost text-xl">Integrated Population Models (Species)</summary>
              <ul className="bg-base-100 rounded-t-none p-2 text-xl">
                <li>
                  {/* Link to the Petrel species page */}
                  <Link
                    href="/petrel_page"
                    className={`${
                      pathname === '/petrel_page' ? 'bg-petrel text-white' : ''
                    } hover:bg-petrel`} // highlighted when petrel page active
                  >
                    Leach's storm petrel
                  </Link>
                </li>

                <li>
                  {/* Link to the Plover species page */}
                  <Link
                    href="/plover_page"
                    className={`${
                      pathname === '/plover_page' ? 'bg-plover text-black' : ''
                    } hover:bg-plover`} // Highlighted when plover page active
                  >
                    Piping plover
                  </Link>
                </li>

              </ul>

            </details>
            
          </li>

          {/* Documentation link */}
          <li>
            <Link
              href="/documentation"
              className={`btn ${pathname === '/documentation' ? 'btn-active' : 'btn-ghost'} text-xl`}
            >
              Documentation
            </Link>
          </li>

          {/* About link */}
          <li>
            <Link
              href="/about_page"
              className={`btn ${pathname === '/about_page' ? 'btn-active' : 'btn-ghost'} text-xl`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
