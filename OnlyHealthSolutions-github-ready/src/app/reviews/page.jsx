import PageHero from "@/components/page-hero";
import { reviews } from "@/lib/site-data";

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        title="Reviews"
        subtitle="See why families trust Only Health Solutions for respectful, responsive care at home."
        image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2000&auto=format&fit=crop"
        height={400}
      />

      <section className="section">
        <div className="container page-grid-3">
          {reviews.map((item) => (
            <div key={item.name} className="card">
              <h3>{item.name}</h3>
              <div style={{ color: "#64748b", marginBottom: 12 }}>{item.role}</div>
              <p style={{ color: "#64748b", lineHeight: 1.7 }}>“{item.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
