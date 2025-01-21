import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-0 left-0 w-full text-neutral-300 px-8 py-4 z-50 flex items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-white">
        {/* Add logo or text if needed */}
      </div>

      {/* Navigation Buttons for larger screens */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <a
          href="#home"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Home
        </a>
        <a
          href="#projects"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Experience
        </a>
        <a
          href="https://www.linkedin.com/in/rodbakhondoker/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c1c1e8] transition text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rodba24"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c1c1e8] transition text-3xl"
        >
          <FaGithub />
        </a>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="block md:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
        >
          ✕
        </button>
        <div className="flex flex-col items-center mt-20 space-y-6">
          <a
            href="#home"
            className="hover:text-cyan-300 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-300 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-cyan-300 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="https://www.linkedin.com/in/rodbakhondoker/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rodba24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition text-lg"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;