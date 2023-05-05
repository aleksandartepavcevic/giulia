import { Button } from "@/components/Button/Button";
import { LINKS } from "@/constants/links";
import Link from "next/link";
import React from "react";

export const Desktop = () => {
  return (
    <div className="flex justify-between items-center max-lg:hidden">
      <div className="flex gap-2">
        <Link href="/stills" className="inline-block">
          <Button>Stills</Button>
        </Link>
        <Link href="/motion" className="inline-block">
          <Button>Motion</Button>
        </Link>
        <Link href="/about" className="inline-block">
          <Button>About</Button>
        </Link>
      </div>
      <Link href="/" className="text-white text-3xl font-roslindale font-thin">
        Giulia
      </Link>
      <div className="flex gap-2">
        <Link href={LINKS.giulia.instagram} className="inline-block">
          <Button>Instagram</Button>
        </Link>
        <Link
          href={`mailto:${LINKS.giulia.email}?subject=%F0%9F%93%B8%20`}
          className="inline-block"
        >
          <Button>Email</Button>
        </Link>
        <Link href="#" className="inline-block">
          <Button>F/23</Button>
        </Link>
      </div>
    </div>
  );
};
