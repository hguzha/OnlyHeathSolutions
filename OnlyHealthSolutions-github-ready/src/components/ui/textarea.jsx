import * as React from "react";
import { cn } from "@/lib/utils";
const Textarea = React.forwardRef(({ className, ...props }, ref) => <textarea ref={ref} className={cn("w-full rounded-xl border border-slate-200 px-3 py-2 text-sm", className)} {...props} />);
Textarea.displayName = "Textarea";
export { Textarea };
