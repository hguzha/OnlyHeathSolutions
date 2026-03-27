"use client";

import FixedBackgroundShell from "@/components/fixed-background-shell";
import PageHeroVideo from "@/components/page-hero-video";
import SignatureServices from "@/components/signature-services";
import WhyChooseUs from "@/components/why-choose-us";
import TestimonialStrip from "@/components/testimonial-strip";
import CargivingGallery from "@/components/caregiving-gallery";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  const caregivingImages = [
    {
      src: "home-care-worker-1024x597.webp",
      alt: "Caregiver assisting elderly client"
    },
    {
      src: "GettyImages-1380716338.jpg",
      alt: "Healthcare professional with patient"
    },
    {
      src: "senior-caretaker-combing-hair.jpg",
      alt: "In-home care support"
    },
    {
      src: "1.webp",
      alt: "Compassionate care moment"
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const topSectionItems = [
    "Private in-home care tailored to each client",
    "Dependable, compassionate caregivers",
    "Flexible schedules and personalized care plans",
    "Family-centered communication and support",
  ];

  const whiteSection1Items = [
    "Tailored care plans for every individual need",
    "Certified and compassionate care professionals",
    "Reliable, consistent home care support",
    "Transparent communication with families",
  ];

  const whiteSection2Items = [
    "Preserves dignity and independence in daily living",
    "Builds trusted relationships with dedicated caregivers",
    "Provides peace of mind for families and loved ones",
    "Supports emotional wellness and social engagement",
  ];

  const renderWhiteSection = (items) => (
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
        {items.map((item, index) => (
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
        {items.map((item, index) => (
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
  );

  const sectionGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "24px" : "40px",
    alignItems: "center",
  };

  return (
    <FixedBackgroundShell>
      {/* MUCH BIGGER Hero Video - INCREASED SIZE */}
      <div style={{ width: "100%", padding: isMobile ? "0 12px" : "0 20px", margin: "0", marginTop: isMobile ? "-2px" : "-8px" }}>
        <div style={{ height: isMobile ? "700px" : "1400px", overflow: "hidden", borderRadius: "12px", maxWidth: "100%", display: "block" }}>
          <PageHeroVideo />
        </div>
      </div>
      
      {/* Full Width Features Grid - SCROLLING - ZERO GAP */}
      <div style={{ width: "100%", backgroundColor: "#ffffff", marginTop: "-12px", position: "relative", zIndex: 10, overflow: "hidden", padding: "40px 0" }}>
        {renderWhiteSection(topSectionItems)}
      </div>

      <SignatureServices />

      {/* White Separator Section 1 - Scrolling */}
      <div style={{ width: "100%", backgroundColor: "#ffffff", padding: "60px 0", overflow: "hidden" }}>
        {renderWhiteSection(whiteSection1Items)}
      </div>

      {/* First Row - Compassionate Care Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={sectionGridStyle}>
            {isMobile ? (
              <>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)", order: -1 }}>
                  <img src={caregivingImages[0].src} alt={caregivingImages[0].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>COMPASSIONATE CARE</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Personalized Support You Can Trust
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    Our caregivers provide respectful, dignified assistance tailored to each client's unique needs. We believe in preserving independence while offering the support families need for peace of mind.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
                  <img src={caregivingImages[0].src} alt={caregivingImages[0].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>COMPASSIONATE CARE</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Personalized Support You Can Trust
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    Our caregivers provide respectful, dignified assistance tailored to each client's unique needs. We believe in preserving independence while offering the support families need for peace of mind.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* White Separator Section 2 - Scrolling */}
      <div style={{ width: "100%", backgroundColor: "#ffffff", padding: "60px 0", overflow: "hidden" }}>
        {renderWhiteSection(whiteSection2Items)}
      </div>

      {/* Second Row - Professional Care Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={sectionGridStyle}>
            {isMobile ? (
              <>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)", order: -1 }}>
                  <img src={caregivingImages[1].src} alt={caregivingImages[1].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>PROFESSIONAL CARE</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Skilled Support at Home
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    From nursing care to companion support, our trained professionals deliver clinical excellence with a personal touch. Your loved ones deserve care that's both skilled and compassionate.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>PROFESSIONAL CARE</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Skilled Support at Home
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    From nursing care to companion support, our trained professionals deliver clinical excellence with a personal touch. Your loved ones deserve care that's both skilled and compassionate.
                  </p>
                </div>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
                  <img src={caregivingImages[1].src} alt={caregivingImages[1].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Third Row - Family Support Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={sectionGridStyle}>
            {isMobile ? (
              <>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)", order: -1 }}>
                  <img src={caregivingImages[2].src} alt={caregivingImages[2].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>FAMILY SUPPORT</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Peace of Mind for Families
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    We understand that finding the right care is deeply personal. Our team works closely with families to create custom care plans that fit your loved one's lifestyle and health needs perfectly.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
                  <img src={caregivingImages[2].src} alt={caregivingImages[2].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>FAMILY SUPPORT</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Peace of Mind for Families
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    We understand that finding the right care is deeply personal. Our team works closely with families to create custom care plans that fit your loved one's lifestyle and health needs perfectly.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Strip - What Families Are Saying */}
      <TestimonialStrip />

      {/* Fourth Row - Quality Excellence Gradient */}
      <section style={{ padding: "60px 0", background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)" }}>
        <div className="container">
          <div style={sectionGridStyle}>
            {isMobile ? (
              <>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)", order: -1 }}>
                  <img src={caregivingImages[3].src} alt={caregivingImages[3].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>QUALITY EXCELLENCE</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Excellence in Every Interaction
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    Only Health Solutions is committed to the highest standards of care. From thorough screening and training to ongoing support and communication, we ensure quality at every step.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "14px", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "1px" }}>QUALITY EXCELLENCE</p>
                  <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 16px" }}>
                    Excellence in Every Interaction
                  </h2>
                  <p style={{ color: "#ffffff", lineHeight: "1.8", margin: "0", fontSize: "16px" }}>
                    Only Health Solutions is committed to the highest standards of care. From thorough screening and training to ongoing support and communication, we ensure quality at every step.
                  </p>
                </div>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}>
                  <img src={caregivingImages[3].src} alt={caregivingImages[3].alt} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </FixedBackgroundShell>
  );
}
