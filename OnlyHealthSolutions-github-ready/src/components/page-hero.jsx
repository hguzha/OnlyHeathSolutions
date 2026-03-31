"use client";

import { useState, useEffect } from "react";
import { brand } from "@/lib/site-data";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function PageHero({
  title,
  subtitle,
  image,
  images = [],
  video,
  height = 420,
  background,
}) {
  const slides = images.length > 0 ? images : image ? [image] : [];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // If video prop is provided, render video instead
  if (video) {
    return (
      <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", height }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="hero-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background:
                background ||
                "linear-gradient(120deg, rgba(31,166,160,0.28) 0%, rgba(106,63,181,0.22) 55%, rgba(0,0,0,0.30) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 25%, rgba(31,166,160,0.10), transparent 55%), radial-gradient(circle at 80% 75%, rgba(106,63,181,0.08), transparent 55%)",
            }}
          />

          <div
            className="hero-content"
            style={{
              position: "absolute",
              bottom: "50px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "flex-end",
              padding: "0 20px",
              zIndex: 10,
            }}
          >
            <div className="container">
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.08)",
                  marginBottom: 18,
                  color: "white",
                  fontSize: "clamp(12px, 2vw, 14px)",
                }}
              >
                {brand.name}
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 6vw, 52px)",
                  fontWeight: 800,
                  marginBottom: "12px",
                  color: "white",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)",
                  maxWidth: "760px",
                  margin: "0 auto",
                  color: "white",
                  lineHeight: 1.6,
                }}
              >
                {subtitle}
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
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero {
              height: auto;
              overflow: visible;
            }
            
            .hero-content {
              bottom: 20px !important;
              padding: 0 12px !important;
            }
            
            video {
              width: 100% !important;
              height: auto !important;
              min-height: 300px !important;
            }

            .hero-content div[style*="gap: 14"] {
              flex-direction: column;
              width: 100%;
            }

            .hero-content .btn {
              width: 100%;
              padding: 14px 20px !important;
              font-size: 14px !important;
              display: flex !important;
              justify-content: center !important;
            }
          }

          @media (max-width: 480px) {
            video {
              min-height: 250px !important;
            }

            .hero-content h1 {
              font-size: 28px !important;
            }

            .hero-content p {
              font-size: 14px !important;
            }

            .hero-content .btn {
              width: 100%;
              padding: 14px 16px !important;
              font-size: 13px !important;
            }
          }
        `}</style>
      </section>
    );
  }

  if (!slides.length) return null;

  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", height }}>
        {slides.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={title}
            className="hero-img"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === current ? 1 : 0,
              transition: "opacity 0.9s ease-in-out",
            }}
          />
        ))}

        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              background ||
              "linear-gradient(120deg, rgba(31,166,160,0.28) 0%, rgba(106,63,181,0.22) 55%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 25%, rgba(31,166,160,0.10), transparent 55%), radial-gradient(circle at 80% 75%, rgba(106,63,181,0.08), transparent 55%)",
          }}
        />

        <div
          className="hero-content"
          style={{
            position: "absolute",
            bottom: "50px",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "flex-end",
            padding: "0 20px",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                marginBottom: 18,
                color: "white",
                fontSize: "clamp(12px, 2vw, 14px)",
              }}
            >
              {brand.name}
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 800,
                marginBottom: "12px",
                color: "white",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 3vw, 20px)",
                maxWidth: "760px",
                margin: "0 auto",
                color: "white",
                lineHeight: 1.6,
              }}
            >
              {subtitle}
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

            {slides.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 22,
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background:
                        index === current
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.4)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        index === current
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.4)";
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero {
            height: auto;
            overflow: visible;
          }
          
          .hero-content {
            bottom: 30px !important;
            padding: 0 16px !important;
          }
          
          .hero-img {
            height: 300px !important;
          }

          .hero-content div[style*="gap: 14"] {
            flex-direction: column;
            width: 100%;
          }

          .hero-content .btn {
            width: 100%;
            padding: 14px 20px !important;
            font-size: 14px !important;
            display: flex !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content .btn {
            width: 100%;
            padding: 14px 16px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}
