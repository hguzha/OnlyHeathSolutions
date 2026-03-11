import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import ContactForm from "@/components/contact-form";
import { brand } from "@/lib/site-data";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="Contact" title="Contact" subtitle="Call, email, or send a message to build your care plan.">

<div className="grid gap-4 md:grid-cols-12">
  <div className="rounded-3xl border bg-white p-6 shadow-sm md:col-span-5">
    <div className="space-y-4 text-sm">
      <a href={brand.phoneHref} className="flex items-center gap-2"><Phone className="size-4" /> {brand.phoneDisplay}</a>
      <a href={brand.emailHref} className="flex items-center gap-2"><Mail className="size-4" /> {brand.emailDisplay}</a>
      <div className="flex items-center gap-2"><MapPin className="size-4" /> {brand.addressLine}</div>
    </div>
  </div>
  <div className="rounded-3xl border bg-white p-6 shadow-sm md:col-span-7">
    <ContactForm />
  </div>
</div>

      </Section>
    </SiteShell>
  );
}
