"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
  id?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  id,
  title,
  description,
  primaryImageSrc,
  secondaryImageSrc,
  reverseLayout = false,
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:grid-flow-col-dense"
    : "md:grid-cols-2";

  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section
      id={id}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-10 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={`flex flex-col items-start gap-5 mt-4 md:mt-0 max-w-[520px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <div className="space-y-3">
              <h2 className="text-white text-2xl md:text-[32px] font-semibold leading-tight md:leading-[42px]">
                {title}
              </h2>
            </div>

            <p className="text-[#868f97] text-sm md:text-[15px] leading-6">
              {description}
            </p>
          </motion.div>

          <motion.div
            className={`relative mt-4 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[320px] md:max-w-[460px]`}
            variants={itemVariants}
          >
            <motion.div
              className="absolute w-[280px] h-[290px] md:w-[430px] md:h-[460px] bg-[#090909] rounded-[28px] z-0"
              style={{
                top: reverseLayout ? "auto" : "8%",
                bottom: reverseLayout ? "8%" : "auto",
                left: reverseLayout ? "auto" : "-10%",
                right: reverseLayout ? "-10%" : "auto",
                transform: reverseLayout ? "translate(0, 0)" : "translateY(8%)",
                filter: "blur(2px)",
              }}
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? -20 : -24 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center rounded-[28px]"
                style={{
                  backgroundImage: `url(${secondaryImageSrc})`,
                }}
              />
            </motion.div>

            <motion.div
              className="relative w-full h-[380px] md:h-[560px] bg-[#ffffff08] rounded-[28px] backdrop-blur-[16px] border border-white/10 z-10 overflow-hidden"
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? 18 : 22 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="h-full">
                <div
                  className="h-full relative"
                  style={{
                    backgroundSize: "100% 100%",
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${primaryImageSrc})`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
  );
};

export default SectionWithMockup;

