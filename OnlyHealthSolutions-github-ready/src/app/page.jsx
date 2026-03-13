import FixedBackgroundShell from "@/components/fixed-background-shell";
import PageHeroVideo from "@/components/page-hero-video";
import SignatureServices from "@/components/signature-services";
import WhyChooseUs from "@/components/why-choose-us";
import TestimonialStrip from "@/components/testimonial-strip";
import CargivingGallery from "@/components/caregiving-gallery";

export default function HomePage() {
  const caregivingImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      alt: "Caregiver assisting elderly client"
    },
    {
      src: "https://images.unsplash.com/photo-1631217314830-4580eec82f25?q=80&w=600&auto=format&fit=crop",
      alt: "Healthcare professional with patient"
    },
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5f400f6f4?q=80&w=600&auto=format&fit=crop",
      alt: "In-home care support"
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01d82979d485?q=80&w=600&auto=format&fit=crop",
      alt: "Compassionate care moment"
    },
  ];

  return (
    <FixedBackgroundShell>
      {/* Smaller Hero Video - Medium size */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px 20px" }}>
        <div style={{ height: "420px", overflow: "hidden", borderRadius: "12px" }}>
          <PageHeroVideo />
        </div>
      </div>
      
      <div style={{ position: "relative", marginTop: "-1.5rem", zIndex: 10 }}>
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

      {/* First Row - Signature Services Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
              <img src={caregivingImages[0].src} alt={caregivingImages[0].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            </div>
            <div>
              <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>COMPASSIONATE CARE</p>
              <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                Personalized Support You Can Trust
              </h2>
              <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                Our caregivers provide respectful, dignified assistance tailored to each client's unique needs. We believe in preserving independence while offering the support families need for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Row - Signature Services Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>PROFESSIONAL CARE</p>
              <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                Skilled Support at Home
              </h2>
              <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                From nursing care to companion support, our trained professionals deliver clinical excellence with a personal touch. Your loved ones deserve care that's both skilled and compassionate.
              </p>
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
              <img src={caregivingImages[1].src} alt={caregivingImages[1].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Third Row - Signature Services Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
              <img src={caregivingImages[2].src} alt={caregivingImages[2].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            </div>
            <div>
              <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>FAMILY SUPPORT</p>
              <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                Peace of Mind for Families
              </h2>
              <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                We understand that finding the right care is deeply personal. Our team works closely with families to create custom care plans that fit your loved one's lifestyle and health needs perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Row - Signature Services Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>QUALITY EXCELLENCE</p>
              <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                Excellence in Every Interaction
              </h2>
              <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                Only Health Solutions is committed to the highest standards of care. From thorough screening and training to ongoing support and communication, we ensure quality at every step.
              </p>
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
              <img src={caregivingImages[3].src} alt={caregivingImages[3].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <TestimonialStrip />
    </FixedBackgroundShell>
  );
}
