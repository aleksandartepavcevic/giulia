import { LINKS } from "@/constants/links";
import Link from "next/link";
import React from "react";

export const Desktop = () => {
  return (
    <div className="flex justify-between items-center max-lg:hidden">
      <div className="flex gap-2">
        <Link href="/stills" className="btn inline-block">
          Stills
        </Link>
        <Link href="/motion" className="btn inline-block">
          Motion
        </Link>
        <Link href="/about" className="btn inline-block">
          About
        </Link>
      </div>
      <Link href="/" className="text-white text-3xl font-roslindale font-thin">
        Giulia
      </Link>
      <div className="flex gap-2">
        <Link href={LINKS.giulia.instagram} className="btn inline-block">
          Instagram
        </Link>
        <Link
          href={`mailto:${LINKS.giulia.email}?subject=%F0%9F%93%B8%20`}
          className="btn inline-block"
        >
          Email
        </Link>
        <Link href="#" className="btn inline-block">
          F/23
        </Link>
      </div>
    </div>
  );
};
