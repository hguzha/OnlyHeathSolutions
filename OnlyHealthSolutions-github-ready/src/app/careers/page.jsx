import PageHero from "@/components/page-hero";

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Join a team dedicated to compassionate care, professionalism, and meaningful service."
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop"
        height={440}
      />

      <section className="section">
        <div className="container page-grid-3">
          {["Certified Nursing Assistant (CNA)", "Licensed Practical Nurse (LPN)", "Companion / Sitter"].map((role) => (
            <div key={role} className="card">
              <h3>{role}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.7 }}>
                Join a team that values compassion, professionalism, and growth.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
