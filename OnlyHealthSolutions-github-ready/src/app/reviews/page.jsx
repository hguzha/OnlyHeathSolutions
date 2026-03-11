import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import TestimonialCard from "@/components/testimonial-card";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="Reviews" title="Reviews" subtitle="Trusted by families who value compassionate, dependable care.">

<div className="grid gap-4 md:grid-cols-3">
  <TestimonialCard name="A. Johnson" role="Daughter of client" quote="The caregiver was kind, punctual, and truly attentive. We finally felt supported and informed." />
  <TestimonialCard name="M. Rivera" role="Client" quote="They listened to my routine and respected my independence. It made a big difference." />
  <TestimonialCard name="S. Patel" role="Family caregiver" quote="Respite care helped me recharge. Communication was easy and the team was responsive." />
</div>

      </Section>
    </SiteShell>
  );
}
