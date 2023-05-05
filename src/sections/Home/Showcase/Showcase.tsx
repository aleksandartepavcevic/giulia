import { Button } from "@/components/Button/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
const { screens } = require("tailwindcss/defaultTheme");

export const Showcase = () => {
  const isMobile = useMediaQuery(`(max-width: ${screens.md})`);
  const articleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start end", "end end"],
  });

  const getTranslateValues = (direction: string) => {
    const maxDesktopValue = direction === "left" ? "100%" : "-100%";
    const minDesktopValue = "0%";
    const maxMobileValue = maxDesktopValue;
    const minMobileValue = direction === "left" ? "-25%" : "25%";

    const translateValues = isMobile
      ? [minMobileValue, maxMobileValue]
      : [minDesktopValue, maxDesktopValue];

    return translateValues;
  };

  const transformValues = [1, 0];

  const translateXLeft = useTransform(
    scrollYProgress,
    transformValues,
    getTranslateValues("left")
  );
  const translateXRight = useTransform(
    scrollYProgress,
    transformValues,
    getTranslateValues("right")
  );
  return (
    <article
      ref={articleRef}
      className="flex items-center justify-center h-screen"
    >
      <motion.div
        style={{ translateX: translateXLeft, rotate: "-2deg" }}
        className="relative w-[50vw] h-[80%] min-w-[300px] max-w-[600px] rounded-3xl overflow-hidden flex-auto"
      >
        <Image
          className="object-cover"
          src="/showcase-1.jpeg"
          alt="Image"
          fill
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-24 px-16 w-[50vw] max-w-[600px] flex-auto">
        <div className="flex items-center gap-5">
          <p className="text-white font-poppins uppercase text-xs">
            September 2019
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3 fill-white"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-white font-poppins uppercase text-xs">Mongolia</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-white text-8xl text-center font-roslindale font-light">
            Follow The <br /> Tracks
          </h1>
          <Link href="/stills/test">
            <Button>See case study</Button>
          </Link>
        </div>
        <div className="w-2/4 h-4 bg-orange rounded-xl"></div>
      </div>
      <motion.div
        style={{ translateX: translateXRight, rotate: "2deg" }}
        className="relative w-[50vw] h-[80%] min-w-[300px] max-w-[600px] rounded-3xl overflow-hidden flex-auto"
      >
        <Image
          className="object-cover"
          src="/showcase-2.jpeg"
          alt="Image"
          fill
        />
      </motion.div>
    </article>
  );
};
