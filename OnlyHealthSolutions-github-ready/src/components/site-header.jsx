"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      className="topbar"
      style={{
        borderBottom: "2px solid #d4af37",
      }}
    >
      <div className="container topbar-inner">
        <Link href="/">
          <img src={brand.logo} alt={brand.name} className="logo-img" />
        </Link>

 <nav
  style={{
    display: "flex",
    alignItems: "center",
    gap: "14px",
    fontWeight: 600,
    fontSize: "14px",
    flex: 1,
    justifyContent: "center",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }}
>
          {navLinks.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <div key={item.href} style={{ display: "flex", alignItems: "center" }}>
                <Link
                  href={item.href}
                  style={{
                    padding: "4px 6px",
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
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
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
            <span>Call</span>
          </a>

          <Link
            href="/contact"
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
      </div>
    </header>
  );
}
