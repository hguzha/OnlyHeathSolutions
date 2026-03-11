import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import { Users } from "lucide-react";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="Careers" title="Careers" subtitle="Build a meaningful career in care.">

<div className="grid gap-4 md:grid-cols-3">
  {["Certified Nursing Assistant (CNA)","Licensed Practical Nurse (LPN)","Companion / Sitter"].map((role) => (
    <div key={role} className="rounded-3xl border bg-white p-6 shadow-sm">
      <Users className="size-8 text-slate-700" />
      <h3 className="mt-4 text-lg font-semibold">{role}</h3>
      <p className="mt-2 text-sm text-slate-600">Join a team that values compassion, professionalism, and growth.</p>
    </div>
  ))}
</div>

      </Section>
    </SiteShell>
  );
}
