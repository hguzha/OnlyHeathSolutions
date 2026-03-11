import PageHero from "@/components/page-hero";
import { Users, BriefcaseMedical, HeartHandshake, Stethoscope, Mail } from "lucide-react";
import { brand } from "@/lib/site-data";

const roles = [
  {
    title: "Registered Nurse (RN)",
    icon: Stethoscope,
    text: "Provide advanced nursing care, clinical oversight, and coordination with physicians to ensure high-quality care for clients at home."
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    icon: Users,
    text: "Support clients with personal care, mobility, daily routines, and compassionate assistance in the home.",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    icon: BriefcaseMedical,
    text: "Provide skilled nursing support, monitoring, coordination, and hands-on care as needed.",
  },
  {
    title: "Companion / Sitter",
    icon: HeartHandshake,
    text: "Offer companionship, supervision, safety support, and meaningful day-to-day presence for clients.",
  },
];

export default function CareersPage() {
  const mailtoHref = `${brand.emailHref}?subject=${encodeURIComponent(
    "Career Application — Only Health Solutions"
  )}&body=${encodeURIComponent(
    "Full Name:\nPhone Number:\nEmail Address:\nRole Applying For:\nYears of Experience:\nAvailability:\nCity/Location:\n\nTell us about yourself:\n"
  )}`;

  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Join a team dedicated to compassionate care, professionalism, and meaningful service."
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop"
        height={440}
      />

      <section className="section">
        <div className="container">
          <div className="page-grid-3">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.title} className="card">
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
                        width: 44,
                        height: 44,
                        borderRadius: 14,
                        display: "grid",
                        placeItems: "center",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 style={{ margin: 0 }}>{role.title}</h3>
                  </div>

                  <p style={{ color: "#64748b", lineHeight: 1.7, marginTop: 18 }}>
                    {role.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="card" style={{ marginTop: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Apply by Email</h3>
                <p style={{ margin: "6px 0 0", color: "#64748b" }}>
                  Send your information directly to our team for review.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 18,
                borderRadius: 18,
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
              }}
            >
              <p style={{ marginTop: 0, color: "#64748b", lineHeight: 1.7 }}>
                Include your:
              </p>

              <ul style={{ color: "#64748b", lineHeight: 1.8, paddingLeft: 18 }}>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Role you are applying for</li>
                <li>Years of experience</li>
                <li>Availability</li>
                <li>Your city/location</li>
              </ul>

              <div style={{ marginTop: 18 }}>
                <a className="btn btn-primary" href={mailtoHref}>
                  Send Application Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
