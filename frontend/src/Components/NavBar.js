import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-white z-50  px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://internship.thesparksfoundation.info/" className="flex items-center">
          <img src="./spark.png" className="h-7 mr-3 sm:h-9 bg-white/20" alt="spark Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            The Sparks Foundation
          </span>
        </a>
        {/* Navigatin bar on large screen */}

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-teal-400 md:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allcustomers"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                to="/transaction"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Transactions History
              </Link>
            </li>
          </ul>
        </div>

        {/* -------- Side Nav ---------- */}
        <button onClick={handleNav} className="z-10 md:hidden">
          <FaBars className="text-white text-2xl" />
        </button>
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-gray-900/80 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12 ">
            <li className="text-2xl py-5  mt-3 hover:bg-white/20 ease-in duration-100  rounded-tl-2xl rounded-br-2xl">
              <Link to="/" className="block">Home</Link>
            </li>
            <li className="text-2xl py-5  mt-3 hover:bg-white/20 ease-in duration-100  rounded-tl-2xl rounded-br-2xl">
              <Link to="/allcustomers" className="block">Cutomers</Link>
            </li>
            <li className="text-2xl py-5  mt-3 hover:bg-white/20 ease-in duration-100  rounded-tl-2xl rounded-br-2xl">
              <Link to="/transaction" className="block">Transactions History</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
