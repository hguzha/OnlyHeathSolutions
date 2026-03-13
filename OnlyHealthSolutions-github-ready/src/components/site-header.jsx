"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

const serviceLinks = [
  { href: "/services/nursing", label: "Nursing" },
  { href: "/services/personal-care", label: "Personal Care" },
  { href: "/services/companion", label: "Companion / Sitter" },
  { href: "/services/respite", label: "Respite Care" },
  { href: "/services/dementia-care", label: "Dementia Support" },
  { href: "/services/post-hospital", label: "Post-Hospital Support" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const nonServiceLinks = navLinks.filter((item) => item.href !== "/services");
  const serviceActive =
    pathname === "/services" || pathname.startsWith("/services/");

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
          }}
        >
          {nonServiceLinks.map((item, index) => {
            const insertServicesAfter = item.href === "/";

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
                    color:
                      pathname === item.href
                        ? "#ffffff"
                        : "rgba(255,255,255,0.9)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-6px",
                      width: pathname === item.href ? "100%" : "0%",
                      height: "2px",
                      background: "#d4af37",
                      transition: "width 0.3s ease",
                    }}
                  />
                </Link>

                <div
                  style={{
                    height: "16px",
                    width: "1px",
                    background: "rgba(255,255,255,0.25)",
                    marginLeft: "6px",
                  }}
                />

                {insertServicesAfter && (
                  <>
                    <div
                      className="services-dropdown"
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "6px",
                        marginRight: "6px",
                      }}
                    >
<div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "5px 6px",
    position: "relative",
    whiteSpace: "nowrap",
  }}
>
  <Link
    href="/services"
    style={{
      color: serviceActive ? "#ffffff" : "rgba(255,255,255,0.9)",
      fontWeight: 600,
      fontSize: "14px",
    }}
  >
    Services
  </Link>
  <ChevronDown
    size={15}
    style={{
      color: serviceActive ? "#ffffff" : "rgba(255,255,255,0.9)",
    }}
  />
  <span
    style={{
      position: "absolute",
      left: 0,
      bottom: "-6px",
      width: serviceActive ? "100%" : "0%",
      height: "2px",
      background: "#d4af37",
      transition: "width 0.3s ease",
    }}
  />
</div>
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            bottom: "-6px",
                            width: serviceActive ? "100%" : "0%",
                            height: "2px",
                            background: "#d4af37",
                            transition: "width 0.3s ease",
                          }}
                        />
                      </button>

 <div
  className="services-dropdown-menu"
  style={{
    position: "absolute",
    top: "calc(100% + 2px)",
    left: 0,
    minWidth: "250px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
    display: "none",
    flexDirection: "column",
    gap: "6px",
    zIndex: 1001,
  }}
>
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            style={{
                              color: "#0f172a",
                              padding: "10px 12px",
                              borderRadius: "12px",
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        height: "16px",
                        width: "1px",
                        background: "rgba(255,255,255,0.25)",
                        marginLeft: "6px",
                        marginRight: "6px",
                      }}
                    />
                  </>
                )}

                {index < nonServiceLinks.length - 1 && !insertServicesAfter && (
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
              color: "#ffffff",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            <Phone size={16} />
            {brand.phoneDisplay}
          </a>

          <Link
            href="/services#new-client-inquiry"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 600,
              color: "white",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              whiteSpace: "nowrap",
            }}
          >
            Request a Consult
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.22)",
            background: "rgba(255,255,255,0.06)",
            color: "white",
            cursor: "pointer",
            marginLeft: "auto",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="mobile-dropdown"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(135deg, rgba(11,19,32,0.98) 0%, rgba(17,27,46,0.96) 100%)",
          }}
        >
          <div
            className="container"
            style={{
              paddingTop: "16px",
              paddingBottom: "20px",
              display: "grid",
              gap: "12px",
            }}
          >
            {nonServiceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background:
                    pathname === item.href
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Link>
            ))}

            <div
              style={{
                borderRadius: "16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileServicesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                />
              </button>

              {mobileServicesOpen && (
                <div
                  style={{
                    display: "grid",
                    gap: "8px",
                    padding: "0 12px 12px",
                  }}
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      style={{
                        display: "block",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.06)",
                        color: "white",
                        fontWeight: 500,
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={brand.phoneHref}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 16px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontWeight: 600,
              }}
            >
              <Phone size={16} />
              {brand.phoneDisplay}
            </a>

            <Link
              href="/services#new-client-inquiry"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 16px",
                borderRadius: "16px",
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              }}
            >
              Request a Consult
            </Link>
          </div>
        </div>
      )}

<style jsx>{`
  .services-dropdown {
    padding-bottom: 18px;
  }

  .services-dropdown:hover .services-dropdown-menu {
    display: flex !important;
  }

  .services-dropdown-menu a:hover {
    background: #f8fafc;
    color: #1fa6a0;
  }

  @media (max-width: 980px) {
    .desktop-nav,
    .desktop-actions {
      display: none !important;
    }

    .mobile-menu-btn {
      display: inline-flex !important;
    }
  }
`}</style>
    </header>
  );
}
