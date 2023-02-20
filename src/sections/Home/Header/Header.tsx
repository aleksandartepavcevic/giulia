import React from "react";

export const Header = () => {
  return (
    <header className="h-screen py-16 flex justify-center items-center">
      <div className="relative  w-full h-full rounded-3xl overflow-hidden">
        <div className="relative z-10 w-full h-full flex justify-center items-center bg-black/40">
          <h1 className="text-8xl font-roslindale font-light text-white uppercase text-center">
            Giulia Gartner <br /> photographer &<br /> filmmaker
          </h1>
        </div>
        <video
          className="absolute z-0 top-0 left-0 right-0 bottom-0 object-cover w-full h-full"
          src="/thumbnail.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </header>
  );
};
