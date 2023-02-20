import Link from "next/link";
import React from "react";

export const Mobile = () => {
  return (
    <div className="lg:hidden flex justify-between">
      <Link href="/" className="text-white text-3xl font-roslindale font-thin">
        Giulia
      </Link>
      <div className="flex gap-2">
        <Link href="#" className="btn">
          F/23
        </Link>
        <button className="btn">Menu</button>
      </div>
    </div>
  );
};
