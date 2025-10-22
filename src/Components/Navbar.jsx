import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
      return (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  });
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!localStorage.getItem("theme")) setDarkMode(e.matches);
    };
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler));
  }, []);

              const navLinks = [
                { to: "/", label: "Home" },
                { to: "/About", label: "About" },
  
                { to: "/search", label: "Search" },
                { to: "/pnrstatus", label: "PNR Status" },
                { to: "/mybookings", label: "My Bookings" },
              ];

              const toggleTheme = () => setDarkMode((d) => !d);

              return (
                <nav className="bg-[#1b3c53] dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
                  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-extrabold text-[#d2c1b6] dark:text-white">
                      RailEase
                    </Link>

                    <div className="hidden md:flex gap-8 items-center">
                      {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} className="text-[#f9f3ef] dark:text-gray-200 hover:text-[#d2c1b6] dark:hover:text-white transition">
                          {link.label}
                        </Link>
                      ))}

                      <Link to="/login" className="px-4 py-2 rounded-xl shadow bg-[#456882] text-[#f9f3ef] dark:bg-blue-600 dark:text-white hover:bg-[#d2c1b6] dark:hover:bg-blue-700 hover:text-[#1b3c53] dark:hover:text-white transition">
                        Login
                      </Link>

                      <button onClick={toggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="p-2 rounded-full bg-[#d2c1b6] dark:bg-gray-700 text-[#1b3c53] dark:text-gray-200 hover:bg-[#c4b0a5] dark:hover:bg-gray-600 transition-colors">
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                      </button>
                    </div>

                    <div className="md:hidden flex items-center">
                      <button onClick={() => setIsOpen((s) => !s)} className="text-[#d2c1b6] dark:text-gray-200">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                      </button>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="md:hidden px-6 pb-4 space-y-4 bg-[#1b3c53] dark:bg-gray-900">
                      {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} className="block text-[#f9f3ef] dark:text-gray-200 hover:text-[#d2c1b6] dark:hover:text-white transition" onClick={() => setIsOpen(false)}>
                          {link.label}
                        </Link>
                      ))}

                      <button onClick={toggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="mt-2 p-2 rounded-full bg-[#d2c1b6] dark:bg-gray-700 text-[#1b3c53] dark:text-gray-200 hover:bg-[#c4b0a5] dark:hover:bg-gray-600 transition-colors">
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                      </button>
                    </div>
                  )}
                </nav>
              );
}

