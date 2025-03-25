// Footer.tsx

"use client"; // Enables Next.js client-side rendering.

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} STORM-PETREL POPULATION MODEL
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
        This web tool was developed by <a href= "https://github.com/johannabosch"> Johanna Bosch </a>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 my-1">
        Created for the Science & Technology Branch, <br/> Wildlife Research Division, Environment and Climate Change Canada
      </div>



    </footer>
  );
};

export default Footer;
