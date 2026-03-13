"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
      "Our personal care service is designed for clients who want hands-on support with everyday routines while remaining in the comfort of home. We help preserve dignity, independence, and confidence by delivering assistance with patience, privacy, and respect.",
    idealFor: [
      "Older adults needing help with daily living activities",
      "Clients recovering from illness, injury, or surgery",
      "Individuals with mobility limitations or physical weakness",
      "Families who want dependable, compassionate in-home support",
    ],
    includes: [
      "Bathing and shower assistance",
      "Grooming, hair care, and oral hygiene",
      "Dressing and personal appearance support",
      "Toileting and incontinence support",
      "Safe transfers from bed, chair, or wheelchair",
      "Meal support and hydration reminders",
    ],
    whyItMatters:
      "Personal care support helps reduce risk, improve comfort, and make daily life feel more manageable for both clients and families.",
  },
  {
    slug: "companion-care",
    title: "Companion Care",
    icon: Users,
    intro: "Warm companionship that supports emotional wellness, conversation, routine, and meaningful engagement at home.",
    details: [
      "Conversation and social engagement",
      "Accompaniment to appointments and errands",
      "Light housekeeping and routine help",
      "Support with hobbies, reading, and daily structure",
    ],
    overview:
      "Companion care focuses on the human side of support. We help clients feel connected, seen, and encouraged through conversation, routine assistance, and meaningful day-to-day presence.",
    idealFor: [
      "Seniors living alone",
      "Clients at risk of loneliness or isolation",
      "Families wanting regular check-ins and support",
      "Individuals who benefit from conversation and structured routines",
    ],
    includes: [
      "Friendly conversation and companionship",
      "Shared meals, reading, games, and hobbies",
      "Appointment accompaniment",
      "Errand support and general outings",
      "Light tidying and help around the home",
      "Routine encouragement and daily engagement",
    ],
    whyItMatters:
      "Companion care supports emotional well-being, reduces isolation, and helps create more enjoyable, reassuring days at home.",
  },
  {
    slug: "post-hospital-care",
    title: "Post-Hospital Support",
    icon: Stethoscope,
    intro: "Smooth transitions home after surgery, illness, or hospitalization with thoughtful assistance and close family communication.",
    details: [
      "Recovery support and wellness observation",
      "Transportation coordination and appointment reminders",
      "Meal and hydration support",
      "Mobility encouragement and home routine stabilization",
    ],
    overview:
      "Returning home after a hospital stay can feel overwhelming. Our post-hospital support helps clients settle in safely, follow routines, and regain confidence during recovery while families receive added peace of mind.",
    idealFor: [
      "Clients returning home after surgery",
      "Individuals recovering from illness or injury",
      "Families needing short-term transition support",
      "Clients who need help re-establishing daily routines",
    ],
    includes: [
      "Discharge transition support",
      "Medication and appointment reminders",
      "Help with meals, hydration, and comfort",
      "Mobility assistance and routine observation",
      "Safe movement around the home",
      "Family communication and recovery updates",
    ],
    whyItMatters:
      "Early recovery support can reduce stress, encourage safer routines, and make the transition home feel more stable and supported.",
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    icon: CalendarHeart,
    intro: "Flexible short-term relief for family caregivers who need trusted support for a few hours, a day, overnight, or longer.",
    details: [
      "Planned respite visits",
      "Emergency or short-notice coverage",
      "Weekend and holiday support options",
      "Peace of mind for families balancing many responsibilities",
    ],
    overview:
      "Family caregivers do extraordinary work, and they also need time to rest, recharge, and handle personal responsibilities. Our respite care provides trusted coverage so loved ones continue to receive attentive support while family caregivers step away.",
    idealFor: [
      "Family caregivers needing time off",
      "Households balancing work, caregiving, and other responsibilities",
      "Caregivers needing coverage for appointments or travel",
      "Families wanting occasional or recurring relief support",
    ],
    includes: [
      "Hourly or scheduled relief care",
      "Daytime, evening, weekend, or overnight options",
      "Routine assistance and companionship",
      "Meal and personal care support during coverage",
      "Short-notice help when available",
      "Reliable continuity for the client while family rests",
    ],
    whyItMatters:
      "Respite care protects caregiver well-being while ensuring clients continue receiving compassionate and dependable care.",
  },
  {
    slug: "nursing-care",
    title: "Skilled Nursing Care",
    icon: Stethoscope,
    intro: "Professional nursing support delivered in the comfort of home for clients who require clinical oversight, monitoring, or medical assistance.",
    details: [
      "Medication administration and management",
      "Vital signs monitoring and health observation",
      "Wound care and dressing changes",
      "Coordination with physicians and healthcare providers",
    ],
    overview:
      "Our skilled nursing care service brings licensed nursing professionals into the home to support clients with medical needs that require a higher level of clinical attention. This service helps families manage health conditions safely while allowing clients to remain in a familiar and comfortable environment.",
    idealFor: [
      "Clients recovering from surgery or hospitalization",
      "Individuals managing chronic medical conditions",
      "Patients needing medication administration or clinical monitoring",
      "Families seeking professional medical oversight at home",
    ],
    includes: [
      "Medication administration and management",
      "Health assessments and vital sign monitoring",
      "Wound care and post-surgical care",
      "Chronic disease management support",
      "Coordination with physicians and care teams",
      "Education and guidance for families",
    ],
    whyItMatters:
      "Skilled nursing support helps ensure medical needs are addressed safely while allowing clients to recover, manage conditions, and maintain comfort at home.",
  },
  {
    slug: "dementia-care",
    title: "Alzheimer's & Dementia Care",
    icon: Brain,
    intro: "Compassionate memory care focused on familiarity, patience, safety, routine, and respectful communication.",
    details: [
      "Structured daily routines",
      "Safety-focused supervision",
      "Meaningful engagement and redirection support",
      "Family-centered communication and reassurance",
    ],
    overview:
      "Memory care requires patience, consistency, and an understanding approach. Our Alzheimer's and dementia care is designed to promote calm, structure, and safety while helping families feel more supported in day-to-day care.",
    idealFor: [
      "Clients living with memory loss or confusion",
      "Families needing support with behavior changes and routines",
      "Households wanting added safety and supervision",
      "Loved ones who benefit from familiar, reassuring care",
    ],
    includes: [
      "Structured routines and calm daily support",
      "Cueing, redirection, and reassurance",
      "Safety observation within the home",
      "Meaningful activities and familiar engagement",
      "Personal care support with patience and dignity",
      "Family communication and emotional support",
    ],
    whyItMatters:
      "Thoughtful memory care can reduce stress, encourage comfort, and help daily life feel more stable for clients and families alike.",
  },
  {
    slug: "live-in-care",
    title: "Live-In & Extended Care",
    icon: BedDouble,
    intro: "Higher-touch support for clients who need more consistent presence, extended shifts, or day-to-night continuity.",
    details: [
      "Longer scheduled care shifts",
      "Overnight monitoring and assistance",
      "Enhanced continuity for complex home routines",
      "Dependable support that reduces family stress",
    ],
    overview:
      "Some clients need a stronger day-to-day care presence. Live-in and extended care services are built for households that benefit from longer coverage, consistent oversight, and a dependable rhythm of support throughout the day or night.",
    idealFor: [
      "Clients needing more continuous support",
      "Families concerned about nighttime safety",
      "Individuals with complex home routines",
      "Households seeking a more consistent caregiving presence",
    ],
    includes: [
      "Extended daytime care shifts",
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
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      const found = services.find(s => s.slug === service);
      if (found) setSelectedService(found);
    }
  }, [searchParams]);

  if (selectedService) {
    return <ServiceDetailPage service={selectedService} setSelectedService={setSelectedService} />;
  }

  return <ServicesListPage setSelectedService={setSelectedService} />;
}

function ServicesListPage({ setSelectedService }) {
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "60px" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#ffffff", margin: "0 0 12px" }}>Need a custom care plan?</p>
                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff", margin: "0" }}>
                  We can help you choose the right level of support.
                </h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <button style={{
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  padding: "12px 24px",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}>
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewClientInquiry />
    </main>
  );
}

function ServiceDetailPage({ service, setSelectedService }) {
  const Icon = service.icon;

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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
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
                <button style={{
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
                }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "60px" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3em", color: "#64748b", margin: "0 0 12px" }}>Need help deciding?</p>
                <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", margin: "0 0 16px" }}>
                  We'll help you choose the right level of care for your family.
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#64748b", margin: "0" }}>
                  Speak with our team about schedules, care needs, and the right support plan for your loved one.
                </p>
              </div>
              <button style={{
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
              }}>
                Speak With Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <NewClientInquiry />
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
