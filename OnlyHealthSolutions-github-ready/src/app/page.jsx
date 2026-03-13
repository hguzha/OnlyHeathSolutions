import FixedBackgroundShell from "@/components/fixed-background-shell";
import PageHeroVideo from "@/components/page-hero-video";
import SignatureServices from "@/components/signature-services";
import WhyChooseUs from "@/components/why-choose-us";
import TestimonialStrip from "@/components/testimonial-strip";

export default function HomePage() {
  return (
    <FixedBackgroundShell>
      <PageHeroVideo />
      
      <div style={{ position: "relative", marginTop: "-4rem", zIndex: 10 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gap: "24px",
              borderRadius: "2rem",
              backgroundColor: "#ffffff",
              padding: "32px",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {[
              "Private in-home care tailored to each client",
              "Dependable, compassionate caregivers",
              "Flexible schedules and personalized care plans",
              "Family-centered communication and support",
            ].map((item) => (
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
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SignatureServices />
      <WhyChooseUs />
      <TestimonialStrip />
    </FixedBackgroundShell>
  );
}
