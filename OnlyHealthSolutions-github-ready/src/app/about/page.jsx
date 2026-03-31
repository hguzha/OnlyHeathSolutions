"use client";

import React, { useState } from "react";
import PageHero from "@/components/page-hero";
import { HeartHandshake, Shield, Users, Star, Award, Heart } from "lucide-react";

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
      <div className="about-hero">
        <PageHero
          title={
            <>
              <span
                style={{
                  display: "block",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  fontSize: "clamp(13px, 2vw, 16px)", // smaller, subtitle-style
                  color: "white",
                  lineHeight: 1.6,
                  maxWidth: "760px",
                  margin: "0 auto 10px auto",
                  letterSpacing: "0.03em"
                }}
              >
                YOUR HOME. YOUR HEALTH. OUR COMMITMENT.
              </span>
              About Only Health Solutions
            </>
          }
          subtitle="Compassion, dignity, and dependable support are at the center of everything we do."
          image="1.jpeg"
          height={600}
          background="linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))"
        />
        <style>{`
          @media (max-width: 768px) {
            .about-hero .hero-img {
              height: 340px !important;
              min-height: 320px !important;
              max-height: unset !important;
            }
            .about-hero .hero {
              min-height: 340px !important;
              height: auto !important;
            }
          }
        `}</style>
      </div>

      {/* Mission & Why Choose Us - Creative Layout */}
      <section
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
          paddingBottom: "80px",
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
            gap: "50px",
            alignItems: "stretch",
          }}
        >
          <MissionCard />
          <WhyChooseUsCard />
        </div>

        <style>{`
          @media (max-width: 768px) {
            .container {
              display: grid !important;
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
          }
        `}</style>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
            {values.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
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

function MissionCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(31,166,160,0.95) 0%, rgba(106,63,181,0.95) 100%)",
          transition: "all 0.3s ease",
        }}
      />

      {/* Hover light effect */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            pointerEvents: "none",
            transition: "all 0.1s ease",
          }}
        />
      )}

      {/* Animated border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "24px",
          border: "2px solid transparent",
          background: isHovered
            ? "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1), rgba(255,255,255,0.1))"
            : "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
          backgroundClip: "padding-box",
          border: isHovered ? "2px solid transparent" : "1px solid transparent",
          WebkitMask: isHovered
            ? "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
            : "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          transition: "all 0.3s ease",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "48px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Icon with animation */}
        <div
          style={{
            marginBottom: "24px",
            transform: isHovered ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <Heart size={40} color="#ffffff" fill="#ffffff" />
          </div>
        </div>

        <h2
          style={{
            fontSize: "36px",
            fontWeight: 800,
            marginBottom: "20px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Our Mission
        </h2>

        <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "15px", margin: "0", marginBottom: "16px" }}>
          Our mission is to provide compassionate and personalized support that enables individuals to remain safely and comfortably in their own homes. We are dedicated to upholding dignity, respect, and independence as central principles of our service. Through customized care plans and attentive assistance, we strive to improve the quality of life for each client.
        </p>
        <p style={{ color: "rgba(255,255,255,0.95)", lineHeight: 1.8, fontSize: "15px", margin: "0" }}>
          Establishing meaningful relationships is integral to our approach, as we aim to build trust with clients and their families. Our primary objective is to foster security and well-being, guaranteeing that every individual receives the highest standard of care in a familiar environment. Our commitment extends to supporting families, offering assurance and peace of mind throughout the care process.
        </p>

        {/* Decorative line at bottom */}
        <div
          style={{
            marginTop: "24px",
            height: "3px",
            width: isHovered ? "100%" : "40px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.8), transparent)",
            borderRadius: "2px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

function WhyChooseUsCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const features = [
    "Personalized Care Plans",
    "Trusted Caregivers",
    "Family Support",
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(106,63,181,0.95) 0%, rgba(31,166,160,0.95) 100%)",
          transition: "all 0.3s ease",
        }}
      />

      {/* Hover light effect */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            pointerEvents: "none",
            transition: "all 0.1s ease",
          }}
        />
      )}

      {/* Animated border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "24px",
          border: "2px solid transparent",
          background: isHovered
            ? "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1), rgba(255,255,255,0.1))"
            : "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
          backgroundClip: "padding-box",
          border: isHovered ? "2px solid transparent" : "1px solid transparent",
          WebkitMask: isHovered
            ? "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
            : "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
          transition: "all 0.3s ease",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "48px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Top section */}
        <div>
          {/* Icon with animation */}
          <div
            style={{
              marginBottom: "24px",
              transform: isHovered ? "scale(1.2) rotate(-10deg)" : "scale(1) rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <Award size={40} color="#ffffff" />
            </div>
          </div>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: 800,
              marginBottom: "20px",
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Why Families Choose Us
          </h2>

          <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "15px", margin: "0", marginBottom: "16px" }}>
            Families choose Only Health Solutions for private home care because we offer compassionate, individualized support. By tailoring care plans to each person's needs and preferences, our trained caregivers provide attentive assistance that prioritizes independence, comfort, and dignity at home.
          </p>
          <p style={{ color: "rgba(255,255,255,0.95)", lineHeight: 1.8, fontSize: "15px", margin: "0", marginBottom: "24px" }}>
            Our dedication to respect, dignity, and independence distinguishes us. Through customized services and genuine compassion, we consistently deliver reliable care families can trust.
          </p>
        </div>

        {/* Feature highlights */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: "8px 16px",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#ffffff",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                transition: `transform 0.3s ease ${idx * 0.1}s`,
              }}
            >
              ✓ {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ value }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = value.icon;

  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        border: isHovered ? "1px solid rgba(31,166,160,0.3)" : "1px solid rgba(31,166,160,0.15)",
        boxShadow: isHovered ? "0 20px 60px rgba(31,166,160,0.15)" : "0 10px 40px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        cursor: "default",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
}
