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
<Link href="/" style={{ marginRight: "40px", flexShrink: 0 }}>
  <img
    src={brand.logo}
    alt={brand.name}
    style={{ height: "90px", width: "auto" }}
  />
</Link>

<nav
  style={{
    display: "flex",
    alignItems: "center",
    gap: "16px",
    fontWeight: 600,
    fontSize: "15px",
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: "10px",
    whiteSpace: "nowrap"
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
    marginLeft: "auto"
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
    whiteSpace: "nowrap"
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
    background: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
    whiteSpace: "nowrap",
    boxShadow: "0 8px 20px rgba(31,166,160,0.18)"
  }}
>
  Request a Consult
</Link>
        </div>
      </div>
    </header>
  );
}
