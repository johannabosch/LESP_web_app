"use client"; // enables Next.js client-side rendering

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // access the current URL path.
import { Menu, X } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'bg-[#D18D53] text-[#E0DEDA] hover:bg-[#D18D53] hover:text-[#E0DEDA]'
          : 'text-[#E0DEDA] hover:bg-[#D18D53] hover:text-[#E0DEDA] font-bold'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-[#1D282B] top-0 z-50 shadow-lg shadow-[#1D282B] border-b-[1px] border-[#1D282B] w-full">
      
      {/* Logo links back to the homepage */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-[#E0DEDA] font-bold">
          <p>Piping Plover IPM</p>
        </Link>
      </div>

      {/* Hamburger menu for small/medium screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#E0DEDA] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Right side navigation links for large screens */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Dropdown menu for model pages */}
          <li tabIndex={0}>
            <details className="group">
              <summary 
                className="px-3 py-2 rounded-md text-sm text-[#E0DEDA] hover:bg-[#D18D53] hover:text-[#E0DEDA] font-medium">
                Integrated Population Model
              </summary>
              <ul className="bg-[#1D282B] rounded-t-none p-2 text-xl">
                <li>
                  <NavLink href="/about_page">
                    Model Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/plover_page">
                    Model Results
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>

          {/* Documentation link */}
          <li>
            <NavLink href="/documentation_page">
              Documentation
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dropdown menu for small/medium screens when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-[#1D282B] border-t border-[#D18D53] shadow-lg w-full absolute top-16 left-0 z-40">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2">
            <li className="w-full">
              <details className="group w-full">
                <summary 
                  className="px-3 py-2 rounded-md text-sm text-[#E0DEDA] hover:bg-[#D18D53] hover:text-[#E0DEDA] font-medium cursor-pointer">
                  Integrated Population Model
                </summary>
                <ul className="bg-[#1D282B] rounded-t-none p-2 text-xl">
                  <li>
                    <NavLink href="/about_page">
                      Model Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/plover_page">
                      Model Results
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="w-full">
              <NavLink href="/documentation_page">
                Documentation
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
