import React, { useState } from "react";
import { motion } from "framer-motion";
import { Desktop } from "./components/Desktop/Desktop";
import { Mobile } from "./components/Mobile/Mobile";
import { Menu } from "./components/Menu/Menu";
import { NavigationContext } from "./Navigation.context";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const context = {
    isOpen,
    setIsOpen,
  };

  return (
    <NavigationContext.Provider value={context}>
      <div className="fixed top-0 left-0 right-0 z-[999]">
        <div className="bg-black-bg/50 backdrop-blur-lg relative z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="container relative max-w-xxl mx-auto max-sm:px-4 py-3"
          >
            <Mobile />
            <Desktop />
          </motion.div>
        </div>
        <Menu />
      </div>
    </NavigationContext.Provider>
  );
};
