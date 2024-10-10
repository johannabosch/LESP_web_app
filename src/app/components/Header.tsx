"use client"; // enables Next.js client-side rendering

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // access the current URL path.


const Header = () => {
  // current pathname to determine which page is active
  const pathname = usePathname();
  return (
    // The header (or navbar) with a fixed black border color.
    <header className="navbar bg-base-100 sticky mb-10 z-50 shadow-xl shadow-[#EDF0F1] border-b-[1px] border-white">

      {/* Logo links back to the homepage */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">
          <img 
            src="/QR_code.png" 
            alt="logo"
            className="w-10 h-auto"
          />
        </Link>
      </div>

      {/* Right side navigation links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

          {/* Dropdown menu for species - MIGHT REMOVE */}
          <li tabIndex={0}>
            <details>
              <summary className="btn btn-ghost text-xl">Integrated Population Model</summary>
              <ul className="bg-base-100 rounded-t-none p-2 text-xl">
                <li>
                  {/* Link to the Petrel species page */}
                  <Link
                    href="/about_page"
                    className={`hover:bg-gray-300 font-semibold btn-ghost`}
                  >
                    Data overview
                  </Link>
                </li>

                <li>
                  {/* Link to the Plover species page */}
                  <Link
                    href="/plover_page"
                    className={`hover:bg-gray-300 font-semibold btn-ghost`}
                  >
                    Data visualization
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
