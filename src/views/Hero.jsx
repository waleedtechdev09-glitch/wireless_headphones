"use client";

import React, { useMemo, useState } from "react";
import { HeroViewModel } from "../viewmodels/HeroViewModel";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

// Animation
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.3 },
  },
});

const HeroSection = () => {
  const vm = useMemo(() => new HeroViewModel(), []);
  const allData = useMemo(() => vm.getAllData(), []);

  const [activeData, setActiveData] = useState(vm.getActiveData());

  const handleActiveData = (item) => {
    vm.setActiveData(item, setActiveData);
  };

  // Reusable cursor configs
  const baseCursor = {
    zIndex: 999,
    followSpeed: 1.2,
    rotate: -360,
  };

  return (
    <section className="bg-gray-950 text-white overflow-hidden font-poppins">
      <div className="container mx-auto px-6 grid md:grid-cols-2 min-h-[700px] items-start md:items-center pt-16 md:pt-0 pb-10 md:pb-0">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="space-y-8 max-w-lg"
        >
          {/* TITLE */}
          <AnimatePresence mode="wait">
            <UpdateFollower
              mouseOptions={{
                ...baseCursor,
                backgroundColor: "white",
                scale: 4,
                mixBlendMode: "difference",
              }}
            >
              <motion.h1
                key={activeData.id}
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-4xl lg:text-5xl font-bold leading-tight"
              >
                {activeData.title}
              </motion.h1>
            </UpdateFollower>
          </AnimatePresence>

          {/* DESCRIPTION */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeData.id}
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-gray-400 leading-relaxed"
            >
              {activeData.desc}
            </motion.p>
          </AnimatePresence>

          {/* BUTTON */}
          <AnimatePresence mode="wait">
            <motion.button
              key={activeData.id}
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{ backgroundColor: activeData.bgColor }}
              className="px-6 py-3 rounded-md cursor-pointer font-medium shadow-lg hover:scale-105 transition duration-300"
            >
              Buy & Listen 🎧
            </motion.button>
          </AnimatePresence>

          {/* SUBTITLE */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex-1 h-px bg-gray-700"></div>
            <p>Top headphones for you</p>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-3 gap-6">
            {allData.map((item) => (
              <UpdateFollower
                key={item.id}
                mouseOptions={{
                  ...baseCursor,
                  backgroundColor: item.bgColor,
                  scale: 5,
                  text: "View",
                  textFontSize: "2px",
                }}
              >
                <div
                  onClick={() => handleActiveData(item)}
                  className="cursor-pointer group transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full group-hover:scale-110 transition duration-300"
                  />
                  <div className="mt-2">
                    <p className="font-semibold">{item.price}</p>
                    <p className="text-xs text-gray-400">{item.modal}</p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              src={activeData.image}
              alt="product"
              initial={{ opacity: 0, scale: 0.8, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 80 }}
              transition={{ duration: 0.5 }}
              className="w-[280px] md:w-[400px] xl:w-[500px] drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* WHATSAPP */}
        <a
          href="#"
          className="fixed bottom-6 right-6 text-3xl bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
