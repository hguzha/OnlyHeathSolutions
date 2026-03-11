import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { brand } from "@/lib/site-data";
export default function ServiceCard({ icon: Icon, title, bullets }) {
  return (
    <Card className="group h-full rounded-2xl border/60 bg-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <div className="mb-3 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-2xl text-white shadow-sm" style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}>
            <Icon className="size-5" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-slate-600">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
