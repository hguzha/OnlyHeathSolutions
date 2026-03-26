"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Heart } from "lucide-react";
import PageHero from "@/components/page-hero";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("Message from Only Health Solutions Website");
    const body = encodeURIComponent(
      `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}`
    );

    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
    
    // Reset form
    setForm({ name: "", phone: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: brand.phoneDisplay,
      link: brand.phoneHref,
      color: "#1fa6a0"
    },
    {
      icon: Mail,
      title: "Email",
      content: brand.emailDisplay,
      link: brand.emailHref,
      color: "#6a3fb5"
    },
    {
      icon: MapPin,
      title: "Location",
      content: brand.addressLine,
      color: "#1fa6a0"
    },
  ];

  return (
    <main>
      <PageHero
        title="Get in Touch"
        subtitle="We're here to answer questions and help you find the perfect care solution."
        image="ChatGPT Image Mar 19, 2026, 05_21_05 PM (1) (1).png"
        height={400}
      />

      {/* Contact Info Cards */}
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
              Ways to Reach Us
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Choose the contact method that works best for you. We're always ready to help.
            </p>
          </div>

          <div data-grid-contact
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
          >
            {contactInfo.map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form-section"
        style={{
          background: "linear-gradient(135deg, #0b1320 0%, #1a2847 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
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

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 800,
                marginBottom: "16px",
                color: "#ffffff",
              }}
            >
              Send Us a Message
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)" }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "24px",
              padding: "60px",
              backdropFilter: "blur(10px)",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Name Input */}
              <div>
                <label style={{ display: "block", color: "#ffffff", marginBottom: "8px", fontWeight: 600, fontSize: "14px" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.12)";
                    e.target.style.borderColor = "rgba(31,166,160,0.5)";
                    e.target.style.boxShadow = "0 0 20px rgba(31,166,160,0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                    e.target.style.borderColor = "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label style={{ display: "block", color: "#ffffff", marginBottom: "8px", fontWeight: 600, fontSize: "14px" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.12)";
                    e.target.style.borderColor = "rgba(31,166,160,0.5)";
                    e.target.style.boxShadow = "0 0 20px rgba(31,166,160,0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                    e.target.style.borderColor = "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Phone Input */}
              <div>
                <label style={{ display: "block", color: "#ffffff", marginBottom: "8px", fontWeight: 600, fontSize: "14px" }}>
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.12)";
                    e.target.style.borderColor = "rgba(31,166,160,0.5)";
                    e.target.style.boxShadow = "0 0 20px rgba(31,166,160,0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                    e.target.style.borderColor = "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label style={{ display: "block", color: "#ffffff", marginBottom: "8px", fontWeight: 600, fontSize: "14px" }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your care needs..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                  onFocus={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.12)";
                    e.target.style.borderColor = "rgba(31,166,160,0.5)";
                    e.target.style.boxShadow = "0 0 20px rgba(31,166,160,0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                    e.target.style.borderColor = "rgba(255,255,255,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  padding: "16px 32px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  color: "white",
                  border: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 10px 30px rgba(31,166,160,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(31,166,160,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(31,166,160,0.2)";
                }}
              >
                <Send size={18} />
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    background: "rgba(31,166,160,0.2)",
                    border: "1px solid rgba(31,166,160,0.4)",
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                    fontWeight: "600",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f5f1ff 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
        }}
      >
        <div className="container">
          <div data-grid-contact
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left - Info */}
            <div>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "24px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                We're Here to Help
              </h2>
              <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.8, marginBottom: "32px" }}>
                Whether you have questions about our services, need to schedule a consultation, or want to learn more about our care options, our team is ready to assist you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <InfoItem icon={Clock} title="Response Time" description="We typically respond within 24 hours" />
                <InfoItem icon={Heart} title="Compassionate Team" description="Every question is important to us" />
                <InfoItem icon={MessageCircle} title="Multiple Contact Options" description="Call, email, or use our contact form" />
              </div>
            </div>

            {/* Right - Image/Decoration */}
            <div
              style={{
                position: "relative",
                height: "400px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(135deg, rgba(31,166,160,0.1), rgba(106,63,181,0.1))",
                border: "2px solid rgba(31,166,160,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "80px",
                  opacity: 0.5,
                }}
              >
                💬
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          [data-grid-contact] {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}

// Contact Card Component
function ContactCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        textAlign: "center",
        border: isHovered ? `2px solid ${item.color}` : "2px solid rgba(31,166,160,0.1)",
        boxShadow: isHovered ? `0 20px 60px ${item.color}20` : "0 10px 40px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "16px",
          background: `linear-gradient(135deg, ${item.color}, rgba(106,63,181,0.8))`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          margin: "0 auto 20px",
        }}
      >
        <Icon size={32} color="#ffffff" />
      </div>
      <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#0b1320" }}>
        {item.title}
      </h3>
      {item.link ? (
        <a
          href={item.link}
          style={{ color: item.color, fontWeight: 600, textDecoration: "none", fontSize: "16px" }}
        >
          {item.content}
        </a>
      ) : (
        <p style={{ color: "#666", margin: "0", fontSize: "16px" }}>{item.content}</p>
      )}
    </div>
  );
}

// Info Item Component
function InfoItem({ icon: Icon, title, description }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={24} color="#ffffff" />
      </div>
      <div>
        <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0b1320", marginBottom: "4px" }}>
          {title}
        </h4>
        <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
