"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";
import { HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = (navLinks && navLinks.length > 0) ? navLinks : fallbackNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleServiceClick = (href, isAllServices = false) => {
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileOpen(false);
    
    if (isAllServices) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  const handleRequestConsult = () => {
    setMobileOpen(false);
    if (pathname === "/services") {
      const element = document.getElementById('new-client-inquiry');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push("/services#new-client-inquiry");
    }
  };

  const headerTopBgColor = scrolled ? "#0b1320" : "#888888";
  const borderColor = scrolled ? "#d4af37" : "rgba(255, 255, 255, 0.3)";

  return (
    <header
      style={{
        borderBottom: `2px solid ${borderColor}`,
        position: isMobile ? "fixed" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: headerTopBgColor,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
        paddingRight: isMobile ? "0" : "12px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: isMobile ? "6px" : "10px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 8px" : "0 12px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            style={{
              height: isMobile ? "75px" : "130px",
              width: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* Desktop Navigation - INCREASED FONT SIZES */}
        {!isMobile && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              fontWeight: 600,
              fontSize: "14px",
              whiteSpace: "nowrap",
              position: "relative",
            }}
          >
            {menuItems.map((item) => {
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
                        color: "#ffffff",
                        cursor: "pointer",
                        padding: "5px 8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        fontWeight: 600,
                        fontSize: "14px",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                    >
                      {item.label}
                      <ChevronDown size={11} style={{ transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                    </button>

                    {servicesDropdownOpen && (
                      <>
                        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: "6px", pointerEvents: "auto" }} />
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(100% + 6px)",
                            left: 0,
                            backgroundColor: "rgba(11, 19, 32, 0.95)",
                            borderRadius: "8px",
                            padding: "7px",
                            minWidth: "260px",
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
                                  gap: "6px",
                                  width: "100%",
                                  padding: "7px 10px",
                                  backgroundColor: service.isHeader ? "rgba(31, 166, 160, 0.1)" : "transparent",
                                  border: "none",
                                  color: service.isHeader ? "#d4af37" : "rgba(255, 255, 255, 0.88)",
                                  cursor: "pointer",
                                  borderRadius: "5px",
                                  fontSize: "12px",
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
                                {IconComponent && <IconComponent size={13} />}
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
                    color: "#ffffff",
                    padding: "5px 8px",
                    borderRadius: "5px",
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Desktop Button */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
            <button
              onClick={handleRequestConsult}
              style={{
                padding: "5px 10px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                color: "white",
                border: "none",
                fontWeight: "700",
                fontSize: "11px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Request a Consult
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              padding: "4px",
              transition: "color 0.3s ease",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu - Only shows on mobile */}
      {isMobile && mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "75px",
            left: 0,
            right: 0,
            backgroundColor: "rgba(11, 19, 32, 0.95)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            maxHeight: "calc(100vh - 75px)",
            overflowY: "auto",
            zIndex: 999,
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Mobile Consult Button - AT THE TOP */}
          <button
            onClick={handleRequestConsult}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 14px",
              borderRadius: "0",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "11px",
              cursor: "pointer",
              width: "100%",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Request a Consult
          </button>

          {menuItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div key={item.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "0",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "rgba(255, 255, 255, 0.88)",
                      fontWeight: 600,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      fontSize: "12px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(31, 166, 160, 0.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {item.label}
                    <ChevronDown 
                      size={14} 
                      style={{ 
                        transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", 
                        transition: "transform 0.3s ease" 
                      }} 
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div style={{ backgroundColor: "rgba(31, 166, 160, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                      {serviceItems.map((service) => (
                        <button
                          key={service.href}
                          onClick={() => handleServiceClick(service.href, service.isHeader)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            width: "100%",
                            padding: "8px 14px 8px 28px",
                            borderRadius: "0",
                            background: "none",
                            border: "none",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                            color: "rgba(255, 255, 255, 0.88)",
                            fontSize: "11px",
                            fontWeight: 500,
                            textAlign: "left",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(31, 166, 160, 0.15)")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          {service.isHeader ? null : (service.icon && <service.icon size={12} />)}
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
                  padding: "10px 14px",
                  borderRadius: "0",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  display: "block",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "12px",
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(31, 166, 160, 0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
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
