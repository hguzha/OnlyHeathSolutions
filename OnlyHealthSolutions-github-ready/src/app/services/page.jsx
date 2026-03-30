"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageHero from "@/components/page-hero";
import NewClientInquiry from "@/components/new-client-inquiry";
import { HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart, ChevronRight } from "lucide-react";

const services = [
  {
    slug: "personal-care",
    title: "Personal Care Assistance",
    icon: HeartHandshake,
    intro: "Respectful one-on-one support with the daily activities that make home life safer, more comfortable, and more dignified.",
    details: [
      "Bathing, grooming, dressing, toileting, and hygiene support",
      "Mobility and transfer assistance",
      "Meal preparation and feeding support",
      "Medication reminder support and routine observation",
    ],
    overview:
      "Personal care assistance helps your loved one maintain dignity and independence while receiving compassionate support with daily living activities. Our caregivers are trained to provide respectful, patient assistance tailored to individual preferences and needs.",
    includes: [
      "Bathing and hygiene assistance",
      "Dressing and grooming support",
      "Toileting and incontinence care",
      "Mobility assistance and transfers",
      "Meal preparation and feeding support",
    ],
    idealFor: [
      "Seniors needing help with daily activities",
      "Individuals recovering from surgery or illness",
      "People with mobility limitations or disabilities",
      "Those who value independence with compassionate support",
    ],
    whyItMatters:
      "Personal care assistance preserves dignity while enabling your loved one to remain safely at home. It reduces caregiver stress and allows families to maintain their relationship rather than becoming primary caregivers.",
  },
  {
    slug: "companion-care",
    title: "Companion & Sitter Care",
    icon: Users,
    intro: "Meaningful social engagement and practical support that enriches daily life and provides peace of mind for families.",
    details: [
      "Social engagement and meaningful conversation",
      "Light household tasks and errands",
      "Appointment transportation and accompaniment",
      "Activity facilitation and leisure support",
    ],
    overview:
      "Companion care provides social engagement and light assistance that helps prevent isolation while supporting daily routines. Our compassionate companions offer meaningful interaction and practical support tailored to your loved one's interests and preferences.",
    includes: [
      "Social engagement and conversation",
      "Light housekeeping and tidying",
      "Meal preparation assistance",
      "Transportation to appointments and errands",
      "Activity participation and leisure support",
    ],
    idealFor: [
      "Seniors who live alone or feel isolated",
      "Individuals needing social engagement",
      "Those requiring light household support",
      "People wanting companionship and conversation",
    ],
    whyItMatters:
      "Social isolation can negatively impact health and well-being. Companion care provides meaningful interaction, practical support, and reduces loneliness while helping families know their loved one is never alone.",
  },
  {
    slug: "nursing-care",
    title: "Skilled Nursing Care",
    icon: Stethoscope,
    intro: "Professional nursing support for medical needs, medication management, and health monitoring in the comfort of home.",
    details: [
      "Medication management and administration",
      "Wound care and dressing changes",
      "Health monitoring and vital signs",
      "Care coordination with healthcare providers",
    ],
    overview:
      "Skilled nursing care brings clinical expertise to home-based care. Our licensed nurses provide medical support, medication management, and health monitoring—allowing your loved one to receive necessary care while remaining home.",
    includes: [
      "Medication administration and management",
      "Wound care and dressing changes",
      "Vital signs monitoring",
      "Health assessment and observation",
      "Care plan coordination",
    ],
    idealFor: [
      "Individuals with chronic conditions",
      "Post-surgical recovery requiring medical care",
      "Those needing medication management",
      "People with complex health needs",
    ],
    whyItMatters:
      "Skilled nursing at home allows medical conditions to be managed safely and comfortably. It reduces hospital readmissions, improves recovery outcomes, and lets families feel confident their loved one receives professional clinical care.",
  },
  {
    slug: "respite-care",
    title: "Respite & Relief Care",
    icon: Brain,
    intro: "Temporary care support that gives primary caregivers a break while ensuring your loved one receives compassionate attention.",
    details: [
      "Hourly or overnight respite coverage",
      "Full care support during caregiver absence",
      "Flexible scheduling for caregiver relief",
      "Consistent, trained caregivers familiar with client needs",
    ],
    overview:
      "Respite care provides temporary relief for primary caregivers, whether for a few hours or overnight. This allows family caregivers to rest, handle personal needs, or manage other responsibilities while knowing their loved one is in capable, compassionate hands.",
    includes: [
      "Temporary in-home care coverage",
      "Full assistance with activities of daily living",
      "Meal preparation and feeding support",
      "Medication reminders and monitoring",
      "Companionship and engagement",
    ],
    idealFor: [
      "Family caregivers needing a break",
      "Individuals with primary caregivers needing relief",
      "Those requiring occasional additional support",
      "Families managing caregiver burnout",
    ],
    whyItMatters:
      "Caregiver burnout is real. Respite care provides essential relief, helping family caregivers maintain their own health and well-being while ensuring their loved one receives quality care.",
  },
  {
    slug: "post-recovery",
    title: "Post-Hospital Support",
    icon: BedDouble,
    intro: "Specialized care during recovery periods, supporting healing and rehabilitation in the familiar comfort of home.",
    details: [
      "Post-surgical wound care and monitoring",
      "Rehabilitation exercise support and encouragement",
      "Medication and pain management support",
      "Activity progression and mobility assistance",
    ],
    overview:
      "Recovery support helps your loved one heal successfully after surgery or major illness. Our trained caregivers assist with wound care, monitor progress, support rehabilitation, and provide the encouragement needed for a smooth recovery at home.",
    includes: [
      "Wound care and dressing changes",
      "Post-operative monitoring and observation",
      "Rehabilitation exercise support",
      "Mobility assistance and fall prevention",
      "Pain management support and monitoring",
    ],
    idealFor: [
      "Individuals recovering from surgery",
      "Those requiring rehabilitation support",
      "People needing temporary intensive care",
      "Families wanting safe home-based recovery",
    ],
    whyItMatters:
      "Home recovery after surgery supports faster healing, reduces infection risk, and provides comfort during a vulnerable time. Professional support ensures proper care while family remains close.",
  },
  {
    slug: "extended-care",
    title: "Extended & Live-In Care",
    icon: CalendarHeart,
    intro: "Comprehensive around-the-clock support for individuals requiring ongoing assistance with daily living and care needs.",
    details: [
      "Overnight assistance and monitoring",
      "Support with mobility, meals, and routines",
      "Personal care throughout longer care periods",
      "Comfort-focused care and supervision",
      "Greater continuity for families needing dependable presence",
    ],
    overview:
      "Extended care can reduce family stress, improve consistency, and provide reassuring support when shorter visits are not enough.",
    includes: [
      "Overnight assistance and monitoring",
      "Support with mobility, meals, and routines",
      "Personal care throughout longer care periods",
      "Comfort-focused care and supervision",
      "Greater continuity for families needing dependable presence",
    ],
    idealFor: [
      "Overnight assistance and monitoring",
      "Support with mobility, meals, and routines",
      "Personal care throughout longer care periods",
      "Comfort-focused care and supervision",
      "Greater continuity for families needing dependable presence",
    ],
    whyItMatters:
      "Extended care can reduce family stress, improve consistency, and provide reassuring support when shorter visits are not enough.",
  },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      const found = services.find(s => s.slug === service);
      if (found) setSelectedService(found);
    }
  }, [searchParams]);

  if (selectedService) {
    return <ServiceDetailPage service={selectedService} setSelectedService={setSelectedService} router={router} />;
  }

  return <ServicesListPage setSelectedService={setSelectedService} />;
}

function ServicesListPage({ setSelectedService }) {
  const router = useRouter();

  const handleRequestConsultation = () => {
    const inquirySection = document.getElementById("new-client-inquiry");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive in-home support tailored to each client."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
        height={400}
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "800px", marginBottom: "60px" }}>
            <p style={{ color: "#64748b", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", margin: "0 0 10px" }}>Our Services</p>
            <h1 style={{ fontSize: "48px", fontWeight: "800", color: "#0f172a", margin: "0 0 20px", maxWidth: "600px" }}>
              Comprehensive in-home support tailored to each client.
            </h1>
            <p style={{ color: "#64748b", fontSize: "18px", lineHeight: "1.8", margin: "0" }}>
              Explore a full range of private home care services designed to support comfort, safety, independence, and peace of mind.
            </p>
          </div>

          {/* Services Grid */}
          <div data-grid-services style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "60px" }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedService(service)}
                  style={{
                    borderRadius: "24px",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    padding: "32px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                    padding: "16px",
                    color: "white",
                    marginBottom: "20px",
                    boxShadow: "0 10px 25px rgba(31, 166, 160, 0.2)",
                  }}>
                    <Icon size={22} />
                  </div>
                  <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#0f172a", margin: "0 0 16px" }}>
                    {service.title}
                  </h2>
                  <p style={{ color: "#64748b", lineHeight: "1.8", margin: "0 0 20px", fontSize: "16px" }}>
                    {service.intro}
                  </p>
                  <ul style={{ listStyle: "none", margin: "0 0 20px", padding: "0" }}>
                    {service.details.map((detail) => (
                      <li key={detail} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", color: "#64748b", fontSize: "14px" }}>
                        <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)", marginTop: "6px", flexShrink: 0 }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#0f172a" }}>
                    View detailed page <ChevronRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* CTA Section */}
          <div style={{
            borderRadius: "24px",
            background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
            padding: "40px",
            color: "white",
          }}>
            <div data-grid-services style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#ffffff", margin: "0 0 12px" }}>Need a custom care plan?</p>
                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff", margin: "0" }}>
                  We can help you choose the right level of support.
                </h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <button
                  onClick={handleRequestConsultation}
                  style={{
                    borderRadius: "9999px",
                    backgroundColor: "#ffffff",
                    color: "#0f172a",
                    padding: "12px 24px",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Client Inquiry - Only on Services List Page */}
      <div id="new-client-inquiry">
        <NewClientInquiry />
      </div>

      <style>{`
        @media (max-width: 768px) {
          [data-grid-services] {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}

function ServiceDetailPage({ service, setSelectedService, router }) {
  const Icon = service.icon;

  const handleRequestService = () => {
    setSelectedService(null);
    setTimeout(() => {
      const inquirySection = document.getElementById("new-client-inquiry");
      if (inquirySection) {
        inquirySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSpeakToTeam = () => {
    router.push("/contact");
  };

  return (
    <main>
      <PageHero
        title={service.title}
        subtitle={service.intro}
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
        height={400}
      />

      <section className="section">
        <div className="container">
          <button
            onClick={() => setSelectedService(null)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#475569",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              marginBottom: "32px",
            }}
          >
            <ChevronRight size={16} style={{ transform: "rotate(180deg)" }} /> Back to Services
          </button>

          <div data-grid-services style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                padding: "16px",
                color: "white",
                marginBottom: "24px",
                boxShadow: "0 15px 30px rgba(31, 166, 160, 0.25)",
              }}>
                <Icon size={28} />
              </div>
              <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b", margin: "0 0 16px" }}>Service Detail</p>
              <h1 style={{ fontSize: "48px", fontWeight: "800", color: "#0f172a", margin: "0 0 20px" }}>
                {service.title}
              </h1>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#64748b", margin: "0 0 32px" }}>
                {service.overview}
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  onClick={handleRequestService}
                  style={{
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                    color: "white",
                    padding: "12px 24px",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 20px rgba(31, 166, 160, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Request This Service
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    borderRadius: "9999px",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    color: "#0f172a",
                    padding: "12px 24px",
                    fontWeight: "700",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  View All Services
                </button>
              </div>
            </div>

            {/* What's Included */}
            <div style={{
              borderRadius: "24px",
              backgroundColor: "#ffffff",
              padding: "32px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}>
              <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b", margin: "0 0 24px" }}>What This Service Includes</p>
              <div style={{ display: "grid", gap: "16px" }}>
                {service.includes.map((item) => (
                  <div
                    key={item}
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#f1f5f9",
                      padding: "16px 20px",
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ideal For & Why It Matters */}
          <div data-grid-services style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "60px" }}>
            <div style={{
              borderRadius: "24px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              padding: "32px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}>
              <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b", margin: "0 0 24px" }}>Who This Service Is Ideal For</p>
              <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                {service.idealFor.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px", color: "#64748b", fontSize: "14px", lineHeight: "1.8" }}>
                    <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)", marginTop: "4px", flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              padding: "32px",
              color: "white",
              boxShadow: "0 15px 30px rgba(31, 166, 160, 0.25)",
            }}>
              <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#ffffff", margin: "0 0 24px" }}>Why Families Choose This Support</p>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#ffffff", margin: "0 0 24px" }}>
                {service.whyItMatters}
              </p>
              <div style={{
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "20px",
              }}>
                <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#ffffff", margin: "0 0 16px" }}>Common Support Areas</p>
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  {service.details.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", color: "#ffffff", fontSize: "14px" }}>
                      <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ffffff", marginTop: "4px", flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div style={{
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            backgroundColor: "#ffffff",
            padding: "40px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}>
            <div data-grid-services style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b", margin: "0 0 12px" }}>Need help deciding?</p>
                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", margin: "0 0 16px" }}>
                  We'll help you choose the right level of care for your family.
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#64748b", margin: "0" }}>
                  Speak with our team about schedules, care needs, and the right support plan for your loved one.
                </p>
              </div>
              <button
                onClick={handleSpeakToTeam}
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  color: "white",
                  padding: "12px 24px",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 20px rgba(31, 166, 160, 0.2)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Speak With Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          [data-grid-services] {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: "100px 20px", textAlign: "center" }}>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
