export default function WhyChooseUs() {
  const points = [
    "Personalized care plans tailored to each client",
    "Respectful, compassionate caregivers",
    "Clear communication with families",
    "Support that feels warm, human, and dependable",
  ];

  return (
    <section style={{ width: "100%", backgroundColor: "#ffffff", padding: "60px 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {points.map((item) => (
            <div
              key={item}
              style={{
                borderRadius: "1rem",
                backgroundColor: "#f1f5f9",
                padding: "20px",
              }}
            >
              <div
                style={{
                  marginBottom: "12px",
                  height: "10px",
                  width: "56px",
                  borderRadius: "9999px",
                  background: "linear-gradient(to right, #22D3EE, #67E8F9, #A855F7)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "#475569",
                  margin: "0",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

