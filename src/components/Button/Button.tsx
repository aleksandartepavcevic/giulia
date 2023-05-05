import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const button = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "hover:bg-white/10",
    "transition-colors",
    "duration-300",
    "uppercase",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-transparent",
          "border-[1px]",
          "rounded-full",
          "font-poppins",
          "font-medium",
          "py-[0.5em]",
          "px-[1em]",
        ],
      },
      color: {
        white: ["text-white", "border-white"],
        black: ["text-black", "border-black"],
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      color: "white",
      size: "xs",
    },
  }
);

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof button> {}

export const Button = ({
  children,
  variant,
  color,
  size,
  className,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`${button({ variant, color, size })} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
