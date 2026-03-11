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
    borderBottom: "2px solid #d4af37"
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
    gap: "18px",
    fontWeight: 600,
    fontSize: "15px"
  }}
>
  {navLinks.map((item, index) => {
    const isActive = pathname === item.href;

    return (
      <div key={item.href} style={{ display: "flex", alignItems: "center" }}>
        <Link
          href={item.href}
          style={{
            padding: "6px 8px",
            position: "relative",
            color: isActive ? "#ffffff" : "rgba(255,255,255,0.9)"
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
              transition: "width 0.3s ease"
            }}
          />
        </Link>

        {index < navLinks.length - 1 && (
          <div
            style={{
              height: "16px",
              width: "1px",
              background: "rgba(255,255,255,0.25)",
              marginLeft: "10px"
            }}
          />
        )}
      </div>
    );
  })}
</nav>        

<div style={{ display: "flex", gap: 12, alignItems: "center" }}>

  <a
    href={brand.phoneHref}
    className="btn btn-outline"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "white",
      padding: "8px 14px",
      borderRadius: "20px"
    }}
  >
    <Phone size={16} />
    Call
  </a>

  <Link className="btn btn-primary" href="/contact">
    Request a Consult
  </Link>

</div>
}
