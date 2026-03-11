import PageHero from "@/components/page-hero";
import { faqItems } from "@/lib/site-data";

export default function FAQPage() {
  return (
    <main>
      <PageHero
        title="FAQ"
        subtitle="Quick answers about scheduling, caregivers, care options, and getting started."
        image="https://images.unsplash.com/photo-1576765607924-3f5c5f94c8c7?q=80&w=2000&auto=format&fit=crop"
        height={360}
      />

      <section className="section">
        <div className="container">
          <div className="grid">
            {faqItems.map((item) => (
              <div key={item.q} className="card">
                <h3>{item.q}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
