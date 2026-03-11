import { brand } from "@/lib/site-data";

export default function PageHero({ title, subtitle, image, height = 420 }) {
  return (
    <section className="hero">
      <img src={image} alt={title} className="hero-img" style={{ height }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="container">
          <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", marginBottom: 18 }}>
            {brand.name}
          </div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
