import * as React from "react";
import { cn } from "@/lib/utils";
const Input = React.forwardRef(({ className, ...props }, ref) => <input ref={ref} className={cn("w-full rounded-xl border border-slate-200 px-3 py-2 text-sm", className)} {...props} />);
Input.displayName = "Input";
export { Input };
