"use client";

import React, { useMemo, useState } from "react";
import { BlogsViewModel } from "../viewmodels/BlogsViewModel";
import { motion, AnimatePresence } from "framer-motion";

// Animation
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const Blogs = () => {
  const vm = useMemo(() => new BlogsViewModel(), []);
  const blogs = useMemo(() => vm.getBlogs(), []);

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-3">Latest Blogs</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Insights, updates, and stories about audio technology and lifestyle.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              variants={fadeUp(index * 0.1)}
              initial="hidden"
              whileInView="show"
              onMouseEnter={() => setHoveredId(blog.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              {/* CURSOR (Premium Bubble) */}
              <AnimatePresence>
                {hoveredId === blog.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                  >
                    {/* Glow */}
                    <div className="absolute w-24 h-24 bg-red-500 blur-3xl opacity-30 rounded-full"></div>

                    {/* Cursor Bubble */}
                    <div
                      className="relative px-5 py-2 rounded-full 
                                    bg-white/10 backdrop-blur-xl 
                                    border border-white/20
                                    shadow-2xl
                                    flex items-center gap-2"
                    >
                      {/* animated dot */}
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>

                      <span className="text-xs font-medium">Read Article</span>

                      <span className="text-red-400 text-sm">→</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CARD */}
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                {/* IMAGE */}
                <div className="overflow-hidden relative">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-gray-400">
                    {blog.date || "Aug 2025"} • 5 min read
                  </p>

                  <h2 className="text-lg font-semibold group-hover:text-red-400 transition">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-400 line-clamp-2">
                    {blog.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-sm text-red-400 opacity-0 group-hover:opacity-100 transition">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
