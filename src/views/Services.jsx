"use client";

import React, { useMemo, useState } from "react";
import { ServicesViewModel } from "../viewmodels/ServicesViewModel";
import { motion, AnimatePresence } from "framer-motion";

// Animation
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const Services = () => {
  const vm = useMemo(() => new ServicesViewModel(), []);
  const services = useMemo(() => vm.getServices(), []);

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We provide high-quality solutions designed to elevate your
            experience and performance.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((data, index) => (
            <motion.div
              key={data.id}
              variants={fadeUp(index * 0.1)}
              initial="hidden"
              whileInView="show"
              onMouseEnter={() => setHoveredId(data.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              {/* CURSOR BADGE */}
              <AnimatePresence>
                {hoveredId === data.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                  >
                    {/* glow */}
                    <div className="absolute w-28 h-28 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

                    {/* cursor bubble */}
                    <div
                      className="relative px-5 py-2 rounded-full 
                                    bg-white/10 backdrop-blur-xl 
                                    border border-white/20 
                                    shadow-2xl 
                                    flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>

                      <span className="text-xs font-medium">View Service</span>

                      <span className="text-purple-400 text-sm">→</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CARD */}
              <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/30 to-transparent hover:from-purple-500/60 transition duration-300">
                <div className="bg-gray-900 rounded-2xl p-8 h-full flex flex-col items-center text-center backdrop-blur-xl">
                  {/* ICON */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>
                    <img
                      src={data.icon}
                      alt={data.title}
                      className="w-[80px] relative z-10 group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* TITLE */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                    {data.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {data.desc}
                  </p>

                  {/* LINE */}
                  <div className="mt-6 w-0 group-hover:w-16 h-[2px] bg-purple-500 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Services;
