import { LINKS } from "@/constants/links";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { memo, useContext } from "react";
import { NavigationContext } from "../../Navigation.context";

const Menu = () => {
  const { isOpen, setIsOpen } = useContext(NavigationContext) || {};

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="dropdown"
          initial={{ y: "-150%" }}
          animate={{
            y: 0,
          }}
          exit={{ y: "-150%" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="absolute left-0 right-0 z-40 top-[100%] container"
        >
          <div className="bg-black rounded-[1.25rem] text-white mt-[0.65rem] mx-2">
            <ul className="flex flex-col items-center gap-y-4 p-6">
              <li>
                <Link
                  href="/stills"
                  className="text-3xl font-roslindale font-thin uppercase"
                >
                  Stills
                </Link>
              </li>
              <li>
                <Link
                  href="/motion"
                  className="text-3xl font-roslindale font-thin uppercase"
                >
                  Motion
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-3xl font-roslindale font-thin uppercase"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={LINKS.giulia.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl font-roslindale font-thin uppercase"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={LINKS.giulia.email}
                  className="text-3xl font-roslindale font-thin uppercase"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Menu);
