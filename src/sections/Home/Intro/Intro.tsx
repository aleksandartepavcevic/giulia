import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Intro = () => {
  return (
    <section className="container max-w-2xl mt-28">
      <div className="flex justify-center items-end space-y-3 gap-3 flex-wrap">
        <h3 className="text-7xl text-white font-roslindale font-light">A</h3>
        <div className="relative w-[60px] h-[80px] rounded-xl overflow-hidden -rotate-6">
          <Image
            className="object-cover"
            src="/mini-thumbnail-1.jpeg"
            alt="Mountains"
            fill
          />
        </div>
        <h3 className="text-7xl text-white font-roslindale font-light">tiny</h3>
        <h3 className="text-7xl text-white font-roslindale font-light">
          mountain
        </h3>
        <h3 className="text-7xl text-white font-roslindale font-light">
          village
        </h3>
        <div className="relative w-[60px] h-[80px] rounded-xl overflow-hidden rotate-3">
          <Image
            className="object-cover"
            src="/mini-thumbnail-2.jpeg"
            alt="Mountains"
            fill
          />
        </div>
        <h3 className="text-7xl text-white font-roslindale font-light">
          where
        </h3>
        <h3 className="text-7xl text-white font-roslindale font-light">it</h3>
        <h3 className="text-7xl text-white font-roslindale font-light">all</h3>
        <h3 className="text-7xl text-white font-roslindale font-light">
          began
        </h3>
        <div className="flex">
          <h3 className="text-7xl text-white font-roslindale font-light">.</h3>
          <h3 className="text-7xl text-white font-roslindale font-light">.</h3>
          <h3 className="text-7xl text-white font-roslindale font-light">.</h3>
        </div>
        <div className="relative w-[120px] h-[80px] rounded-xl overflow-hidden">
          <Image
            className="object-cover"
            src="/mini-thumbnail-3.jpeg"
            alt="Girl"
            fill
          />
        </div>
      </div>
      <p className="text-white font-poppins text-sm text-center mt-20">
        Giulia Gartner (
        <a
          href="https://www.instagram.com/giuligartner/"
          target="_blank"
          className="hover:text-orange transition-colors duration-300"
          rel="noreferrer noopener"
        >
          @giuligartner
        </a>
        ) is an outdoor, travel, and commercial photographer, filmmaker, and
        storyteller from the Dolomites in northern Italy. Her work focuses on
        capturing wild and rugged landscapes with a vivid color palette and
        dreamy elements. Her love for photography has spilled over into
        filmmaking which is one of the main creative outlets she pursues today.
      </p>
      <div className="flex justify-center mt-10">
        <Link href="/about" className="btn">
          Read my story
        </Link>
      </div>
    </section>
  );
};
