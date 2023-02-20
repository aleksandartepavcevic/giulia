import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Showcase = () => {
  return (
    <article className="flex items-center justify-center h-screen">
      <div className="relative w-[50vw] h-[80%] max-w-[600px] rounded-3xl overflow-hidden flex-auto">
        <Image
          className="object-cover"
          src="/showcase-1.jpeg"
          alt="Image"
          fill
        />
      </div>
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
          <Link href="/stills/test" className="btn">
            See case study
          </Link>
        </div>
        <div className="w-2/4 h-4 bg-orange rounded-xl"></div>
      </div>
      <div className="relative w-[50vw] h-[80%] max-w-[600px] rounded-3xl overflow-hidden flex-auto">
        <Image
          className="object-cover"
          src="/showcase-2.jpeg"
          alt="Image"
          fill
        />
      </div>
    </article>
  );
};
