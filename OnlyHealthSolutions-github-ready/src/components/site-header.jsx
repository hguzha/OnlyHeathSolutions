import Link from "next/link";
import { Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export default function SiteHeader() {
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
  {navLinks.map((item, index) => (
    <div key={item.href} style={{ display: "flex", alignItems: "center" }}>
      <Link
        href={item.href}
        style={{
          padding: "6px 8px",
          position: "relative",
          color: "rgba(255,255,255,0.9)"
        }}
      >
        {item.label}
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
  ))}
</nav>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a className="btn btn-outline" href={brand.phoneHref}>
            <Phone size={16} style={{ marginRight: 8, verticalAlign: "middle" }} />
            Call
          </a>
          <Link className="btn btn-primary" href="/contact">
            Request a Consult
          </Link>
        </div>
      </div>
    </header>
  );
}
