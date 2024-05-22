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
        
    
        <ul>
         
          <li>
            <Link to="/slider1">Slider 1</Link>
          </li>
          <li>
            <Link to="/slider2">Slider 2</Link>
          </li>
          <li>
          
            <div>
              <button className="block">Dropdown</button>
              <ul>
                <li>
                  <Link to="/submenu1">Submenu 1</Link>
                </li>
                <li>
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
