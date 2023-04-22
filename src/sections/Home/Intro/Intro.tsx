import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavigationContext } from "@/components/Navigation/Navigation.context";

export const Intro = () => {
  const { setIsOpen } = useContext(NavigationContext) || {};
  const animationOptions = {
    initial: { scale: 1 },
    whileHover: {
      scale: 2,
      transition: { ease: [0.34, 1.56, 0.64, 1], duration: 0.5 },
    },
  };
  const headingStyles =
    "text-7xl max-md:text-5xl text-white font-roslindale font-light";
  const imageStyles = "relative rounded-xl overflow-hidden-updated";

  return (
    <section className="container max-w-3xl mt-28">
      <button className="btn" onClick={() => setIsOpen?.(true)}>
        click
      </button>
      <div className="flex justify-center items-end space-y-3 gap-3 flex-wrap max-md:gap-2">
        <h3 className={headingStyles}>A</h3>
        <motion.div
          {...animationOptions}
          initial={{ rotate: "-6deg" }}
          className={`${imageStyles} w-[60px] h-[80px] max-md:w-[40px] max-md:h-[60px]`}
        >
          <Image
            className="object-cover"
            src="/mini-thumbnail-1.jpeg"
            alt="Mountains"
            fill
          />
        </motion.div>
        <h3 className={headingStyles}>tiny</h3>
        <h3 className={headingStyles}>mountain</h3>
        <h3 className={headingStyles}>village</h3>
        <motion.div
          {...animationOptions}
          initial={{ rotate: "3deg" }}
          className={`${imageStyles} w-[60px] h-[80px] max-md:w-[40px] max-md:h-[60px]`}
        >
          <Image
            className="object-cover"
            src="/mini-thumbnail-2.jpeg"
            alt="Mountains"
            fill
          />
        </motion.div>
        <h3 className={headingStyles}>where</h3>
        <h3 className={headingStyles}>it</h3>
        <h3 className={headingStyles}>all</h3>
        <h3 className={headingStyles}>began</h3>
        <div className="flex">
          <h3 className={headingStyles}>.</h3>
          <h3 className={headingStyles}>.</h3>
          <h3 className={headingStyles}>.</h3>
        </div>
        <motion.div
          {...animationOptions}
          className={`${imageStyles} w-[120px] h-[80px] max-md:w-[90px] max-md:h-[60px]`}
        >
          <Image
            className="object-cover"
            src="/mini-thumbnail-3.jpeg"
            alt="Girl"
            fill
          />
        </motion.div>
      </div>
      <p className="text-white font-poppins text-base text-center mt-20">
        Giulia Gartner (
        <a
          href="https://www.instagram.com/giuligartner/"
          target="_blank"
          className="text-orange transition-colors duration-300"
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
