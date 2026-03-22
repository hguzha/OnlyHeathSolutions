"use client";

import Link from "next/link";
import { brand, navLinks } from "@/lib/site-data";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";

export default function SiteFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);

  return (
    <footer 
      className="footer"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #0b1320 0%, #111b2e 100%)",
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' result='noise'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='200' height='200' fill='%231fa6a0'/%3E%3Crect width='200' height='200' fill='none' opacity='0.03' filter='url(%23noise)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='rgba(31, 166, 160, 0.08)' font-weight='bold' font-family='Arial' transform='translate(0, 0) rotate(-45)' letter-spacing='20'%3EOnly Health%3C/text%3E%3C/svg%3E"),
          linear-gradient(135deg, #0b1320 0%, #111b2e 100%)
        `,
        backgroundSize: "300px 300px, 100% 100%",
        backgroundPosition: "center, center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="footer-grid">
          {/* Logo & Statement */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
            <img src={brand.logo} alt={brand.name} style={{ height: 180, width: "auto", marginBottom: 16, display: "block", marginLeft: 0, padding: 0, marginRight: "auto" }} />
            <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6, padding: 0, marginLeft: 0 }}>
              Private, compassionate home care tailored to your loved one's comfort, dignity, and safety.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              <a
                href="https://www.instagram.com/onlyhealthsolutions?igsh=MTd0bjVjdG5jeWU1bw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(31, 166, 160, 0.2)",
                  color: "#1fa6a0",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1fa6a0";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(31, 166, 160, 0.2)";
                  e.currentTarget.style.color = "#1fa6a0";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Instagram size={20} />
              </a>
            </div>
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
                    color: hoveredLink === item.href ? "#1fa6a0" : "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    paddingLeft: hoveredLink === item.href ? "8px" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink(item.href)}
                  onMouseLeave={() => setHoveredLink(null)}
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
            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              <a
                href={`tel:${brand.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: hoveredContact === "phone" ? "#1fa6a0" : "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setHoveredContact("phone")}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <Phone size={20} />
                <span>{brand.phone}</span>
              </a>
              <a
                href={`mailto:${brand.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: hoveredContact === "email" ? "#1fa6a0" : "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setHoveredContact("email")}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <Mail size={20} />
                <span>{brand.email}</span>
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <MapPin size={20} />
                <span>{brand.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "40px",
          paddingTop: "24px",
          textAlign: "center",
          color: "rgba(255,255,255,0.6)",
          fontSize: "14px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
