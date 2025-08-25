import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/login', label: 'Login' },
    { to: '/search', label: 'Search' },
    { to: '/pnrstatus', label: 'PNR Status' },
    { to: '/mybookings', label: 'My Bookings' }
  ];

  // Toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav style={{backgroundColor: '#1b3c53'}} className="shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold" style={{color: '#d2c1b6'}}>
            RailEase
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {["Home", "Search", "PNR Status", "My Bookings", "About"].map(
            (item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                style={{color: '#f9f3ef'}}
                className="hover:text-[#d2c1b6] transition"
              >
                {item}
              </Link>
            )
          )}

          {/* Login Button */}
          <button style={{backgroundColor: '#456882', color: '#f9f3ef'}} className="px-4 py-2 rounded-xl shadow hover:bg-[#d2c1b6] hover:text-[#1b3c53] transition">
            Login
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{backgroundColor: '#d2c1b6', color: '#1b3c53'}}
            className="p-2 rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} style={{color: '#d2c1b6'}}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4" style={{backgroundColor: '#1b3c53'}}>
          {["Home", "Search", "PNR Status", "My Bookings", "About"].map(
            (item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                style={{color: '#f9f3ef'}}
                className="block hover:text-[#d2c1b6] transition"
              >
                {item}
              </Link>
            )
          )}

          <button style={{backgroundColor: '#456882', color: '#f9f3ef'}} className="w-full py-2 rounded-xl shadow hover:bg-[#d2c1b6] hover:text-[#1b3c53] transition">
            Login
          </button>

          {/* Dark Mode Toggle inside mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{backgroundColor: '#d2c1b6', color: '#1b3c53'}}
            className="mt-2 p-2 rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
}

