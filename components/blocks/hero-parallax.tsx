"use client"

import React from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FeyButton } from "@/components/ui/fey-button"

type Product = {
  title: string
  link: string
  thumbnail: string
  tag?: string
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)

  const ref = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [18, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.15, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [18, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 120]),
    springConfig,
  )

  return (
    <div
      ref={ref}
      className="relative flex h-[260vh] flex-col overflow-hidden py-32 md:py-40 [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeroCopy />
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="pointer-events-none mt-16 md:mt-24"
      >
        <motion.div className="mb-12 flex flex-row-reverse space-x-10 space-x-reverse md:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-12 flex flex-row space-x-10 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-10 space-x-reverse md:space-x-20">
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
  )
}

const HeroCopy = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 pt-6 md:px-6">
      <div className="max-w-xl space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          Factorilab · Web & AI Studio
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
          Next-gen experiences
          <br />
          for brands that outgrow templates.
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-slate-300 md:max-w-lg md:text-base">
          Factorilab designs and builds bespoke websites, webapps, and AI
          systems that feel inevitable—not experimental. From interface to
          infrastructure, every layer is engineered to look, think, and sell
          like your best team member.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <FeyButton>
            Book a private strategy call
          </FeyButton>
          <button className="text-xs font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline md:text-sm">
            View selected work
          </button>
        </div>
        <p className="text-[11px] text-slate-500 md:text-xs">
          Limited onboardings per month · Priority for funded teams & high-growth
          founders.
        </p>
      </div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -18 }}
      className="group relative h-72 w-80 flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#050509] md:h-96 md:w-[30rem]"
    >
      <Link
        href={product.link}
        className="block h-full w-full overflow-hidden"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-[0.2em] text-slate-300">
          {product.tag}
        </span>
        <h2 className="text-sm font-medium text-white md:text-base">
          {product.title}
        </h2>
      </div>
    </motion.div>
  )
}
