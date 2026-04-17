"use client";

import React, { useState } from "react";
import headphone4 from "../assets/headphone4.png";
import { motion, AnimatePresence } from "framer-motion";

// Animation
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Banner = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

          <motion.img
            src={headphone4}
            alt="Headphones"
            className="w-[280px] md:w-[380px] relative z-10 drop-shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>

        {/* TEXT */}
        <div className="space-y-6 text-center md:text-left max-w-lg">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            Next-Gen Headphones With Smart Technology
          </motion.h1>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-gray-400 leading-relaxed"
          >
            Experience immersive wireless audio with cutting-edge noise
            cancellation, deep bass, and ultra-comfort design built for long
            listening sessions.
          </motion.p>

          {/* CTA + CUSTOM CURSOR */}
          <div className="relative inline-block">
            <AnimatePresence>
              {hover && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-red-500 blur-2xl opacity-40 rounded-full scale-150"></div>

                  {/* cursor bubble */}
                  <div
                    className="relative px-4 py-2 rounded-full 
                                  bg-white/10 backdrop-blur-xl 
                                  border border-white/20 
                                  shadow-xl flex items-center gap-2"
                  >
                    {/* dot */}
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>

                    <span className="text-xs font-medium">Shop Now</span>

                    <span className="text-red-400">→</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="px-8 py-3 rounded-md bg-red-500 font-medium shadow-lg 
                         hover:bg-red-600 hover:scale-105 transition duration-300"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Banner;
