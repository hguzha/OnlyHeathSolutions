import Link from "next/link";
import PageHero from "@/components/page-hero";
import { brand, homeCards } from "@/lib/site-data";
import { Phone } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <PageHero
        title="Only Health Solutions"
        subtitle="Compassionate in-home support including nursing, personal care, and companion services designed to help families feel confident and supported."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop"
        height={520}
      />

      <section className="section">
        <div className="container">
          <div
            className="page-grid-2"
             style={{
            alignItems: "stretch"
             }}
             >
            <div className="card" style={{ background: "rgba(0,0,0,0.72)", color: "white" }}>
              <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "#1fa6a0", fontSize: 12, fontWeight: 700 }}>
                Private Home Care
              </div>
              <h2 style={{ fontSize: 42, marginTop: 24, marginBottom: 16 }}>
                Care at home that feels human.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                Private, compassionate home care tailored to your loved one. From companionship
                to personal care, we support independence, comfort, and peace of mind.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
             <Link className="btn btn-primary" href="/services#new-client-inquiry">
                Request a Free Consult
                </Link>
                <a href={brand.phoneHref} className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <Phone size={16} />
                  {brand.phoneDisplay}
                </a>
              </div>
            </div>

            <div
           className="card"
             style={{
             height: "100%",
             display: "flex",
             flexDirection: "column"
              }}
               >
              <h3>Leave Us a Message</h3>
              <p style={{ color: "#64748b" }}>
                Tell us a bit about your needs. We’ll respond promptly.
              </p>
                <form style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <input placeholder="Your name" style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
                <input placeholder="Phone" style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
                <input placeholder="Email" style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
                <textarea placeholder="What kind of care are you looking for?" rows={5} style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }} />
                <button className="btn btn-primary" type="button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 36, marginBottom: 12 }}>Everything you need, organized clearly</h2>
          <p style={{ color: "#64748b", maxWidth: 800 }}>
            This home page gives a quick overview of each main page so visitors can immediately
            understand what Only Health Solutions offers and go directly where they need to go.
          </p>

          <div
           className="page-grid-3"
           style={{
          alignItems: "stretch"
           }}
            >
            {homeCards.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7 }}>{item.text}</p>
                <div style={{ marginTop: 18 }}>
                  <Link className="btn btn-primary" href={item.href}>
                    Go to {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div
              className="card"
              style={{
               height: "100%",
               display: "flex",
             flexDirection: "column",
              justifyContent: "space-between"
             }}
             >
            <h3>Ready to get started?</h3>
            <p style={{ color: "#64748b" }}>
              Whether you want to review services, ask a question, or request a consultation,
              each page above is designed to guide you quickly.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <Link className="btn btn-primary" href="/contact">
                Request a Consult
              </Link>
              <Link className="btn btn-outline" href="/services">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
