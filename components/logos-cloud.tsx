"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/lib/constants";

const LogosCloud = () => {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-muted-foreground"
          >
            Built with industry-leading tools
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosCloud;

