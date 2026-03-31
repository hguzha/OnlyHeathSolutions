import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function PageHeroVideo() {
  // Add mobile detection for correct style on mobile only
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

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
          <source src="usevideo2.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,15,25,0.25) 0%, rgba(10,15,25,0.48) 55%, rgba(10,15,25,0.68) 100%)",
          }}
        />

        {/* KEY: Mobile fix on the container below */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: isMobile ? "auto" : "88vh",
            display: "flex",
            alignItems: isMobile ? "center" : "flex-end",
            paddingBottom: isMobile ? "0px" : "80px",
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

      {/* Updated only the video height for mobile */}
      <style>{`
        @media (max-width: 768px) {
          [data-hero-video] {
            position: relative !important;
            min-height: auto !important;
            overflow: visible !important;
            display: flex !important;
            flex-direction: column !important;
            background: linear-gradient(180deg, rgba(10,15,25,0.8) 0%, rgba(10,15,25,0.9) 100%);
            padding-bottom: 40px !important;
          }

          [data-hero-video] video {
            position: relative !important;
            width: 100% !important;
            height: 35vh !important; /* Decreased from previous value */
            object-fit: contain !important;
            object-position: center !important;
            order: 1 !important;
            display: block !important;
            margin: 0 !important;
          }

          [data-hero-video] div[style*="position: absolute"][style*="inset"] {
            display: none !important;
          }

          [data-hero-video] .container {
            position: relative !important;
            z-index: 10 !important;
            min-height: auto !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 30px 16px 0 16px !important;
            background: transparent !important;
            order: 2 !important;
            margin-top: 0 !important;
            display: flex !important;
          }

          [data-hero-video] div[style*="maxWidth: 760px"] {
            max-width: 100% !important;
            width: 100% !important;
          }

          [data-hero-video] div[style*="display: inline-block"][style*="padding: 6px"] {
            display: inline-block !important;
            margin-bottom: 12px !important;
          }

          [data-hero-video] h1 {
            font-size: clamp(24px, 5vw, 40px) !important;
            margin-bottom: 12px !important;
            color: #ffffff !important;
          }

          [data-hero-video] p {
            font-size: clamp(14px, 2vw, 18px) !important;
            max-width: 100% !important;
            color: rgba(255,255,255,0.9) !important;
            margin-bottom: 20px !important;
          }

          [data-hero-video] div[style*="gap: 14"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
            width: 100% !important;
            margin-top: 16px !important;
          }

          [data-hero-video] .btn {
            width: 100% !important;
            padding: 14px 20px !important;
            font-size: 14px !important;
            text-align: center !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 8px !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
          }

          [data-hero-video] .btn:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </>
  );
}
