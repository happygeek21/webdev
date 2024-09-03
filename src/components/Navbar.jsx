import React from "react";
import logo from "../assets/kevinRushLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLink,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-10 flex items-center justify-center gap-3 text-2xl">
        <a
          href="https://www.linkedin.com/in/hemanth-m-prabhu-05b0711bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-500 hover:text-blue-700 transform hover:scale-110 transition duration-300" />
        </a>
        <a
          href="https://www.github.com/happygeek21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-500 hover:text-white transform hover:scale-110 transition duration-300" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-gray-500 hover:text-red-600 transform hover:scale-110 transition duration-300" />
        </a>
        <a
          href="https://www.instagram.com/hemanth_prabhu_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-gray-500 hover:text-pink-600 transform hover:scale-110 transition duration-300" />
        </a>
        <a
          href="https://linktr.ee/hemanth1205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink className="text-gray-500 hover:text-green-500 transform hover:scale-110 transition duration-300" />
        </a>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center p-2 rounded-md space-x-2 ml-4"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 transform hover:scale-110 transition duration-300" />
          ) : (
            <FaMoon className="text-gray-500 transform hover:scale-110 transition duration-300" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
