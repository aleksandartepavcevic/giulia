import Link from "next/link";
import React, { useContext } from "react";
import { NavigationContext } from "../../Navigation.context";
import { ClickAwayListener } from "@mui/base";

export const Mobile = () => {
  const { setIsOpen } = useContext(NavigationContext) || {};
  const handleOnClickAway = () => setIsOpen?.(false);

  return (
    <>
      <ClickAwayListener onClickAway={handleOnClickAway}>
        <div className="lg:hidden flex justify-between relative z-50">
          <Link
            href="/"
            className="text-white text-3xl font-roslindale font-thin"
          >
            Giulia
          </Link>
          <div className="flex gap-2">
            <Link href="#" className="btn">
              F/23
            </Link>
            <button className="btn" onClick={() => setIsOpen?.((s) => !s)}>
              Menu
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};
