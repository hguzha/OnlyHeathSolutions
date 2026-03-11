import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { brand } from "@/lib/site-data";
export default function TestimonialCard({ name, role, quote }) {
  return (
    <Card className="rounded-2xl border/60 bg-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-1" style={{ color: brand.colors.primary }}>
          {[...Array(5)].map((_, i) => <Star key={i} className="size-4" />)}
        </div>
        <p className="mt-4 text-sm text-slate-600">“{quote}”</p>
        <div className="mt-4">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
}
