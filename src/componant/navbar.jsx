import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Password Generator", path: "/password" },
  { name: "Counter", path: "/counter" },
  { name: "Currency Converter", path: "/currency" },
  { name: "Todo", path: "/todo" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold tracking-wide select-none cursor-default">
          MultiTool
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative px-2.5 py-2 font-semibold text-white transition-all duration-300 ${
                    isActive
                      ? "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-white"
                      : "hover:text-gray-200 hover:scale-105"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full font-semibold text-white py-2 px-4 rounded transition-all ${
                    isActive
                      ? "bg-white bg-opacity-20"
                      : "hover:bg-white hover:bg-opacity-10"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
