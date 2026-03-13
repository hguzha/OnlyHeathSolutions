import PageHero from "@/components/page-hero";

export default function DementiaPage() {
  return (
    <main>
      <PageHero
        title="Dementia Care"
        subtitle="Professional nursing services delivered in the comfort of home."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
      />

      <section className="section">
        <div className="container">
          <h2>Skilled Nursing Services</h2>

          <p>
            Our licensed nurses provide clinical care and monitoring to support
            recovery, manage chronic conditions, and improve quality of life at home.
          </p>

          <ul>
            <li>Medication management</li>
            <li>Health monitoring</li>
            <li>Post-hospital care</li>
            <li>Chronic disease support</li>
            <li>Care coordination with physicians</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
