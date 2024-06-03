import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import logo from "./img/logo.png";

const Slider1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header />
      
      <div className={`absolute top-0 left-0 h-full bg-gray-200 w-64 p-10 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          &#10005;
        </button>
        
        <ul className="space-y-4">
        <li className="relative hover:bg-gray-300 p-2 ">
            <div className="relative group">
              <button className="block w-full text-left">Menu1</button>
              <ul className="absolute left-full top-0 mt-0 hidden group-hover:block bg-gray-100 p-2 ">
                <li className="hover:bg-gray-300 p-2 ">
                  <Link to="/submenu1">Submenu 1</Link>
                </li>
                <li className="hover:bg-gray-300 p-2 ">
                  <Link to="/submenu2">Submenu 2</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative hover:bg-gray-300 p-2 ">
            <div className="relative group">
              <button className="block w-full text-left">Menu2</button>
              <ul className="absolute left-full top-0 mt-0 hidden group-hover:block bg-gray-100 p-2 ">
                <li className="hover:bg-gray-300 p-2 ">
                  <Link to="/submenu1">Submenu 1</Link>
                </li>
                <li className="hover:bg-gray-300 p-2">
                  <Link to="/submenu2">Submenu 2</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative hover:bg-gray-300 p-2">
            <div className="relative group">
              <button className="block w-full text-left">Menu3</button>
              <ul className="absolute left-full top-0 mt-0 hidden group-hover:block bg-gray-100 p-2">
                <li className="hover:bg-gray-300 p-2">
                  <Link to="/submenu1">Submenu 1</Link>
                </li>
                <li className="hover:bg-gray-300 p-2">
                  <Link to="/submenu2">Submenu 2</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <button className="absolute top-4 left-4 z-10" onClick={toggleMenu}>
        &#9776;
      </button>
 
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Slider1;
