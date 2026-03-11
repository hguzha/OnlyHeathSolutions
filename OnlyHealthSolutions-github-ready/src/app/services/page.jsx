import PageHero from "@/components/page-hero";
import ServiceCard from "@/components/service-card";
import { services } from "@/lib/site-data";

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
        </div>
      </section>
    </main>
  );
}
