"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { metrics } from "@/lib/constants";

function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-32 relative overflow-hidden section-transition">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-blue-950/30 to-indigo-950/20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl sm:text-6xl font-bold gradient-text mb-3">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base text-white/60">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metrics;
