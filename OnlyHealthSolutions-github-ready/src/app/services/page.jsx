import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import ServiceCard from "@/components/service-card";
import MobileSwipeCarousel from "@/components/mobile-swipe-carousel";
import { services, galleryImages } from "@/lib/site-data";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="Services" title="Services" subtitle="Flexible private home care tailored to your needs.">

<div className="grid gap-4 md:grid-cols-3">
  {services.map((s) => <ServiceCard key={s.title} icon={s.icon} title={s.title} bullets={s.bullets} />)}
</div>
<div className="mt-8"><MobileSwipeCarousel items={galleryImages} /></div>

      </Section>
    </SiteShell>
  );
}
