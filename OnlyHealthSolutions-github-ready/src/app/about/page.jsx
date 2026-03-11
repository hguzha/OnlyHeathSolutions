import PageHero from "@/components/page-hero";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Only Health Solutions"
        subtitle="Compassion, dignity, and dependable support are at the center of everything we do."
        image="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=2000&auto=format&fit=crop"
        height={440}
      />

      <section className="section">
        <div className="container page-grid-2">
          <div className="card">
            <h3>Our mission</h3>
            <p style={{ color: "#64748b", lineHeight: 1.7 }}>
              We help families feel supported through compassionate private home care that prioritizes dignity, safety, and peace of mind.
            </p>
          </div>

          <div className="card">
            <h3>Why families choose us</h3>
            <p style={{ color: "#64748b", lineHeight: 1.7 }}>
              Personalized support, respectful caregivers, clear communication, and dependable scheduling.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
