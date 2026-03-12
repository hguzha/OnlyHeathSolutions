export default function TestimonialStrip() {
  const testimonials = [
    {
      quote:
        "Only Health Solutions provided exceptional care for our mother. The caregiver was compassionate, professional, and truly treated her like family.",
      name: "Family Member",
      location: "Cobb County",
    },
    {
      quote:
        "We finally have peace of mind knowing someone dependable is caring for our father. The communication and attention to detail have been outstanding.",
      name: "Client Family",
      location: "Fulton County",
    },
    {
      quote:
        "Their team is professional, respectful, and incredibly supportive. The care provided has made a meaningful difference in our loved one's daily life.",
      name: "Client Family",
      location: "Cherokee County",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            background: "rgba(255,255,255,0.92)",
            borderRadius: "28px",
            padding: "48px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          <p
            style={{
              color: "#64748b",
              fontWeight: 600,
              marginBottom: "10px",
            }}
          >
            What Families Are Saying
          </p>

          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              margin: "0 0 30px",
            }}
          >
            Trusted by Families Across Metro Atlanta
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: "26px",
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "26px",
                  borderRadius: "20px",
                  background: "white",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#334155",
                    marginBottom: "18px",
                  }}
                >
                  “{item.quote}”
                </p>

                <div style={{ fontWeight: 700 }}>{item.name}</div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  {item.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
