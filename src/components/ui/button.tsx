import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gold text-white shadow-sm hover:bg-gold-dark hover:shadow-md active:scale-[0.98]":
              variant === "primary",
            "border border-gold/40 text-gold hover:bg-gold hover:text-white active:scale-[0.98]":
              variant === "secondary",
            "text-gold hover:text-gold-dark":
              variant === "ghost",
          },
          {
            "px-5 py-2.5 text-sm rounded-[var(--radius-sm)]": size === "sm",
            "px-7 py-3.5 rounded-[var(--radius-sm)]": size === "default",
            "px-9 py-4 text-lg rounded-[var(--radius-sm)]": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, type ButtonProps };
