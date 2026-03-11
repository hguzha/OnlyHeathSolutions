import Link from "next/link";
import { brand, navLinks } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={brand.logo} alt={brand.name} style={{ height: 64, width: "auto" }} />
            <p style={{ marginTop: 16, color: "rgba(255,255,255,0.8)" }}>
              Private, compassionate home care tailored to your loved one’s comfort, dignity, and safety.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3>Contact</h3>
            <div style={{ display: "grid", gap: 10, marginTop: 16, color: "rgba(255,255,255,0.8)" }}>
              <a href={brand.phoneHref}>{brand.phoneDisplay}</a>
              <a href={brand.emailHref}>{brand.emailDisplay}</a>
              <div>{brand.addressLine}</div>
              <div>{brand.serviceArea}</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
