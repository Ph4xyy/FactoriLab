"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type HeroProduct = {
  title: string;
  link: string;
  thumbnail: string;
};

const HeroParallax = ({ products }: { products: HeroProduct[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="min-h-screen pt-32 pb-24 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeroCopy />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-16 px-6 md:px-12">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-16 space-x-10 px-6 md:px-12">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 px-6 md:px-12">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const HeroCopy = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-24 w-full">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f4d68b]" />
        <span>Factorilab · AI & Web Studio</span>
      </div>
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
        Build serious{" "}
        <span className="text-white/80">web experiences</span>{" "}
        <br className="hidden md:block" />
        & reliable{" "}
        <span className="text-white/80">AI systems</span>.
      </h1>
      <p className="max-w-2xl text-sm md:text-base mt-6 text-muted-foreground">
        Factorilab crafts conversion-focused websites, robust web apps, and
        production-grade AI automation for teams that actually ship. From
        infrastructure to on-brand interfaces, we handle the heavy lifting.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#f4d68b] text-black text-xs md:text-sm font-medium px-5 py-2.5 hover:bg-[#eac66c] transition-colors"
        >
          Book a strategy call
        </a>
        <a
          href="#work"
          className="inline-flex items-center justify-center rounded-full border border-white/16 bg-transparent text-xs md:text-sm font-medium px-5 py-2.5 text-muted-foreground hover:bg-white/5 transition-colors"
        >
          View case studies
        </a>
        <span className="text-[11px] text-muted-foreground">
          Limited projects per quarter · built on Vercel & modern AI stack
        </span>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: HeroProduct;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -18,
      }}
      key={product.title}
      className="group/product h-80 w-[22rem] md:h-96 md:w-[26rem] relative flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5"
    >
      <Link
        href={product.link}
        className="block h-full w-full group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/50 pointer-events-none transition-opacity" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <h2 className="opacity-0 group-hover/product:opacity-100 text-sm text-white font-medium">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};

export default HeroParallax;

