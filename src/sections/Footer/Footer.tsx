import { LINKS } from "@/constants/links";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center  mt-40">
      <div className="relative p-6 rounded-2xl bg-black w-fit  border-dashed border-white/20 border group/email cursor-pointer">
        <div className="absolute -top-16 left-[50%] translate-x-[-50%] h-5 overflow-hidden text-center">
          <h6 className="text-white font-poppins uppercase text-sm group-hover/email:translate-y-[-100%] transition-transform duration-300">
            Get in touch
          </h6>
          <h6 className="text-white font-poppins uppercase text-sm group-hover/email:translate-y-[-100%] transition-transform duration-300">
            Click to copy
          </h6>
        </div>
        <h1 className="text-white font-roslindale font-light text-4xl uppercase group-hover/email:scale-[0.95] transition-transform duration-300 max-md:text-3xl max-sm:text-2xl max-[330px]:text-xl">
          photo@giuligartner.com
        </h1>
      </div>
      <div className="flex max-md:flex-col items-center justify-between w-full my-14">
        <h6 className="text-white font-poppinsa uppercase text-xs max-md:order-2 max-md:mt-8">
          Giulia Gartner &copy; 2023
        </h6>
        <div className="flex gap-3 max-md:order-1">
          <a
            href={LINKS.giulia.youtube}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Youtube
          </a>
          <a
            href={LINKS.giulia.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Instagram
          </a>
          <a
            href={LINKS.giulia.twitter}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Twitter
          </a>
        </div>
        <a
          href={LINKS.thomas.twitter}
          target="_blank"
          rel="noreferrer"
          className="text-white font-poppins uppercase text-xs max-md:order-3"
        >
          Design & dev - Thomas Bosc
        </a>
      </div>
    </footer>
  );
};
