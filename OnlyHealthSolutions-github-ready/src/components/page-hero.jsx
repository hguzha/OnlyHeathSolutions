"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/site-data";

export default function PageHero({
  title,
  subtitle,
  image,
  images = [],
  height = 420,
}) {
  const slides = images.length > 0 ? images : [image];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", height }}>
        {slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={title}
            className="hero-img"
            style={{
              height,
              position: "absolute",
              inset: 0,
              width: "100%",
              objectFit: "cover",
              opacity: index === current ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}

        {/* softer overlay */}
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(31,166,160,0.42) 0%, rgba(106,63,181,0.34) 55%, rgba(0,0,0,0.38) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 25%, rgba(31,166,160,0.12), transparent 55%), radial-gradient(circle at 80% 75%, rgba(106,63,181,0.10), transparent 55%)",
          }}
        />

        <div className="hero-content">
          <div className="container">
            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                marginBottom: 18,
              }}
            >
              {brand.name}
            </div>

            <h1>{title}</h1>
            <p>{subtitle}</p>

            {slides.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 22,
                  alignItems: "center",
                }}
              >
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    style={{
                      width: index === current ? 28 : 10,
                      height: 10,
                      borderRadius: 999,
                      border: "none",
                      cursor: "pointer",
                      background:
                        index === current
                          ? "#d4af37"
                          : "rgba(255,255,255,0.55)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
