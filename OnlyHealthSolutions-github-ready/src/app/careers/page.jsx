"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Heart, Users, Award, Clock, Briefcase, CheckCircle, Zap, Lightbulb } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function CareersPage() {
  const [openRole, setOpenRole] = useState(null);

  const roles = [
    {
      title: "Registered Nurse (RN)",
      type: "Full-time / Part-time",
      description: "Provide skilled nursing care, medication management, and health monitoring",
      icon: Award,
      color: "#1fa6a0",
      requirements: ["RN License", "2+ years experience", "CPR Certified"],
      benefits: ["Competitive Pay", "Flexible Schedule", "Professional Growth"]
    },
    {
      title: "Certified Nursing Assistant (CNA)",
      type: "Full-time / Part-time",
      description: "Assist with personal care, hygiene, and daily activities",
      icon: Heart,
      color: "#6a3fb5",
      requirements: ["CNA Certification", "High School Diploma", "Background Check"],
      benefits: ["Hourly Rate", "Paid Training", "Supportive Team"]
    },
    {
      title: "Home Health Aide",
      type: "Part-time / Full-time",
      description: "Provide compassionate assistance with daily living activities",
      icon: Users,
      color: "#1fa6a0",
      requirements: ["HHA Training", "Reliable Transportation", "References"],
      benefits: ["Flexible Hours", "Community Impact", "Training Support"]
    },
    {
      title: "Care Coordinator",
      type: "Full-time",
      description: "Manage client care plans and coordinate with caregivers",
      icon: Briefcase,
      color: "#6a3fb5",
      requirements: ["Healthcare Background", "Strong Communication", "Organizational Skills"],
      benefits: ["Salary + Benefits", "Professional Development", "Team Environment"]
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Competitive Compensation",
      description: "Attractive pay rates with regular increases and bonuses"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Work schedules that fit your lifestyle and availability"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous training and career development opportunities"
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work with compassionate colleagues who care about quality care"
    },
    {
      icon: Lightbulb,
      title: "Meaningful Work",
      description: "Make a real difference in clients' lives every single day"
    },
    {
      icon: Zap,
      title: "Team Support",
      description: "24/7 backup support and administrative assistance available"
    },
  ];

  return (
    <main>
      <PageHero
        title="Join Our Team"
        subtitle="Be part of a mission to bring compassionate, dignified care to those who need it most."
        height={460}
        images={[
          "1000251260.jpg",
          "1000251261.png",
          "1000251264.jpg",
        ]}
      />

      {/* About Working Here */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
              Why Join Only Health Solutions?
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              We're looking for dedicated professionals who share our commitment to compassionate care
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "100px",
          paddingBottom: "100px",
          position: "relative",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
              Open Positions
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Explore career opportunities that align with your skills and passion
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
            }}
          >
            {roles.map((role, index) => (
              <RoleCard
                key={index}
                role={role}
                isOpen={openRole === index}
                onToggle={() => setOpenRole(openRole === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1320 0%, #1a2847 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left - Qualities */}
            <div>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "24px",
                  color: "#ffffff",
                }}
              >
                We're Looking For...
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <QualityItem title="Compassion" description="A genuine desire to help others and make a positive impact" />
                <QualityItem title="Professionalism" description="Commitment to high standards and quality care" />
                <QualityItem title="Reliability" description="Dependable and punctual in all responsibilities" />
                <QualityItem title="Communication" description="Strong interpersonal and listening skills" />
              </div>
            </div>

            {/* Right - Stats */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                padding: "48px",
                backdropFilter: "blur(10px)",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: "40px" }}>
                <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "8px", color: "#1fa6a0" }}>
                  100+
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
                  Happy Team Members
                </p>
              </div>
              <div style={{ marginBottom: "40px" }}>
                <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "8px", color: "#1fa6a0" }}>
                  500+
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
                  Clients Served
                </p>
              </div>
              <div>
                <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "8px", color: "#1fa6a0" }}>
                  8+
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(31,166,160,0.95) 0%, rgba(106,63,181,0.95) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <Heart size={48} color="#ffffff" style={{ margin: "0 auto 24px", display: "block" }} />
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Ready to Make a Difference?
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.95)", marginBottom: "40px" }}>
            Join our team and become part of something meaningful. Apply today to start your journey with Only Health Solutions.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.95)",
              color: "#1fa6a0",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}

// Benefit Card Component
function BenefitCard({ benefit }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = benefit.icon;

  return (
    <div
      style={{
        background: "white",
        border: isHovered ? "2px solid #1fa6a0" : "2px solid rgba(31,166,160,0.15)",
        borderRadius: "20px",
        padding: "36px",
        textAlign: "center",
        transition: "all 0.3s ease",
        cursor: "default",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 60px rgba(31,166,160,0.2)"
          : "0 10px 30px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          margin: "0 auto 20px",
          transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
          transition: "transform 0.3s ease",
          boxShadow: "0 10px 30px rgba(31,166,160,0.2)",
        }}
      >
        <Icon size={36} color="#ffffff" />
      </div>

      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#0b1320",
        }}
      >
        {benefit.title}
      </h3>

      <p style={{ color: "#666", lineHeight: 1.7, margin: "0", fontSize: "15px" }}>
        {benefit.description}
      </p>
    </div>
  );
}

// Role Card Component
function RoleCard({ role, isOpen, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = role.icon;

  return (
    <div
      style={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(31,166,160,0.08) 0%, rgba(106,63,181,0.08) 100%)"
          : "#ffffff",
        border: isOpen
          ? "2px solid #1fa6a0"
          : isHovered
          ? "2px solid rgba(31,166,160,0.3)"
          : "2px solid rgba(31,166,160,0.15)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered || isOpen ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered || isOpen
          ? "0 25px 60px rgba(31,166,160,0.2)"
          : "0 10px 30px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      {/* Header */}
      <div style={{ padding: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: `linear-gradient(135deg, ${role.color}, rgba(106,63,181,0.8))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 10px 30px ${role.color}20`,
            }}
          >
            <Icon size={28} color="#ffffff" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0b1320", margin: "0" }}>
              {role.title}
            </h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "4px 0 0 0", fontWeight: 500 }}>
              {role.type}
            </p>
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${role.color}, rgba(106,63,181,0.8))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <p style={{ color: "#666", margin: "0", fontSize: "15px", lineHeight: 1.6 }}>
          {role.description}
        </p>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(31,166,160,0.2)",
            padding: "32px",
            background: "rgba(255,255,255,0.5)",
            animation: "slideDown 0.3s ease",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0b1320", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Requirements
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                {role.requirements.map((req, idx) => (
                  <li key={idx} style={{ color: "#666", marginBottom: "8px", fontSize: "14px" }}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0b1320", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                What You'll Get
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                {role.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ color: "#666", marginBottom: "8px", fontSize: "14px" }}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Quality Item Component
function QualityItem({ title, description }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <CheckCircle size={24} color="#1fa6a0" style={{ flexShrink: 0, marginTop: "2px" }} />
      <div>
        <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
          {title}
        </h4>
        <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
