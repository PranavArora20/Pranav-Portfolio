import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeNavButton from "./ResumeNavButton";
import {
  getActiveSectionFromScroll,
  scrollToSection,
} from "../../utils/scrollToSection";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setActiveSection(getActiveSectionFromScroll());
    };

    const handleNavigate = (e) => {
      setActiveSection(e.detail.sectionId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("portfolio-navigate", handleNavigate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("portfolio-navigate", handleNavigate);
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 lg:px-10 ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative text-white py-5 flex items-center justify-between">
        {/* Logo */}
        <div
          className="relative z-10 shrink-0 text-base sm:text-lg font-semibold cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => handleMenuItemClick("home")}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Pranav</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Arora</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`pointer-events-auto cursor-pointer hover:text-[#8245ec] whitespace-nowrap ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: social icons + mobile toggle */}
        <div className="relative z-10 flex items-center gap-4 shrink-0">
          <div className="hidden md:flex items-center space-x-4">
            <ResumeNavButton />
            <a
              href="https://github.com/PranavArora20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-arora-09b7021b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-1 bg-[#050414] bg-opacity-95 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex items-center space-x-4">
              <ResumeNavButton iconSize={24} />
              <a
                href="https://github.com/PranavArora20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-arora-09b7021b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
