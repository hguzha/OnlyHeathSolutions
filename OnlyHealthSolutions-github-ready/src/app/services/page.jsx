"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/page-hero";
import NewClientInquiry from "@/components/new-client-inquiry";
import { HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart } from "lucide-react";

const services = [
  { 
    slug: "personal-care", 
    title: "Personal Care Assistance", 
    icon: HeartHandshake, 
    intro: "Respectful one-on-one support with daily activities.", 
    overview: "Hands-on support with everyday routines while remaining in the comfort of home.",
    details: ["Bathing and grooming", "Dressing assistance", "Meal preparation", "Medication reminders", "Mobility and transfer support"]
  },
  { 
    slug: "companion-care", 
    title: "Companion Care", 
    icon: Users, 
    intro: "Warm companionship that supports emotional wellness.", 
    overview: "Meaningful companionship, engagement, and routine support.",
    details: ["Social engagement", "Meal companionship", "Light housekeeping", "Errands and shopping", "Conversation and activities"]
  },
  { 
    slug: "post-hospital-care", 
    title: "Post-Hospital Support", 
    icon: Stethoscope, 
    intro: "Smooth transitions home after surgery or hospitalization.", 
    overview: "Recovery support that helps clients settle in safely at home.",
    details: ["Recovery monitoring", "Medication management", "Wound care support", "Appointment coordination", "Rehabilitation assistance"]
  },
  { 
    slug: "respite-care", 
    title: "Respite Care", 
    icon: CalendarHeart, 
    intro: "Flexible short-term relief for family caregivers.", 
    overview: "Trusted coverage so caregivers can rest and recharge.",
    details: ["Flexible scheduling", "Full-day coverage", "Emergency backup", "Caregiver support", "Peace of mind"]
  },
  { 
    slug: "nursing-care", 
    title: "Skilled Nursing Care", 
    icon: Stethoscope, 
    intro: "Professional nursing support delivered at home.", 
    overview: "Clinical oversight, monitoring, and medical assistance in the comfort of home.",
    details: ["Clinical assessments", "Vital signs monitoring", "Medication management", "Catheter care", "Wound care"]
  },
  { 
    slug: "dementia-care", 
    title: "Alzheimer's & Dementia Care", 
    icon: Brain, 
    intro: "Compassionate memory care focused on routine and safety.", 
    overview: "Calm, structured support for clients living with memory loss.",
    details: ["Memory care specialists", "Safe environment setup", "Routine and structure", "Behavioral support", "Family guidance"]
  },
  { 
    slug: "live-in-care", 
    title: "Live-In & Extended Care", 
    icon: BedDouble, 
    intro: "Higher-touch support with day-to-night continuity.", 
    overview: "Longer coverage and a dependable rhythm of support.",
    details: ["24/7 coverage", "Overnight support", "Extended care plans", "Continuous monitoring", "Family peace of mind"]
  }
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState(null);

  // Get service from query parameter on mount
  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setSelectedService(service);
      // Scroll to detail section
      setTimeout(() => {
        const element = document.getElementById("service-detail");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);

  const activeService = selectedService ? services.find(s => s.slug === selectedService) : null;

  const handleRequestService = () => {
    setSelectedService(null);
    // Scroll to inquiry form
    setTimeout(() => {
      const element = document.getElementById("new-client-inquiry");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          {!activeService ? (
            // Services Grid View
            <div>
              <div className="page-grid-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => setSelectedService(service.slug)}
                      className="card service-card"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        border: "2px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#22D3EE";
                        e.currentTarget.style.boxShadow = "0 12px 24px rgba(34, 211, 238, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                        <div
                          style={{
                            background: "linear-gradient(135deg, #22D3EE, #A855F7)",
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            display: "grid",
                            placeItems: "center",
                            color: "white",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#0f172a" }}>
                          {service.title}
                        </h3>
                      </div>
                      <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14 }}>
                        {service.intro}
                      </p>
                      <div style={{ marginTop: 12, color: "#22D3EE", fontWeight: 600, fontSize: 14 }}>
                        Learn more →
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            // Service Detail View
            <div id="service-detail">
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#64748b",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  marginBottom: 32,
                  padding: 0,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0f172a")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
              >
                ← Back to Services
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                  alignItems: "start",
                }}
                className="page-grid-2"
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <div
                      style={{
                        background: "linear-gradient(135deg, #22D3EE, #A855F7)",
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        display: "grid",
                        placeItems: "center",
                        color: "white",
                      }}
                    >
                      {activeService.icon && <activeService.icon size={28} />}
                    </div>
                  </div>

                  <h1 style={{ fontSize: 40, fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>
                    {activeService.title}
                  </h1>

                  <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, marginBottom: 32 }}>
                    {activeService.overview}
                  </p>

                  <button
                    onClick={handleRequestService}
                    className="btn btn-primary"
                    style={{
                      background: "linear-gradient(135deg, #22D3EE, #A855F7)",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: 12,
                      border: "none",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Request This Service
                  </button>
                </div>

                <div className="card">
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 24 }}>
                    What's Included
                  </h3>

                  <div style={{ display: "grid", gap: 16 }}>
                    {activeService.details.map((detail, idx) => (
                      <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <div
                          style={{
                            background: "linear-gradient(135deg, #22D3EE, #A855F7)",
                            width: 24,
                            height: 24,
                            borderRadius: 6,
                            display: "grid",
                            placeItems: "center",
                            color: "white",
                            fontWeight: 700,
                            flexShrink: 0,
                            fontSize: 14,
                          }}
                        >
                          ✓
                        </div>
                        <p style={{ color: "#64748b", lineHeight: 1.6, margin: 0, paddingTop: 2 }}>
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* New Client Inquiry Section - Only on All Services */}
      {!activeService && (
        <section className="section">
          <div className="container">
            <div id="new-client-inquiry">
              <NewClientInquiry />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive, compassionate care tailored to your unique needs."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
        height={500}
        background="linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))"
      />

      <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading services...</div>}>
        <ServicesContent />
      </Suspense>
    </main>
  );
}
