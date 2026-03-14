"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/page-hero";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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
  }

  return (
    <main>
      <PageHero
        title="Contact"
        subtitle="Connect with our team to ask questions, discuss care options, or request a consultation."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
        height={360}
      />

      <section className="section">
        <div className="container page-grid-2">
          <div className="card">
            <h3>Contact Info</h3>
            <p style={{ color: "#0f172a", marginTop: 8, marginBottom: 24, fontSize: "20px", fontWeight: 800, lineHeight: 1.4 }}>
              We're here to help you explore care options.
            </p>
            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              <a 
                href={brand.phoneHref}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 12, 
                  color: "#1fa6a0",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                <Phone size={20} style={{ flexShrink: 0 }} />
                <span>{brand.phoneDisplay}</span>
              </a>
              
              <a 
                href={brand.emailHref}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 12, 
                  color: "#1fa6a0",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                <Mail size={20} style={{ flexShrink: 0 }} />
                <span>{brand.emailDisplay}</span>
              </a>
              
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "flex-start", 
                  gap: 12, 
                  color: "#64748b"
                }}
              >
                <MapPin size={20} style={{ flexShrink: 0, marginTop: 2, color: "#1fa6a0" }} />
                <div>
                  <div>{brand.addressLine}</div>
                  <div style={{ marginTop: 8 }}>{brand.serviceArea}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Send Only Health Solutions a Message</h3>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginTop: 18 }}>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <textarea
                placeholder="How can we help?"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
