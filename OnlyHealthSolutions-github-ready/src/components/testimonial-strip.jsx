"use client";

import { useEffect } from "react";

export default function TestimonialStrip() {
  const testimonials = [
    {
      quote:
        "Only Health Solutions provided exceptional care for our mother. The caregiver was compassionate, professional, and truly treated her like family.",
      name: "Family Member",
      location: "Cobb County",
    },
    {
      quote:
        "We finally have peace of mind knowing someone dependable is caring for our father. The communication and attention to detail have been outstanding.",
      name: "Client Family",
      location: "Fulton County",
    },
    {
      quote:
        "Their team is professional, respectful, and incredibly supportive. The care provided has made a meaningful difference in our loved one's daily life.",
      name: "Client Family",
      location: "Cherokee County",
    },
    {
      quote:
        "Only Health Solutions provided exceptional care for our mother. The caregiver was compassionate, professional, and truly treated her like family.",
      name: "Family Member",
      location: "Cobb County",
    },
    {
      quote:
        "We finally have peace of mind knowing someone dependable is caring for our father. The communication and attention to detail have been outstanding.",
      name: "Client Family",
      location: "Fulton County",
    },
    {
      quote:
        "Their team is professional, respectful, and incredibly supportive. The care provided has made a meaningful difference in our loved one's daily life.",
      name: "Client Family",
      location: "Cherokee County",
    },
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .testimonial-container {
        animation: scroll 30s linear infinite;
      }
      .testimonial-container:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section style={{ width: "100%", backgroundColor: "#ffffff", padding: "60px 0", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          className="testimonial-container"
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                minWidth: "320px",
                padding: "24px",
                borderRadius: "1rem",
                backgroundColor: "#f1f5f9",
                border: "1px solid #e5e7eb",
                flex: "0 0 auto",
              }}
            >
              <div
                style={{
                  marginBottom: "12px",
                  height: "10px",
                  width: "56px",
                  borderRadius: "9999px",
                  background: "linear-gradient(to right, #22D3EE, #67E8F9, #A855F7)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "#475569",
                  marginBottom: "12px",
                }}
              >
                "{item.quote}"
              </p>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#0f172a" }}>
                {item.name}
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
