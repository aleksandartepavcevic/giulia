import React from "react";
import { easeOut, motion } from "framer-motion";
import { Desktop } from "./components/Desktop/Desktop";
import { Mobile } from "./components/Mobile/Mobile";

export const Navigation = () => {
  return (
    <div className="bg-black-bg/50 backdrop-blur-lg fixed top-0 left-0 right-0 z-[999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="container max-w-xxl mx-auto max-sm:px-4 py-3"
      >
        <Mobile />
        <Desktop />
      </motion.div>
    </div>
  );
};
