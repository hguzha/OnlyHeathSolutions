import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function PageHeroVideo() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(11,19,32,0.4) 0%, rgba(106,63,181,0.3) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          color: "white",
          maxWidth: "900px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.08)",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            marginBottom: 18,
            color: "white",
          }}
        >
          Only Health Solutions
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.02,
            margin: "0 0 18px",
            fontWeight: 800,
          }}
        >
          Private Home Care, Delivered with Compassion
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 2vw, 22px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.9)",
            maxWidth: "680px",
          }}
        >
          Personalized support that brings comfort, dignity, and peace of mind at home.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28, justifyContent: "center" }}>
          <Link
            href="/services#new-client-inquiry"
            className="btn"
            style={{
              background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
              color: "white",
            }}
          >
            Request a Consult
          </Link>

          <a
            href={brand.phoneHref}
            className="btn"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Phone size={16} />
            {brand.phoneDisplay}
          </a>

          <Link
            href="/contact#send-message"
            className="btn"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <MessageSquare size={16} />
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
