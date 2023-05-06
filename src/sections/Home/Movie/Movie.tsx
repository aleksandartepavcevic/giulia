import { Button } from "@/components/Button/Button";
import {
  cubicBezier,
  easeInOut,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export const Movie = () => {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(Infinity);
  const distanceSync = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };

    if (val === Infinity) return 0;

    return val - bounds.x - bounds?.width / 2;
  });

  const distance = useSpring(distanceSync);

  const containerTransform = useTransform(
    distance,
    [-800, 0, 800],
    [
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(2deg) rotateY(15deg) rotateZ(0deg) skew(0deg, 0deg)",
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(2deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(2deg) rotateY(-15deg) rotateZ(0deg) skew(0deg, 0deg)",
    ]
  );

  const imageTransform = useTransform(
    distance,
    [-600, 0, 600],
    [
      "translate3d(30px, 0px, 0px)",
      "translate3d(0px, 0px, 0px)",
      "translate3d(-30px, 0px, 0px)",
    ]
  );

  return (
    <section
      onMouseLeave={() => mouseX.set(Infinity)}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      ref={ref}
      className="flex justify-center items-center flex-col"
    >
      <div className="flex items-center gap-5 mb-10">
        <p className="text-white font-poppins uppercase text-xs">
          November 2022
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 fill-white"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-white font-poppins uppercase text-xs">
          Cornwall, Scotland
        </p>
      </div>
      <h2 className="text-white text-7xl md:text-8xl font-roslindale font-light mb-20">
        Amelia
      </h2>
      <motion.div
        style={{
          transform: containerTransform,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <Link
          href="/motion/test"
          className="block rounded-3xl overflow-hidden w-[70vw] md:w-[60vw] h-[55vh] max-w-[800px] max-h-[600px]"
        >
          <motion.div
            style={{
              transform: imageTransform,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative z-10 w-full h-full"
          >
            <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+64px)] h-[calc(100%+64px)]">
              <Image
                className="object-cover"
                src="/video-thumbnail-1.jpeg"
                alt="Image"
                fill
              />
            </motion.div>
          </motion.div>
          <div className="absolute flex justify-center items-center z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[100px] h-[100px] bg-black/40 rounded-full backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 fill-white stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
        </Link>
        <div className="absolute -top-[12%] md:-top-[15%] -right-[15%] z-0 w-[32vw] h-[14vh] md:w-[18vw] md:h-[20vh] max-w-[300px] max-h-[280px] rounded-3xl overflow-hidden flex-auto">
          <motion.div
            style={{
              transform: imageTransform,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative w-full h-full"
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+64px)] h-[calc(100%+64px)]">
              <Image
                className="object-cover"
                src="/video-thumbnail-2.jpeg"
                alt="Image"
                fill
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute top-[50%] -left-[30%] md:-left-[13%] z-20 w-[32vw] h-[12vh] md:w-[12vw] md:h-[18vh] max-w-[300px] max-h-[240px] rounded-3xl overflow-hidden flex-auto -translate-y-[50%]">
          <motion.div
            style={{
              transform: imageTransform,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative w-full h-full"
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+64px)] h-[calc(100%+64px)]">
              <Image
                className="object-cover"
                src="/video-thumbnail-3.jpeg"
                alt="Image"
                fill
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-[10%] -right-[13%] md:right-[13%] z-20 w-[42vw] h-[14vh] md:w-[14vw] md:h-[18vh] max-w-[250px] max-h-[200px] rounded-3xl overflow-hidden flex-auto">
          <motion.div
            style={{
              transform: imageTransform,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            className="relative w-full h-full"
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[calc(100%+64px)] h-[calc(100%+64px)]">
              <Image
                className="object-cover"
                src="/video-thumbnail-4.jpeg"
                alt="Image"
                fill
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Button className="mt-20 md:mt-16">See case study</Button>
    </section>
  );
};
