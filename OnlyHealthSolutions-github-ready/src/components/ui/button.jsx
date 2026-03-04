import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-900/90",
      outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
      ghost: "hover:bg-slate-100 text-slate-900",
    };

    const sizes = { default: "h-10 px-4 py-2", lg: "h-11 px-6", sm: "h-9 px-3" };

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50",
          variants[variant] ?? variants.default,
          sizes[size] ?? sizes.default,
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
