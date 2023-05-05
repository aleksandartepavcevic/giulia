import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Movie = () => {
  return (
    <section className="flex justify-center items-center flex-col">
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
      <div className="relative">
        <Link href="/motion/test" className="relative">
          <div className="relative z-10 w-[60vw] h-[55vh] max-w-[1024px] max-h-[768px] rounded-3xl overflow-hidden flex-auto">
            <Image
              className="object-cover"
              src="/video-thumbnail-1.jpeg"
              alt="Image"
              fill
            />
          </div>
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
        <div className="absolute -top-[12%] md:-top-[15%] -right-[15%] z-0 w-[32vw] h-[14vh] md:w-[18vw] md:h-[20vh] max-w-[400px] max-h-[300px] rounded-3xl overflow-hidden flex-auto">
          <Image
            className="object-cover"
            src="/video-thumbnail-2.jpeg"
            alt="Image"
            fill
          />
        </div>
        <div className="absolute top-[50%] -left-[40%] md:-left-[13%] z-20 w-[32vw] h-[12vh] md:w-[12vw] md:h-[18vh] max-w-[300px] max-h-[240px] rounded-3xl overflow-hidden flex-auto -translate-y-[50%]">
          <Image
            className="object-cover"
            src="/video-thumbnail-3.jpeg"
            alt="Image"
            fill
          />
        </div>
        <div className="absolute -bottom-[10%] -right-[13%] md:right-[13%] z-20 w-[42vw] h-[14vh] md:w-[14vw] md:h-[18vh] max-w-[280px] max-h-[200px] rounded-3xl overflow-hidden flex-auto">
          <Image
            className="object-cover"
            src="/video-thumbnail-4.jpeg"
            alt="Image"
            fill
          />
        </div>
      </div>
      <Button className="mt-20 md:mt-14">See case study</Button>
    </section>
  );
};
