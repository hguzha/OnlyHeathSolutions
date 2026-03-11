import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import { galleryImages } from "@/lib/site-data";
import MobileSwipeCarousel from "@/components/mobile-swipe-carousel";

export default function Page() {
  return (
    <SiteShell>
      <Section eyebrow="Gallery" title="Gallery" subtitle="A look at compassionate care moments and supportive home care scenes.">

<MobileSwipeCarousel items={galleryImages} />
<div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
  {galleryImages.map((img, idx) => (
    <div key={`${img.src}-${idx}`} className="group relative overflow-hidden rounded-3xl border bg-white shadow-sm">
      <img src={img.src} alt={img.caption} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.58) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-sm font-semibold text-white drop-shadow">{img.caption}</div>
        <div className="mt-1 text-xs text-white/80">Only Health Solutions</div>
      </div>
    </div>
  ))}
</div>

      </Section>
    </SiteShell>
  );
}
