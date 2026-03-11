import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant="default", size="default", asChild=false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
  };
  const sizes = { default: "h-10 px-4 py-2", lg: "h-11 px-6" };
  return <Comp ref={ref} className={cn("inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors", variants[variant], sizes[size], className)} {...props} />;
});
Button.displayName = "Button";
export { Button };
