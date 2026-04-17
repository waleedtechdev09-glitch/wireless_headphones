"use client";

import React from "react";
import { FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white pt-16 pb-6 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* COMPANY */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-wide">Playing</h1>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium headphones designed for immersive sound, modern style, and
              everyday comfort.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <FaPhone /> +92 311 7248123
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation /> Wah Cantt, Islamabad
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Links</h2>

            <ul className="space-y-2 text-gray-400 text-sm">
              {["Home", "Products", "Blogs", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Connect</h2>

            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-white/10 backdrop-blur-md hover:bg-white hover:text-black 
                  transition duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs pt-2 max-w-xs">
              Follow us for latest updates, offers, and new arrivals.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Playing. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>
          </div>
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-600/20 blur-3xl rounded-full"></div>
    </footer>
  );
};

export default Footer;
