import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import { faqs } from "@/lib/site-data";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="FAQ" title="FAQ" subtitle="Questions, answered.">

<div className="rounded-3xl border bg-white p-4 shadow-sm">
  <Accordion type="single" collapsible>
    {faqs.map((f, idx) => (
      <AccordionItem key={f.q} value={`item-${idx}`}>
        <AccordionTrigger>{f.q}</AccordionTrigger>
        <AccordionContent>{f.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</div>

      </Section>
    </SiteShell>
  );
}
