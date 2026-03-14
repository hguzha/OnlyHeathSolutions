"use client";

import { useEffect } from "react";

export default function WhyChooseUs() {
  const points = [
    "Personalized care plans tailored to each client",
    "Respectful, compassionate caregivers",
    "Clear communication with families",
    "Support that feels warm, human, and dependable",
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
      .scroll-container {
        animation: scroll 40s linear infinite;
      }
      .scroll-container:hover {
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
          className="scroll-container"
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {/* First set */}
          {points.map((item, index) => (
            <div
              key={`first-${index}`}
              style={{
                minWidth: "320px",
                padding: "20px",
                borderRadius: "1rem",
                backgroundColor: "#f1f5f9",
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
                  margin: "0",
                }}
              >
                {item}
              </p>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {points.map((item, index) => (
            <div
              key={`second-${index}`}
              style={{
                minWidth: "320px",
                padding: "20px",
                borderRadius: "1rem",
                backgroundColor: "#f1f5f9",
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
                  margin: "0",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
