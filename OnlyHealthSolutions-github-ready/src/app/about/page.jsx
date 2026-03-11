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

  <section className="section" style={{ position: "relative", overflow: "hidden" }}>
  
  <div
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      zIndex: 0
    }}
  >
    <img
      src="/logo2.png"
      alt=""
      aria-hidden="true"
      style={{
        width: "900px",
        maxWidth: "none",
        opacity: 0.08,
        transform: "rotate(10deg)"
      }}
    />
  </div>

  <div className="container page-grid-2" style={{ position: "relative", zIndex: 1 }}>

    <div className="card">
      <h3>Our mission</h3>
      <p style={{ color: "#64748b", lineHeight: 1.7 }}>
        Our mission is to provide compassionate and personalized support that enables individuals to remain safely and comfortably in their own homes. We are dedicated to upholding dignity, respect, and independence as central principles of our service. Through customized care plans and attentive assistance, we strive to improve the quality of life for each client. Establishing meaningful relationships is integral to our approach, as we aim to build trust with clients and their families. Our primary objective is to foster security and well-being, guaranteeing that every individual receives the highest standard of care in a familiar environment. Our commitment extends to supporting families, offering assurance and peace of mind throughout the care process.
      </p>
    </div>

    <div className="card">
      <h3>Why families choose us</h3>
      <p style={{ color: "#64748b", lineHeight: 1.7 }}>
        Families choose Only Health Solutions for private home care because we offer compassionate, individualized support. By tailoring care plans to each person's needs and preferences, our trained caregivers provide attentive assistance that prioritizes independence, comfort, and dignity at home. We build trusting relationships with clients and families, delivering both practical care and emotional reassurance. Our holistic approach ensures the highest standard of care in a supportive environment. Our dedication to respect, dignity, and independence distinguishes us. Through customized services and genuine compassion, we consistently deliver reliable care families can trust. We guide and support families throughout the care process, improving quality of life and fostering a sense of security and well-being for clients, families, and caregivers.
      </p>
    </div>

  </div>
</section>
</main>
  );
}
