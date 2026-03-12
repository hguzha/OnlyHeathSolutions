import PageHero from "@/components/page-hero";
import { Users, BriefcaseMedical, HeartHandshake, Stethoscope, Mail } from "lucide-react";
import { brand } from "@/lib/site-data";

const roles = [
  {
    title: "Registered Nurse (RN)",
    icon: Stethoscope,
    text: "Provide advanced nursing care, clinical oversight, and coordination with physicians to ensure high-quality care for clients at home.",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    icon: BriefcaseMedical,
    text: "Provide skilled nursing support, monitoring, medication assistance, and hands-on care for clients.",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    icon: Users,
    text: "Support clients with personal care, mobility assistance, and daily routines in a respectful and compassionate manner.",
  },
  {
    title: "Companion / Sitter",
    icon: HeartHandshake,
    text: "Offer companionship, supervision, safety monitoring, and meaningful support that helps clients remain comfortable at home.",
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
        //title="Join Our Team"
        subtitle="Join a team dedicated to compassionate care, professionalism, and meaningful service."
        height={460}
        images={[
          "1000251260.jpg",
          "1000251261.png",
          "1000251264.jpg",
        ]}
      />

      <section className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginTop: "30px",
          }}
          className="container"
        >
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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

        <div className="container">
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
