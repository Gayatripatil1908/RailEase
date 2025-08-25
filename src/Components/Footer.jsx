import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">RailEase</h2>
          <p className="text-sm leading-6">
            Plan your journey with ease. Book tickets, check PNR status, and manage bookings — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Search", "PNR Status", "My Bookings", "About"].map((link, i) => (
              <li key={i}>
                <a
                  href={`/${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-blue-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-blue-400 transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact Us</a></li>
            <li><a href="/cancellation" className="hover:text-blue-400 transition">Cancellation</a></li>
            <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p>Email: support@railease.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition">🌐</a>
            <a href="#" className="hover:text-blue-400 transition">🐦</a>
            <a href="#" className="hover:text-blue-400 transition">📘</a>
            <a href="#" className="hover:text-blue-400 transition">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RailEase. All Rights Reserved.
      </div>
    </footer>
  );
}
