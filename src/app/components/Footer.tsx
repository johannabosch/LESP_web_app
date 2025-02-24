// Footer.tsx

"use client"; // Enables Next.js client-side rendering.
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0 flex items-center">
          <Image
            src="/logos/petrel_logo.png"
            alt="Website Logo"
            width={70}
            height={70}
            className="mr-3"
          />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Website Name
          </span>
        </div>

        {/* Button Links */}
        <div className="flex space-x-4">
          <a
            href=""
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition"
          >
            Resources  {/* where we keep the link to the manuscript */}

          </a>
          <a
            href=""
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition"
          >
            Acknowledgments   {/* where we keep our sponsor logos */}
          </a>
          <a
            href=""
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition"
          >
            Privacy Policy    {/* where we keep the link to the manuscript */}
          </a>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Website Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
