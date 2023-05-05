import Link from "next/link";
import React, { useContext } from "react";
import { NavigationContext } from "../../Navigation.context";
import { ClickAwayListener } from "@mui/base";
import { Button } from "@/components/Button/Button";

export const Mobile = () => {
  const { setIsOpen } = useContext(NavigationContext) || {};
  const handleOnClickAway = () => setIsOpen?.(false);

  return (
    <>
      <ClickAwayListener onClickAway={handleOnClickAway}>
        <div className="lg:hidden flex items-center justify-between relative z-50">
          <Link
            href="/"
            className="text-white text-3xl font-roslindale font-thin"
          >
            Giulia
          </Link>
          <div className="flex gap-2">
            <Link href="#">
              <Button>F/23</Button>
            </Link>
            <Button onClick={() => setIsOpen?.((s) => !s)}>Menu</Button>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};
