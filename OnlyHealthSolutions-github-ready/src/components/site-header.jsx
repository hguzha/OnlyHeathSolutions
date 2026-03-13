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

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleServiceClick = (href) => {
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    
    // If clicking "All Services", use replace to clear the service param
    if (href === "/services") {
      router.replace(href);
    } else {
      router.push(href);
    }
  };

  const renderNavItems = () => {
    return navLinks.map((item) => {
      const isActive =
        pathname === item.href ||
        (item.href === "/services" && pathname.startsWith("/services"));

      // Special handling for Services with dropdown
      if (item.label === "Services") {
        return (
          <div
            key={item.href}
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <span
              style={{
                color: isActive ? "#d4af37" : "#0f172a",
                transition: "color 0.3s ease",
                cursor: "pointer",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {item.label}
              <ChevronDown
                size={16}
                style={{
                  transition: "transform 0.3s ease",
                  transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </span>

            {/* Invisible bridge to prevent dropdown from closing */}
            {servicesDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  height: "12px",
                  pointerEvents: "auto",
                }}
              />
            )}

            {/* Desktop Dropdown */}
            {servicesDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(11, 19, 32, 0.95)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "12px",
                  minWidth: "280px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                  zIndex: 1001,
                  padding: "8px",
                }}
              >
                {serviceItems.map((service, idx) => {
                  if (service.isHeader) {
                    return (
                      <button
                        key={service.href}
                        onClick={() => handleServiceClick(service.href)}
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px 12px",
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "13px",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
                          marginBottom: "4px",
                          borderRadius: "6px",
                          transition: "background 0.2s ease",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "none";
                        }}
                      >
                        {service.label}
                      </button>
                    );
                  }

                  const Icon = service.icon;
                  return (
                    <button
                      key={service.href}
                      onClick={() => handleServiceClick(service.href)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                        padding: "10px 12px",
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        borderRadius: "6px",
                        transition: "all 0.2s ease",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "none";
                        e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                      }}
                    >
                      {Icon && <Icon size={14} />}
                      <span style={{ fontSize: "13px" }}>{service.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      }

      // Regular nav items
      return (
        <div
          key={item.href}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link
            href={item.href}
            style={{
              color: isActive ? "#d4af37" : "#0f172a",
              transition: "color 0.3s ease",
              cursor: "pointer",
              padding: "8px 12px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isActive ? "#d4af37" : "#0f172a";
            }}
          >
            {item.label}
          </Link>
        </div>
      );
    });
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
          {renderNavItems()}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#0f172a",
          }}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {/* CTA Button */}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "20px",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          {navLinks.map((item) => {
            if (item.label === "Services") {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "12px 0",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#0f172a",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "12px", marginTop: "8px" }}>
                      {serviceItems.map((service) => {
                        if (service.isHeader) {
                          return (
                            <button
                              key={service.href}
                              onClick={() => handleServiceClick(service.href)}
                              style={{
                                textAlign: "left",
                                background: "none",
                                border: "none",
                                padding: "8px 0",
                                fontWeight: "700",
                                fontSize: "13px",
                                color: "#0f172a",
                                cursor: "pointer",
                                textDecoration: "none",
                              }}
                            >
                              {service.label}
                            </button>
                          );
                        }
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.href}
                            onClick={() => handleServiceClick(service.href)}
                            style={{
                              textAlign: "left",
                              background: "none",
                              border: "none",
                              padding: "8px 0",
                              fontSize: "13px",
                              color: "#64748b",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              textDecoration: "none",
                            }}
                          >
                            {Icon && <Icon size={12} />}
                            {service.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 0",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#0f172a",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
