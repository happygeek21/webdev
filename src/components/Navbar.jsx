import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img ClassName="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-10 flex items-center justify-center gap-3 text-2xl">
        <FaLinkedin className="text-gray-500 hover:text-blue-700 transform hover:scale-110 transition duration-300"/>
        <FaGithub className="text-gray-500 hover:text-white transform hover:scale-110 transition duration-300" />
        <FaSquareXTwitter className="text-gray-500 hover:text-red-600 transform hover:scale-110 transition duration-300" />
        <FaInstagram className="text-gray-500 hover:text-pink-600 transform hover:scale-110 transition duration-300"/>
      </div>
    </nav>
  );
};

export default Navbar;
