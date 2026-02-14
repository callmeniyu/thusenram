"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Zap,
  MapPin,
  Phone,
  Globe,
  Hammer,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 text-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/40 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]" />

      {/* Top Bar / Logo Area */}
      <motion.div
        variants={itemVariants}
        className="absolute top-8 left-8 z-50 flex items-center mb-8 bg-black/50 p-2 rounded-xl border border-white/10 backdrop-blur-sm"
      >
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-white p-2">
          {!imgError ? (
            <Image
              src="/images/logo.png"
              alt="Thusen Ram Logo"
              fill
              className="object-contain p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <Zap className="h-8 w-8 text-brand-yellow" />
          )}
        </div>
        <div className="ml-4 text-left hidden sm:block">
          <h2 className="font-bold text-white tracking-wider text-xl uppercase">
            Thusen Ram
          </h2>
          <p className="text-[10px] text-brand-yellow tracking-[0.2em] uppercase font-semibold">
            Hardware & Electrical
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-4xl space-y-8 mt-32">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Settings className="mr-2 h-4 w-4 animate-spin-slow text-brand-yellow" />
          <span className="text-sm font-medium text-brand-yellow">
            System Upgrade In Progress
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-sans text-5xl font-black sm:font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block text-transparent  bg-clip-text bg-gradient-to-b from-white to-white/60">
            UNDER
          </span>
          <span className="glow-text mt-2 md:-ml-8 block text-brand-yellow">
            CONSTRUCTION
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          Something electrifying is currently under construction. We are
          upgrading our digital infrastructure to serve you better.
        </motion.p>
      </div>

      {/* Decorational Elements */}

      {/* Floating Abstract Icons for "Decorational Elements" */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 opacity-20 hidden lg:block"
      >
        <Hammer className="h-24 w-24 text-gray-600" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/4 opacity-20 hidden lg:block"
      >
        <Wrench className="h-32 w-32 text-gray-600" />
      </motion.div>
    </motion.div>
  );
}
