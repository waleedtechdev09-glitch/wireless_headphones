"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarViewModel } from "../viewmodels/NavbarViewModel";
import { MdMenu, MdClose } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

const Navbar = () => {
  const vm = new NavbarViewModel();
  const { main, light } = vm.getBrand();
  const menuItems = vm.getMenuItems();

  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-gray-950 text-white border-b border-white/10"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex justify-between items-center px-6 py-4"
      >
        {/* LOGO */}
        <a href="#" className="text-xl font-bold uppercase md:mt-5">
          {main} <span className="font-light text-white/60">{light}</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((menu) => (
            <a
              key={menu.id}
              href={menu.link}
              className="text-sm uppercase text-white/70 hover:text-white transition relative group"
            >
              {menu.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all"></span>
            </a>
          ))}

          <button className="text-xl hover:scale-110 transition">
            <SlEarphones />
          </button>
        </div>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <MdClose /> : <MdMenu />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {menuItems.map((menu) => (
                <a
                  key={menu.id}
                  href={menu.link}
                  onClick={() => setOpen(false)}
                  className="text-white/80 text-sm uppercase hover:text-white transition"
                >
                  {menu.title}
                </a>
              ))}

              <button className="text-xl mt-2">
                <SlEarphones />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
