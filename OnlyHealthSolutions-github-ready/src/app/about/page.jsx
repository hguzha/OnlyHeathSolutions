import SiteShell from "@/components/site-shell";
import Section from "@/components/section";


export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="About" title="About Only Health Solutions" subtitle="Learn about our mission, values, and family-centered approach.">

<div className="grid gap-6 md:grid-cols-2">
  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold">Our mission</h3>
    <p className="mt-3 text-slate-600">We help families feel supported through compassionate private home care that prioritizes dignity, safety, and peace of mind.</p>
  </div>
  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold">Why families choose us</h3>
    <p className="mt-3 text-slate-600">Personalized support, respectful caregivers, clear communication, and dependable scheduling.</p>
  </div>
</div>

      </Section>
    </SiteShell>
  );
}
