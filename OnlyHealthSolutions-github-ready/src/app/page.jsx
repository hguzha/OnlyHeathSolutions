import FixedBackgroundShell from "@/components/fixed-background-shell";
import PageHeroVideo from "@/components/page-hero-video";
import SignatureServices from "@/components/signature-services";
import WhyChooseUs from "@/components/why-choose-us";
import TestimonialStrip from "@/components/testimonial-strip";

export default function HomePage() {
  const caregivingImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
      alt: "Caregiver assisting elderly client"
    },
    {
      src: "https://images.unsplash.com/photo-1631217314830-4580eec82f25?q=80&w=800&auto=format&fit=crop",
      alt: "Healthcare professional with patient"
    },
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5f400f6f4?q=80&w=800&auto=format&fit=crop",
      alt: "In-home care support"
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01d82979d485?q=80&w=800&auto=format&fit=crop",
      alt: "Compassionate care moment"
    },
  ];

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

      {/* Caregiving Gallery Section */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(31, 166, 160, 0.05), rgba(106, 63, 181, 0.05))",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ color: "#64748b", marginBottom: "10px", fontWeight: "600", fontSize: "14px" }}>
              OUR CARE IN ACTION
            </p>
            <h2 style={{ fontSize: "42px", margin: "0", fontWeight: "800", color: "#0f172a" }}>
              Moments of Compassionate Care
            </h2>
            <p style={{ color: "#64748b", maxWidth: "600px", margin: "16px auto 0", lineHeight: "1.7" }}>
              See how our caregivers provide dignified, compassionate support to clients in the comfort of their own homes.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {caregivingImages.map((image, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(31, 166, 160, 0.3), rgba(106, 63, 181, 0.3))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialStrip />
    </FixedBackgroundShell>
  );
}
