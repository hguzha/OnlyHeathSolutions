"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";
import { HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart } from "lucide-react";

// Services dropdown data
const serviceItems = [
  { label: "All Services", href: "/services", isHeader: true },
  { label: "Personal Care Assistance", href: "/services?service=personal-care", icon: HeartHandshake },
  { label: "Companion Care", href: "/services?service=companion-care", icon: Users },
  { label: "Post-Hospital Support", href: "/services?service=post-hospital-care", icon: Stethoscope },
  { label: "Respite Care", href: "/services?service=respite-care", icon: CalendarHeart },
  { label: "Skilled Nursing Care", href: "/services?service=nursing-care", icon: Stethoscope },
  { label: "Alzheimer's & Dementia Care", href: "/services?service=dementia-care", icon: Brain },
  { label: "Live-In & Extended Care", href: "/services?service=live-in-care", icon: BedDouble },
];

// Fallback menu items if navLinks is empty
const fallbackNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Use fallback if navLinks is empty
  const menuItems = (navLinks && navLinks.length > 0) ? navLinks : fallbackNavLinks;

  const handleServiceClick = (href, isAllServices = false) => {
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    
    // If clicking "All Services", use window.location to ensure clean navigation
    if (isAllServices) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  const handleRequestConsult = () => {
    // Scroll to new-client-inquiry section
    const element = document.getElementById('new-client-inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="topbar"
      style={{
        borderBottom: "2px solid #d4af37",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container topbar-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            minWidth: "fit-content",
          }}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            style={{
              height: "120px",
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontWeight: 600,
            fontSize: "14px",
            flex: 1,
            justifyContent: "center",
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/services" && pathname.startsWith("/services"));

            if (item.label === "Services") {
              return (
                <div
                  key={item.href}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  style={{ position: "relative" }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: isActive ? "#d4af37" : "#ffffff",
                      cursor: "pointer",
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 600,
                      fontSize: "14px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#d4af37";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isActive ? "#d4af37" : "#ffffff";
                    }}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                  </button>

                  {servicesDropdownOpen && (
                    <>
                      <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: "12px", pointerEvents: "auto" }} />
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(100% + 12px)",
                          left: 0,
                          backgroundColor: "rgba(11, 19, 32, 0.95)",
                          borderRadius: "12px",
                          padding: "12px",
                          minWidth: "280px",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                          zIndex: 1001,
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {serviceItems.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <button
                              key={service.href}
                              onClick={() => handleServiceClick(service.href, service.isHeader)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                width: "100%",
                                padding: "10px 12px",
                                backgroundColor: service.isHeader ? "rgba(31, 166, 160, 0.1)" : "transparent",
                                border: "none",
                                color: service.isHeader ? "#d4af37" : "rgba(255, 255, 255, 0.88)",
                                cursor: "pointer",
                                borderRadius: "6px",
                                fontSize: "13px",
                                fontWeight: service.isHeader ? 700 : 500,
                                textAlign: "left",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(31, 166, 160, 0.15)";
                                e.currentTarget.style.color = "#d4af37";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = service.isHeader ? "rgba(31, 166, 160, 0.1)" : "transparent";
                                e.currentTarget.style.color = service.isHeader ? "#d4af37" : "rgba(255, 255, 255, 0.88)";
                              }}
                            >
                              {IconComponent && <IconComponent size={16} />}
                              {service.label}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? "#d4af37" : "#ffffff",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4af37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "#d4af37" : "#ffffff";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Request Consult Button */}
          <button
            onClick={handleRequestConsult}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "13px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Phone size={16} />
            Request a Consult
          </button>

          {/* Call Now Link - Original */}
          <Link
            href={brand.phoneHref}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              fontWeight: "700",
              fontSize: "13px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Phone size={16} />
            Call Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "none",
            padding: "8px",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "rgba(11, 19, 32, 0.95)",
            padding: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {menuItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "6px",
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.88)",
                      fontWeight: 600,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                  </button>

                  {mobileServicesOpen && (
                    <div style={{ paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      {serviceItems.map((service) => (
                        <button
                          key={service.href}
                          onClick={() => handleServiceClick(service.href, service.isHeader)}
                          style={{
                            padding: "8px 12px",
                            borderRadius: "6px",
                            background: "rgba(31, 166, 160, 0.1)",
                            border: "none",
                            color: "rgba(255, 255, 255, 0.88)",
                            fontSize: "13px",
                            fontWeight: 500,
                            textAlign: "left",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(255, 255, 255, 0.88)",
                  padding: "12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Request Consult Button */}
          <button
            onClick={() => {
              handleRequestConsult();
              setMobileOpen(false);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "13px",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            <Phone size={16} />
            Request a Consult
          </button>

          {/* Mobile Call Now Button */}
          <Link
            href={brand.phoneHref}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "13px",
              cursor: "pointer",
              textDecoration: "none",
              marginTop: "8px",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            Call Now
          </Link>
        </div>
      )}
    </header>
  );
}
