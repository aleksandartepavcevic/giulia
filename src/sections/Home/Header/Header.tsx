import React from "react";
import { Variants, motion } from "framer-motion";

const headerVariants: Variants = {
  hidden: {
    y: 100,
    rotateZ: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    rotateZ: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const parentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

export const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      className="h-screen py-16 flex justify-center items-center"
    >
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
          transformOrigin: "bottom",
        }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
        className="relative  w-full h-full rounded-3xl overflow-hidden-updated"
      >
        <div className="relative z-10 w-full h-full p-20 max-md:p-2 flex justify-center items-center bg-black/40">
          <motion.div
            variants={parentVariants}
            className="max-w-[900px] flex justify-center items-center flex-wrap gap-x-4 text-8xl max-md:text-7xl max-sm:text-[13.5vw] font-roslindale font-light text-white uppercase text-center"
          >
            {/* Giulia Gartner <br /> photographer &<br /> filmmaker */}
            <div className="overflow-hidden">
              <motion.h1 variants={headerVariants}>Giulia</motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={headerVariants}>Gartner</motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={headerVariants}>photographer</motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={headerVariants}>&</motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={headerVariants}>filmmaker</motion.h1>
            </div>
          </motion.div>
        </div>
        <video
          className="absolute z-0 top-0 left-0 right-0 bottom-0 object-cover w-full h-full"
          src="/thumbnail-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </motion.div>
    </motion.header>
  );
};
