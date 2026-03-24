"use client";

import React, { useState } from "react";
import PageHero from "@/components/page-hero";
import { Phone, FileText, Users, CheckCircle, Zap, Heart, ArrowRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Call for a Quick Consult",
      description: "Reach out to our team to discuss your care needs, preferences, and concerns. We listen carefully to understand your situation.",
      icon: Phone,
      color: "#1fa6a0",
      details: [
        "Discuss your specific needs",
        "Learn about our services",
        "Answer any questions"
      ]
    },
    {
      number: 2,
      title: "Receive a Personalized Care Plan",
      description: "Our team creates a customized care plan tailored to your loved one's unique needs and preferences.",
      icon: FileText,
      color: "#6a3fb5",
      details: [
        "Personalized assessment",
        "Custom care strategy",
        "Family involvement"
      ]
    },
    {
      number: 3,
      title: "Begin Care with Ongoing Support",
      description: "Start your care journey with our carefully matched caregivers and receive continuous support and communication.",
      icon: Users,
      color: "#1fa6a0",
      details: [
        "Expert caregiver matching",
        "Regular check-ins",
        "24/7 support available"
      ]
    },
  ];

  return (
    <main>
      <PageHero
        title="How It Works"
        subtitle="A simple, supportive process from the first conversation to ongoing care at home."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop"
        height={440}
      />

      {/* Steps Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
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
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,63,181,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                marginBottom: "16px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Three Simple Steps to Care
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              From your first call to personalized at-home support, we make the process smooth and supportive.
            </p>
          </div>

          {/* Steps Grid with Connectors */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
              alignItems: "stretch",
              position: "relative",
            }}
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <StepCard step={step} />
                {/* Arrow connector between steps */}
                {index < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: `calc(-62px + ${(index + 1) * (100 / 3)}%)`,
                      top: "30%",
                      zIndex: 10,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 30px rgba(31,166,160,0.2)",
                      }}
                    >
                      <ArrowRight size={24} color="#ffffff" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 800,
                marginBottom: "16px",
                color: "#ffffff",
              }}
            >
              Why Our Process Works
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
              We've designed every step to ensure comfort, quality, and peace of mind.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "30px",
            }}
          >
            <FeatureCard
              icon={Heart}
              title="Person-Centered Approach"
              description="Every decision is based on what matters most to your loved one—their comfort, independence, and dignity."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Expert Matching"
              description="We carefully match caregivers based on skills, personality, and your family's specific needs."
            />
            <FeatureCard
              icon={Zap}
              title="Continuous Support"
              description="Our team is always available to answer questions, make adjustments, and ensure the best care experience."
            />
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
        <div className="container">
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.95)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Take the first step toward quality home care. Give us a call today and let's talk about how we can help your loved one.
          </p>
          <CallButton phoneNumber={brand.phoneDisplay} phoneHref={brand.phoneHref} />
        </div>
      </section>
    </main>
  );
}

// Call Button Component - Shows phone only on hover
function CallButton({ phoneNumber, phoneHref }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={phoneHref}
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-block",
        padding: "16px 40px",
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.95)",
        color: "#1fa6a0",
        fontWeight: "700",
        fontSize: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        textDecoration: "none",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 15px 40px rgba(0,0,0,0.3)" : "0 10px 30px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? phoneNumber : "Call Now to Start"}
    </a>
  );
}

// Step Card Component
function StepCard({ step }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const Icon = step.icon;

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
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "default",
        height: "100%",
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
          background: isHovered
            ? `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`
            : `linear-gradient(135deg, #ffffff 0%, #f5f1ff 100%)`,
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
            background: `radial-gradient(circle, ${step.color}15 0%, transparent 70%)`,
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            pointerEvents: "none",
            transition: "all 0.1s ease",
          }}
        />
      )}

      {/* Border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "24px",
          border: isHovered ? `2px solid ${step.color}` : "2px solid rgba(31,166,160,0.15)",
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
          transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Step number badge */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${step.color}, rgba(106,63,181,0.8))`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            fontSize: "32px",
            fontWeight: 800,
            color: "#ffffff",
            boxShadow: `0 10px 30px ${step.color}20`,
            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          {step.number}
        </div>

        {/* Icon */}
        <div
          style={{
            marginBottom: "20px",
            transform: isHovered ? "scale(1.15)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <Icon size={40} color={step.color} />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "24px",
            fontWeight: 800,
            marginBottom: "16px",
            color: "#0b1320",
            lineHeight: 1.3,
          }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p style={{ color: "#666", lineHeight: 1.7, fontSize: "15px", margin: "0 0 20px 0" }}>
          {step.description}
        </p>

        {/* Details list */}
        <div style={{ marginTop: "auto" }}>
          {step.details.map((detail, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: idx < step.details.length - 1 ? "12px" : "0",
                opacity: isHovered ? 1 : 0.8,
                transform: isHovered ? "translateX(5px)" : "translateX(0px)",
                transition: `all 0.3s ease ${idx * 0.05}s`,
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: step.color,
                }}
              />
              <span style={{ fontSize: "14px", color: "#475569", fontWeight: 500 }}>
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "16px",
        padding: "40px",
        backdropFilter: "blur(10px)",
        textAlign: "center",
        transition: "all 0.3s ease",
        cursor: "default",
        transform: isHovered ? "translateY(-10px)" : "translateY(0px)",
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
          marginBottom: "24px",
          margin: "0 auto 24px",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        <Icon size={36} color="#ffffff" />
      </div>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#ffffff",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0", fontSize: "15px" }}>
        {description}
      </p>
    </div>
  );
}
