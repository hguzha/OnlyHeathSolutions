export default function WhyChooseUs() {
  const points = [
    "Personalized care plans tailored to each client",
    "Respectful, compassionate caregivers",
    "Clear communication with families",
    "Support that feels warm, human, and dependable",
  ];

  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            background: "rgba(255,255,255,0.88)",
            borderRadius: "28px",
            padding: "44px",
          }}
        >
          <p style={{ color: "#64748b", marginBottom: 10, fontWeight: 600 }}>
            Why Families Choose Us
          </p>
          <h2 style={{ fontSize: "42px", margin: "0 0 20px", fontWeight: 800 }}>
            Care that feels personal, not transactional
          </h2>

          <div style={{ display: "grid", gap: 16, maxWidth: "760px" }}>
            {points.map((point) => (
              <div
                key={point}
                style={{
                  padding: "16px 18px",
                  borderRadius: "18px",
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  color: "#334155",
                  fontWeight: 500,
                }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
