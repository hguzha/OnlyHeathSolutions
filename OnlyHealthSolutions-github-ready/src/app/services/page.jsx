import PageHero from "@/components/page-hero";
import ServiceCard from "@/components/service-card";
import MobileSwipeCarousel from "@/components/mobile-swipe-carousel";
import { careProcess, serviceCards, galleryImages, brand, services } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        subtitle="Flexible private home care tailored to your loved one’s routines, comfort, and safety."
        image="https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=2000&auto=format&fit=crop"
        height={500}
      />

      <section className="section">
        <div className="container">
          <div className="page-grid-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10">
            <MobileSwipeCarousel items={galleryImages} />
          </div>

          <div className="mt-10">
            <Card className="rounded-3xl border bg-white/80 shadow-sm backdrop-blur">
              <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
                <div>
                  <div className="text-lg font-semibold">Need help choosing the right care?</div>
                  <p className="mt-1 text-sm text-slate-600">
                    Request a consult and our team will reach out to discuss your needs, schedule, and care options.
                  </p>
                </div>

                <Button
                  asChild
                  className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                  }}
                >
                  <a
                    href={`${brand.emailHref}?subject=${encodeURIComponent(
                      "Request a Consult — Only Health Solutions"
                    )}&body=${encodeURIComponent(
                      "Name:\nPhone:\nEmail:\nCare needed:\nPreferred schedule:\nLocation:\n\nHow can we help?\n"
                    )}`}
                  >
                    Request a Consult
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
