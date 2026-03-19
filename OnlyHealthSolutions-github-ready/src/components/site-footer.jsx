import Link from "next/link";
import { brand, navLinks } from "@/lib/site-data";
import { Phone, Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Statement */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <img src={brand.logo} alt={brand.name} style={{ height: 180, width: "auto", marginBottom: 16 }} />
            <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6, maxWidth: "280px" }}>
              Private, compassionate home care tailored to your loved one's comfort, dignity, and safety.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h3 style={{ paddingBottom: "16px", borderBottom: "2px solid rgba(31,166,160,0.5)" }}>
              Explore
            </h3>
            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
              {navLinks.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1fa6a0";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 style={{ paddingBottom: "16px", borderBottom: "2px solid rgba(31,166,160,0.5)" }}>
              Contact
            </h3>
            <div style={{ display: "grid", gap: 16, marginTop: 16, color: "rgba(255,255,255,0.8)" }}>
              {/* Phone */}
              <a 
                href={brand.phoneHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.8)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1fa6a0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                <Phone size={20} style={{ flexShrink: 0, color: "#1fa6a0" }} />
                <span>{brand.phoneDisplay}</span>
              </a>

              {/* Email */}
              <a 
                href={brand.emailHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.8)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1fa6a0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                <Mail size={20} style={{ flexShrink: 0, color: "#1fa6a0" }} />
                <span>{brand.emailDisplay}</span>
              </a>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={20} style={{ flexShrink: 0, color: "#1fa6a0", marginTop: "2px" }} />
                <div>
                  <div>{brand.addressLine}</div>
                  <div style={{ marginTop: "4px" }}>{brand.serviceArea}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)", textAlign: "center" }}>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
