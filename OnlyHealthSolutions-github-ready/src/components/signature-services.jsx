import { Stethoscope, HandHeart, Users } from "lucide-react";

const items = [
  {
    title: "Nursing",
    icon: Stethoscope,
    text: "Professional clinical support tailored to each client’s needs at home.",
  },
  {
    title: "Personal Care",
    icon: HandHeart,
    text: "Respectful assistance with daily routines, hygiene, mobility, and comfort.",
  },
  {
    title: "Companion / Sitter",
    icon: Users,
    text: "Meaningful companionship, reassurance, and day-to-day support for families.",
  },
];

export default function SignatureServices() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            background: "rgba(255,255,255,0.84)",
            border: "1px solid rgba(255,255,255,0.55)",
            borderRadius: "28px",
            padding: "40px",
            backdropFilter: "blur(10px)",
          }}
        >
          <p style={{ color: "#64748b", marginBottom: 10, fontWeight: 600 }}>
            Signature Services
          </p>
          <h2 style={{ fontSize: "42px", margin: "0 0 14px", fontWeight: 800 }}>
            Thoughtful care, beautifully delivered
          </h2>
          <p style={{ color: "#64748b", maxWidth: "760px", lineHeight: 1.7 }}>
            We provide private home care designed to preserve dignity, encourage independence, and support families with confidence.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "24px",
              marginTop: "34px",
            }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{ padding: "12px 4px" }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 16,
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
                      color: "white",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: "22px" }}>{item.title}</h3>
                  <p style={{ color: "#64748b", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
