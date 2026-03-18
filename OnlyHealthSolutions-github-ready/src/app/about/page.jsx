import PageHero from "@/components/page-hero";
import { HeartHandshake, Shield, Users, Star, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Compassionate Care",
      description: "We treat every client with genuine warmth, respect, and empathy, viewing care as a meaningful relationship."
    },
    {
      icon: Shield,
      title: "Safety & Dignity",
      description: "Your loved one's independence and personal dignity are paramount in every aspect of our service."
    },
    {
      icon: Users,
      title: "Family Partnership",
      description: "We work closely with families to understand unique needs and build a care plan that truly fits."
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Our carefully trained caregivers maintain the highest standards of professionalism and care."
    }
  ];

  return (
    <main>
      <PageHero
        title="About Only Health Solutions"
        subtitle="Compassion, dignity, and dependable support are at the center of everything we do."
        image="/1.webp"
        height={600}
        background="linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))"
      />

      {/* Mission & Why Choose Us - Side by Side */}
      <section
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src="/logo2.png"
            alt=""
            aria-hidden="true"
            style={{
              width: "1100px",
              maxWidth: "none",
              opacity: 0.08,
              transform: "rotate(8deg)",
            }}
          />
        </div>

        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,63,181,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          {/* Our Mission Card */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(31,166,160,0.95) 0%, rgba(106,63,181,0.95) 100%)",
              padding: "48px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(31,166,160,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 30px 80px rgba(31,166,160,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(31,166,160,0.2)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <Sparkles size={32} color="#ffffff" />
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  marginBottom: "0",
                  color: "#ffffff",
                }}
              >
                Our Mission
              </h2>
            </div>
            <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "15px", margin: "0", marginBottom: "16px" }}>
              Our mission is to provide compassionate and personalized support that enables individuals to remain safely and comfortably in their own homes. We are dedicated to upholding dignity, respect, and independence as central principles of our service. Through customized care plans and attentive assistance, we strive to improve the quality of life for each client.
            </p>
            <p style={{ color: "rgba(255,255,255,0.95)", lineHeight: 1.8, fontSize: "15px", margin: "0" }}>
              Establishing meaningful relationships is integral to our approach, as we aim to build trust with clients and their families. Our primary objective is to foster security and well-being, guaranteeing that every individual receives the highest standard of care in a familiar environment. Our commitment extends to supporting families, offering assurance and peace of mind throughout the care process.
            </p>
          </div>

          {/* Why Families Choose Us Card */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(106,63,181,0.95) 0%, rgba(31,166,160,0.95) 100%)",
              padding: "48px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(106,63,181,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 30px 80px rgba(106,63,181,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(106,63,181,0.2)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <Award size={32} color="#ffffff" />
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  marginBottom: "0",
                  color: "#ffffff",
                }}
              >
                Why Families Choose Us
              </h2>
            </div>
            <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "15px", margin: "0", marginBottom: "16px" }}>
              Families choose Only Health Solutions for private home care because we offer compassionate, individualized support. By tailoring care plans to each person's needs and preferences, our trained caregivers provide attentive assistance that prioritizes independence, comfort, and dignity at home. We build trusting relationships with clients and families, delivering both practical care and emotional reassurance. Our holistic approach ensures the highest standard of care in a supportive environment.
            </p>
            <p style={{ color: "rgba(255,255,255,0.95)", lineHeight: 1.8, fontSize: "15px", margin: "0" }}>
              Our dedication to respect, dignity, and independence distinguishes us. Through customized services and genuine compassion, we consistently deliver reliable care families can trust. We guide and support families throughout the care process, improving quality of life and fostering a sense of security and well-being for clients, families, and caregivers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #1fa6a0, #6a3fb5, transparent)",
            opacity: 0.5,
          }}
        />

        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 800,
                marginBottom: "16px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Our Core Values
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              These principles guide every decision we make and every interaction we have with our clients and families.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
            }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "40px",
                    borderRadius: "16px",
                    border: "1px solid rgba(31,166,160,0.15)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(31,166,160,0.15)";
                    e.currentTarget.style.borderColor = "rgba(31,166,160,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.05)";
                    e.currentTarget.style.borderColor = "rgba(31,166,160,0.15)";
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={32} color="#ffffff" />
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "12px",
                      color: "#0b1320",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "#666", lineHeight: 1.7, margin: "0", fontSize: "15px" }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Commitment Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1320 0%, #1a2847 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 800,
                marginBottom: "24px",
                color: "#ffffff",
              }}
            >
              Your Trust Matters to Us
            </h2>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "24px" }}>
              We understand that choosing a home care provider is a deeply personal decision. You're trusting us with the safety and well-being of someone you love. That responsibility is never taken lightly.
            </p>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "0" }}>
              Our team is committed to building lasting relationships with families, earning your confidence through consistent, compassionate care and transparent communication. We're not just a service provider—we're a trusted partner in your loved one's wellness journey.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
