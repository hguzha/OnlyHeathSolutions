"use client";

import Link from "next/link";
import { brand, navLinks } from "@/lib/site-data";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";

export default function SiteFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);

  return (
    <>
      <style>{`
        .footer-watermark {
          position: relative;
          background: linear-gradient(135deg, #0b1320 0%, #111b2e 100%);
          color: white;
          padding: 56px 0 24px;
          margin-top: 60px;
          overflow: hidden;
        }

        .footer-watermark::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background-image: url('${brand.logo}');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.08;
          z-index: 0;
          pointer-events: none;
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <footer className="footer-watermark">
        <div className="container footer-content">
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
                  href={brand.phoneHref}
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
                  <span>{brand.phoneDisplay}</span>
                </a>
                <a
                  href={brand.emailHref}
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
                  <span>{brand.emailDisplay}</span>
                </a>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    color: hoveredContact === "location" ? "#1fa6a0" : "rgba(255,255,255,0.8)",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredContact("location")}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <MapPin size={20} style={{ flexShrink: 0, marginTop: "2px", transition: "color 0.3s ease" }} />
                    <div>
                      <div>{brand.addressLine}</div>
                      <div style={{ fontSize: "14px", color: hoveredContact === "location" ? "#1fa6a0" : "rgba(255,255,255,0.7)", marginTop: "4px", transition: "color 0.3s ease" }}>
                        {brand.serviceArea}
                      </div>
                    </div>
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
            }}
          >
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
