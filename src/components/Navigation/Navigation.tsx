import React from "react";
import { Desktop } from "./components/Desktop/Desktop";
import { Mobile } from "./components/Mobile/Mobile";

export const Navigation = () => {
  return (
    <div className="bg-transparent backdrop-blur fixed top-0 left-0 right-0 z-[999]">
      <div className="container max-w-xxl mx-auto py-3">
        <Mobile />
        <Desktop />
      </div>
    </div>
  );
};
