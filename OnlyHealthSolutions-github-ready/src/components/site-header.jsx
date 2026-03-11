"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
            marginRight: "24px",
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

        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontWeight: 500,
            fontSize: "12px",
            flex: 1,
            justifyContent: "flex-start",
            whiteSpace: "nowrap",
          }}
        >
          {navLinks.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <div key={item.href} style={{ display: "flex", alignItems: "center" }}>
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

        {/* Desktop actions */}
        <div
          className="desktop-actions"
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            marginLeft: "auto",
            flexShrink: 0,
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

        {/* Mobile menu button */}
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

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="mobile-dropdown"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            background: "linear-gradient(135deg, rgba(11,19,32,0.98) 0%, rgba(17,27,46,0.96) 100%)",
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
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background: isActive ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

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
