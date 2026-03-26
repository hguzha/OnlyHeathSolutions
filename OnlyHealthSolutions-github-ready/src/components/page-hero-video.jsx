import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function PageHeroVideo() {
  return (
    <>
      <section
        data-hero-video
        style={{
          position: "relative",
          minHeight: "88vh",
          overflow: "hidden",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src="hero2video.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,15,25,0.25) 0%, rgba(10,15,25,0.48) 55%, rgba(10,15,25,0.68) 100%)",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "88vh",
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: "80px",
          }}
        >
          <div style={{ maxWidth: "760px", color: "white" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.08)",
                marginBottom: "20px",
              }}
            >
              Only Health Solutions
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
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

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
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
                href="/contact#contact-form-section"
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
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          [data-hero-video] video {
            object-position: center !important;
            object-fit: contain !important;
          }

          [data-hero-video] .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
            padding-bottom: 80px !important;
          }

          [data-hero-video] div[style*="maxWidth"] {
            max-width: 100% !important;
          }

          [data-hero-video] h1 {
            font-size: clamp(28px, 5vw, 56px) !important;
            margin-bottom: 12px !important;
          }

          [data-hero-video] p {
            font-size: clamp(16px, 2vw, 22px) !important;
            max-width: 100% !important;
          }

          [data-hero-video] div[style*="gap: 14"] {
            flex-wrap: wrap;
            gap: 10px !important;
          }

          [data-hero-video] .btn {
            flex: 1 1 calc(50% - 5px);
            min-width: 100px;
            padding: 12px 16px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </>
  );
}
