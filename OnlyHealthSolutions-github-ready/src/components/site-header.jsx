"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";
import { HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart } from "lucide-react";

// Services dropdown data
const serviceItems = [
  { href: "/services", label: "All Services", isHeader: true },
  { href: "/services#personal-care", label: "Personal Care Assistance", icon: HeartHandshake },
  { href: "/services#companion-care", label: "Companion Care", icon: Users },
  { href: "/services#post-hospital-care", label: "Post-Hospital Support", icon: Stethoscope },
  { href: "/services#respite-care", label: "Respite Care", icon: CalendarHeart },
  { href: "/services#nursing-care", label: "Skilled Nursing Care", icon: Stethoscope },
  { href: "/services#dementia-care", label: "Alzheimer's & Dementia Care", icon: Brain },
  { href: "/services#live-in-care", label: "Live-In & Extended Care", icon: BedDouble },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
          {navLinks.map((item, index) => {
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
                  <button
                    style={{
                      padding: "5px 6px",
                      position: "relative",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.9)",
                      whiteSpace: "nowrap",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transition: "transform 0.3s ease",
                        transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "-6px",
                        width: isActive || servicesDropdownOpen ? "100%" : "0%",
                        height: "2px",
                        background: "#d4af37",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </button>

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
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              style={{
                                display: "block",
                                padding: "10px 12px",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: "13px",
                                textDecoration: "none",
                                borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
                                marginBottom: "4px",
                                borderRadius: "6px",
                                transition: "background 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "none";
                              }}
                            >
                              {service.label}
                            </Link>
                          );
                        }

                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "10px 12px",
                              color: "rgba(255,255,255,0.8)",
                              textDecoration: "none",
                              borderRadius: "6px",
                              transition: "all 0.2s ease",
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
                          </Link>
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
                    padding: "5px 6px",
                    position: "relative",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.9)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-6px",
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      background: "#d4af37",
                      transition: "width 0.3s ease",
                    }}
                  />
                </Link>

                {index < navLinks.length - 1 && (
                  <div
                    style={{
                      height: "16px",
                      width: "1px",
                      background: "rgba(255,255,255,0.25)",
                      marginLeft: "6px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        <div
          className="desktop-actions"
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexShrink: 0,
            minWidth: "fit-content",
          }}
        >
          <a
            href={brand.phoneHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.9)",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212, 175, 55, 0.15)";
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            }}
          >
            <Phone size={14} />
            {brand.phoneDisplay}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-button"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            display: "none",
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
            background: "rgba(11, 19, 32, 0.98)",
            backdropFilter: "blur(10px)",
          }}
          className="mobile-menu"
        >
          <div
            style={{
              padding: "16px",
            }}
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              // Special handling for Services in mobile
              if (item.label === "Services") {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "12px 0",
                        color: isActive ? "#d4af37" : "rgba(255,255,255,0.8)",
                        fontWeight: 600,
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        style={{
                          transition: "transform 0.3s ease",
                          transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div style={{ paddingLeft: "12px", borderLeft: "2px solid rgba(212, 175, 55, 0.3)" }}>
                        {serviceItems.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 0",
                                color: "rgba(255,255,255,0.7)",
                                textDecoration: "none",
                                fontSize: service.isHeader ? "13px" : "12px",
                                fontWeight: service.isHeader ? 600 : 500,
                              }}
                            >
                              {Icon && !service.isHeader && <Icon size={14} />}
                              {service.label}
                            </Link>
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
                    display: "block",
                    padding: "12px 0",
                    color: isActive ? "#d4af37" : "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-actions {
            display: none !important;
          }

          .mobile-menu-button {
            display: block !important;
          }

          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
