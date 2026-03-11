import PageHero from "@/components/page-hero";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        subtitle="Connect with our team to ask questions, discuss care options, or request a consultation."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
        height={360}
      />

      <section className="section">
        <div className="container page-grid-2">
          <div className="card">
            <h3>Contact Info</h3>
            <div style={{ display: "grid", gap: 12, marginTop: 16, color: "#64748b" }}>
              <a href={brand.phoneHref}>{brand.phoneDisplay}</a>
              <a href={brand.emailHref}>{brand.emailDisplay}</a>
              <div>{brand.addressLine}</div>
              <div>{brand.serviceArea}</div>
            </div>
          </div>

          <div className="card">
            <h3>Request Care</h3>
            <form style={{ display: "grid", gap: 12, marginTop: 18 }}>
              <input placeholder="Your name" style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
              <input placeholder="Phone" style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
              <input placeholder="Email" style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
              <textarea placeholder="How can we help?" rows={6} style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
              <button className="btn btn-primary" type="button">
                Send request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
