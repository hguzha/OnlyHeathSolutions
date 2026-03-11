import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import { steps } from "@/lib/site-data";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="How it works" title="How it works" subtitle="A simple, supportive path from first call to ongoing care.">

<div className="grid gap-4 md:grid-cols-3">
  {steps.map((s) => (
    <div key={s.title} className="rounded-3xl border bg-white p-6 shadow-sm">
      <s.icon className="size-8 text-slate-700" />
      <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{s.text}</p>
    </div>
  ))}
</div>

      </Section>
    </SiteShell>
  );
}
