import Link from "next/link";
import { Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";

export default function SiteHeader() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/">
          <img src={brand.logo} alt={brand.name} className="logo-img" />
        </Link>

        <nav className="nav">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
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
