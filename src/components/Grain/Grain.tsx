import React from "react";

export const Grain = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] opacity-80 overflow-hidden pointer-events-none">
      <div className="absolute top-[-150%] left-[-150%] right-0 bottom-0 w-[300%] h-[300%] bg-auto bg-center animate-grain-texture bg-[url('/grain-texture.png')]"></div>
    </div>
  );
};
