import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cinemaEyeLensImg from "../assets/cinemaEyesLens.png";
import Squares from '../components/Squares';
import logo from "../assets/logo.png";
import { IoArrowBack } from "react-icons/io5"; // Import back icon
import { useNavigate } from "react-router-dom";

const CinemaEyeLens = () => {
  const navigate = useNavigate();

  // Function to navigate back to the home page
  const handleLinkClick = () => {
    navigate("/");
  };

  // Function to navigate back to the Event section in the main page
  const handleBackClick = () => {
    navigate("/", {
      state: {
        scrollToEvent: true, // State to trigger scrolling to the event section
        timestamp: Date.now(), // Cache buster for mobile
      },
      replace: true, // Replace current history entry
    })
  };

  // Function to handle register button click
  const handleRegisterClick = () => {
    window.open("https://forms.gle/VP6Ti6g6JSLWnqnx9", "_blank");
  };

  // Scroll to top when the component mounts (especially for mobile)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="flex-1 flex justify-center py-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick();
            }}
          >
            <img
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-3 left-3 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 z-50 bg-black/50 backdrop-blur-sm"
      >
        <IoArrowBack className="text-lg" />
      </button>

      {/* Outer container with top and bottom padding */}
      <div className="relative pt-24 pb-12 min-h-[calc(100vh-6rem)]"> {/* Adjusted height */}
        {/* Glitch Background with Dark Overlay */}
        <div className="absolute inset-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#fff"
            hoverFillColor="#222"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-10">
              {/* Centered Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Cinema Eyes Lens
              </h1>

              {/* Mobile View: Poster + Centered Content */}
              <div className="md:hidden flex flex-col items-center space-y-6">
                {/* Mobile Image */}
                <img
                  src={cinemaEyeLensImg}
                  alt="Event Poster"
                  className="rounded-xl shadow-2xl w-full max-w-sm max-h-[500px] object-contain transform hover:scale-105 transition-all duration-300"
                />

                {/* Description Card - Centered */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Register Button - Centered */}
                <button
                  onClick={handleRegisterClick}
                  className="bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-gray-300 hover:scale-105 shadow-xl cursor-pointer"
                >
                  Register Now
                </button>
              </div>

              {/* Desktop View: Description & Register Button */}
              <div className="hidden md:flex flex-col items-center space-y-6">
                {/* Description Card */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xl">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Centered Register Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleRegisterClick}
                    className="bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-gray-300 hover:scale-105 shadow-xl cursor-pointer"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop Image; hidden on mobile */}
            <div className="hidden md:flex md:w-1/2 justify-center">
              <img
                src={cinemaEyeLensImg}
                alt="Event Poster"
                className="rounded-xl shadow-2xl w-full md:w-auto max-w-xl max-h-[500px] object-contain transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default CinemaEyeLens;