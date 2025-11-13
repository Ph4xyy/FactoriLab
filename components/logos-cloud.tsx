"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/lib/constants";

const LogosCloud = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Smooth transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-semibold text-white/80"
          >
            Built with <span className="gradient-text">industry-leading</span> tools
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="text-2xl font-bold text-white/60 group-hover:text-white group-hover:gradient-text transition-all duration-300">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosCloud;
