import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar bg-gray-800 text-white h-full fixed left-0 top-0 w-56 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button className="text-white p-4" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className="flex items-center justify-center h-16">Header</div>
      <ul className="mt-8">
        <li className="mb-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/slider1">Slider 1</Link>
        </li>
        <li className="mb-4">
          <Link to="/slider2">Slider 2</Link>
        </li>
        <li className="mb-4">
          <Link to="/slider3">Slider 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
