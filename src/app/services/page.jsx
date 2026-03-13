"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartHandshake, Users, Stethoscope, CalendarHeart, Brain, BedDouble, ChevronLeft } from "lucide-react";

const services = [
  { 
    slug: "personal-care", 
    title: "Personal Care Assistance", 
    icon: HeartHandshake, 
    intro: "Respectful one-on-one support with daily activities.", 
    overview: "Hands-on support with everyday routines while remaining in the comfort of home. Our caregivers assist with bathing, grooming, dressing, mobility, and personal hygiene with dignity and compassion." 
  },
  { 
    slug: "companion-care", 
    title: "Companion Care", 
    icon: Users, 
    intro: "Warm companionship that supports emotional wellness.", 
    overview: "Meaningful companionship, engagement, and routine support. Combat isolation with friendly visits, conversation, activities, and supervision that enriches daily life." 
  },
  { 
    slug: "post-hospital-care", 
    title: "Post-Hospital Support", 
    icon: Stethoscope, 
    intro: "Smooth transitions home after surgery or hospitalization.", 
    overview: "Recovery support that helps clients settle in safely at home. We assist with wound care, medication management, physical therapy follow-up, and monitor healing progress." 
  },
  { 
    slug: "respite-care", 
    title: "Respite Care", 
    icon: CalendarHeart, 
    intro: "Flexible short-term relief for family caregivers.", 
    overview: "Trusted coverage so caregivers can rest and recharge. Whether you need a few hours, days, or weeks, we provide reliable support so families can take a break." 
  },
  { 
    slug: "nursing-care", 
    title: "Skilled Nursing Care", 
    icon: Stethoscope, 
    intro: "Professional nursing support delivered at home.", 
    overview: "Clinical oversight, monitoring, and medical assistance in the comfort of home. Our licensed nurses provide medication management, wound care, health assessments, and coordination with physicians." 
  },
  { 
    slug: "dementia-care", 
    title: "Alzheimer's & Dementia Care", 
    icon: Brain, 
    intro: "Compassionate memory care focused on routine and safety.", 
    overview: "Calm, structured support for clients living with memory loss. We create predictable routines, ensure safety, and approach each day with patience and understanding." 
  },
  { 
    slug: "live-in-care", 
    title: "Live-In & Extended Care", 
    icon: BedDouble, 
    intro: "Higher-touch support with day-to-night continuity.", 
    overview: "Longer coverage and a dependable rhythm of support. Perfect for clients needing around-the-clock assistance with a consistent, trusted caregiver." 
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  if (selectedService) {
    const service = services.find(s => s.slug === selectedService);
    return <ServiceDetailPage service={service} onBack={() => setSelectedService(null)} />;
  }

  return (
    <main>
      <div style={{ backgroundColor: "#f8fafc", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: "56rem" }}>
            <p style={{ fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b" }}>
              Our Services
            </p>
            <h1 style={{ marginTop: "16px", fontSize: "36px", fontWeight: "600", letterSpacing: "-0.02em", color: "#0f172a", lineHeight: "1.2" }}>
              Comprehensive in-home support tailored to each client.
            </h1>
          </div>

          <div style={{ marginTop: "56px", display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedService(service.slug)}
                  style={{
                    borderRadius: "2rem",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    padding: "32px",
                    textAlign: "left",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.backgroundImage = "linear-gradient(to bottom, #ffffff, #f1f5f9)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.backgroundImage = "none";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    style={{
                      marginBottom: "20px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "1rem",
                      background: "linear-gradient(to right, #22D3EE, #A855F7)",
                      padding: "16px",
                      color: "#ffffff",
                      boxShadow: "0 20px 25px rgba(34, 211, 238, 0.2)",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#0f172a" }}>
                    {service.title}
                  </h2>
                  <p style={{ marginTop: "16px", lineHeight: "1.75", color: "#475569", fontSize: "16px" }}>
                    {service.intro}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

function ServiceDetailPage({ service, onBack }) {
  return (
    <main>
      <div style={{ backgroundColor: "#f8fafc", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <button
            onClick={onBack}
            style={{
              marginBottom: "32px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#475569",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0f172a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#475569";
            }}
          >
            <ChevronLeft size={16} /> Back to Services
          </button>

          <div style={{ display: "grid", gap: "40px", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <h1 style={{ fontSize: "36px", fontWeight: "600", letterSpacing: "-0.02em", color: "#0f172a", lineHeight: "1.2" }}>
                {service.title}
              </h1>
              <p style={{ marginTop: "24px", fontSize: "18px", lineHeight: "1.75", color: "#475569" }}>
                {service.overview}
              </p>
              <Link
                href="/services#new-client-inquiry"
                style={{
                  marginTop: "32px",
                  display: "inline-block",
                  borderRadius: "9999px",
                  background: "linear-gradient(to right, #22D3EE, #A855F7)",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#ffffff",
                  boxShadow: "0 20px 25px rgba(34, 211, 238, 0.2)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(34, 211, 238, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 20px 25px rgba(34, 211, 238, 0.2)";
                }}
              >
                Request This Service
              </Link>
            </div>

            <div
              style={{
                borderRadius: "2rem",
                backgroundColor: "#ffffff",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b" }}>
                Service Overview
              </p>
              <p style={{ marginTop: "16px", lineHeight: "1.75", color: "#475569" }}>
                {service.intro}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}