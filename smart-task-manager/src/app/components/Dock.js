import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaBars } from "react-icons/fa";

function Dock() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="hidden md:flex items-center space-x-2">
        <a href='https://github.com/Abhi-Ptdr'><div className="social p-1 github mx-1"><FaGithub /></div></a>
        <a href='https://www.linkedin.com/in/abhiptdr/'><div className="social p-1 linkedin mx-1"><FaLinkedin /></div></a>
        <a href='https://leetcode.com/u/Abhi_ptdr/'><div className="social p-1 leetcode mx-1"><SiLeetcode /></div></a>
        <a href='https://www.instagram.com/_ptdr_abhi_/'><div className="social p-1 instagram mx-1"><FaInstagram /></div></a>
        <a href='https://www.facebook.com/abhishekpatidar.pateliya/'><div className="social p-1 facebook mx-1"><FaFacebook /></div></a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleDropdown} className="p-2">
          <FaBars size={24} />
        </button>
        {isOpen && (
          <div ref={dropdownRef} className="dock-menu absolute right-0 rounded-md shadow-lg z-10">
            <a href='https://github.com/Abhi-Ptdr' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaGithub /></a>
            <a href='https://www.linkedin.com/in/abhiptdr/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaLinkedin /></a>
            <a href='https://leetcode.com/u/Abhi_ptdr/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><SiLeetcode /></a>
            <a href='https://www.instagram.com/_ptdr_abhi_/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaInstagram /></a>
            <a href='https://www.facebook.com/abhishekpatidar.pateliya/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><FaFacebook /></a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dock;