import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          shadow-md
        "
    >
      <div>
        <span>
          <img
            src="https://s3.brilliant.com.bd/brilliant_drive_desktop/demo_novopay_logo.png"
            alt="logo"
            className="md:px-12 py-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </span>
      </div>

      <svg
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          menuOpen ? "" : "hidden"
        }`}
        // className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          <li>
            <span
              className={`md:p-4 py-2 block text-sm font-semibold cursor-pointer ${
                isActive("/about") ? "text-blue-400" : "text-blue-700"
              }`}
              onClick={() => navigate("/about")}
            >
              ABOUT US
            </span>
          </li>
          <li>
            <span
              className={`md:p-4 py-2 block text-sm font-semibold cursor-pointer ${
                isActive("/mission") ? "text-blue-400" : "text-blue-700"
              }`}
              onClick={() => navigate("/mission")}
            >
              MISSION AND VISION
            </span>
          </li>
          <li>
            <span
              className={`md:p-4 py-2 block text-sm font-semibold cursor-pointer ${
                isActive("/contact") ? "text-blue-400" : "text-blue-700"
              }`}
              onClick={() => navigate("/contact")}
            >
              CONTACT US
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
