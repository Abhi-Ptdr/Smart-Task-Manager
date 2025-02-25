import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaEllipsisV } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";

function Buttons() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
        <button
          onClick={() => router.push("/task-manager")}
          className="border border-stroke px-3 py-1 text-base font-medium text-dark btngrp flex items-center space-x-2"
        >
          <span>Manage Tasks</span>
          <MdDashboard />
        </button>
        <button
          onClick={() => router.push("/members")}
          className="border border-stroke px-3 py-1 text-base font-medium text-dark btngrp flex items-center space-x-2"
        >
          <span>Timeline</span>
          <AiFillDashboard />
        </button>
        <button
          onClick={() => router.push("/")}
          className="border border-stroke px-3 py-1 text-base font-medium text-dark btngrp flex items-center space-x-2"
        >
          <span>Home</span>
          <FaHome />
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2">
          <FaEllipsisV size={24} />
        </button>
        {isOpen && (
          <div ref={menuRef} className="ellipsis-menu absolute right-0 w-48 rounded-md shadow-lg z-10">
            <button
              onClick={() => { router.push("/task-manager"); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-1"
            >
              <span>Manage Tasks</span>
              <MdDashboard />
            </button>
            <button
              onClick={() => { router.push("/members"); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-1"
            >
              <span>Timeline</span>
              <AiFillDashboard />
            </button>
            <button
              onClick={() => { router.push("/"); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-1"
            >
              <span>Home</span>
              <FaHome />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Buttons;