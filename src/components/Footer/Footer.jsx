import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { scrollToSection } from "../../utils/scrollToSection";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Pranav Arora</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Education", id: "education" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pranav-arora-09b7021b1/", label: "LinkedIn" },
            { icon: <FaGithub />, link: "https://github.com/PranavArora20", label: "GitHub" },
            { icon: <FaTwitter />, link: "https://x.com/pranava30691064", label: "Twitter/X" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-800"
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Pranav Arora. All rights reserved.
        </p>
        
        {/* Additional Info */}
        <p className="text-xs text-gray-500 mt-2">
          Full Stack Developer | React Specialist | UI/UX Enthusiast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
