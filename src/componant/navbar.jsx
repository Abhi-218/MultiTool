import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Password Generator", path: "/password" },
  { name: "Counter", path: "/counter" },
  { name: "Currency Changer", path: "/currency" },
  { name: "Todo", path: "/todo" },
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r w-full from-purple-600 via-pink-600 to-red-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold tracking-wide select-none cursor-default">
          MultiTool
        </div>
        <ul className="flex space-x-8">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative px-3 py-2 font-semibold text-white transition-all duration-300
                  ${
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
      </div>
    </nav>
  );
};

export default Navbar;
