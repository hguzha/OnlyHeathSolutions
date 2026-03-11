import PageHero from "@/components/page-hero";

export default function HowItWorksPage() {
  const steps = [
    "Call for a quick consult",
    "Receive a personalized care plan",
    "Begin care with ongoing communication and support",
  ];

  return (
    <main>
      <PageHero
        title="How It Works"
        subtitle="A simple, supportive process from the first conversation to ongoing care at home."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop"
        height={440}
      />

      <section className="section">
        <div className="container page-grid-3">
          {steps.map((step, index) => (
            <div key={step} className="card">
              <h3>Step {index + 1}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.7 }}>{step}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
