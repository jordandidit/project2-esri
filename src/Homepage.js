import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import logo from "./img/logo.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";

const HomePage = () => {
  const carouselRef = useRef(null);

  const nextItem = () => {
    const carousel = carouselRef.current;
    const firstItem = carousel.children[0];
    carousel.appendChild(firstItem.cloneNode(true));
    carousel.removeChild(firstItem);
  };

  const prevItem = () => {
    const carousel = carouselRef.current;
    const lastItem = carousel.lastChild;
    carousel.insertBefore(lastItem.cloneNode(true), carousel.firstChild);
    carousel.removeChild(lastItem);
  };

  const handleBoxClick = () => {
    console.log("Box clicked!");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="text-center mb-8">
        <img src={logo} alt="logo" className="mx-auto w-20 h-auto logo" />
        <h1 className="text-3xl font-bold text-blue-400">
          RWANDA REVENUE AUTHORITY
        </h1>
      </div>
      <div className="relative w-full max-w-screen-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevItem}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-blue-300 rounded-full w-8 h-8 flex items-center justify-center z-10"
          >
            &lt;
          </button>
          <button
            onClick={nextItem}
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-blue-300 rounded-full w-8 h-8 flex items-center justify-center z-10"
          >
            &gt;
          </button>
        </div>
        <div
          ref={carouselRef}
          className="carousel overflow-x-auto whitespace-nowrap relative flex flex-row justify-center md:gap-32 md:flex-wrap"
        >
        <Link to="/Slider1">
          <button
            onClick={handleBoxClick}
            className="carousel-item bg-blue-400 rounded-lg shadow-lg p-4 flex flex-col items-center inline-block mr-4 mb-4"
          >
            <div className="w-52 h-42 rounded-lg bg-white flex items-center justify-center mb-8">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold">RRA </h2>
            <p className="text-sm text-gray-600">text below</p>
          </button>
          </Link>
          <Link to="/Slider2">
          <button
            onClick={handleBoxClick}
            className="carousel-item bg-blue-400 rounded-lg shadow-lg p-4 flex flex-col items-center inline-block mr-4 mb-4"
          >
            <div className="w-52 h-42 rounded-lg bg-white flex items-center justify-center mb-8">
              <img
                src={logo2}
                alt="logo"
                className="w-full h-full rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold">MINISANTE </h2>
            <p className="text-sm text-gray-600">text below</p>
          </button>
          </Link>
          <Link to="/Slider3">
          <button
            onClick={handleBoxClick}
            className="carousel-item bg-blue-400 rounded-lg shadow-lg p-4 flex flex-col items-center inline-block mr-4 mb-4"
          >
            <div className="w-52 h-42 rounded-lg bg-white flex items-center justify-center mb-8">
              <img
                src={logo3}
                alt="logo"
                className="w-full h-full rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold">ESRI RWANDA </h2>
            <p className="text-sm text-gray-600">text below</p>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
