"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("Request for Care — Only Health Solutions");
    const body = encodeURIComponent(
      `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}`
    );

    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
  }

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

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginTop: 18 }}>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <textarea
                placeholder="How can we help?"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ padding: 12, borderRadius: 12, border: "1px solid #dbe2ea" }}
                required
              />

              <button className="btn btn-primary" type="submit">
                Send request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
