"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { faqItems } from "@/lib/site-data";
import { ChevronDown, Search, Lightbulb, HelpCircle, Clock, DollarSign, Users, Heart } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Categorize FAQs
  const categories = {
    "Getting Started": [
      { icon: Lightbulb, color: "#1fa6a0" },
    ],
    "Scheduling & Availability": [
      { icon: Clock, color: "#6a3fb5" },
    ],
    "Pricing & Payment": [
      { icon: DollarSign, color: "#1fa6a0" },
    ],
    "Our Caregivers": [
      { icon: Users, color: "#6a3fb5" },
    ],
    "Care & Support": [
      { icon: Heart, color: "#1fa6a0" },
    ],
  };

  // Filter FAQs based on search
  const filteredFaqs = faqItems.filter((item) =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryNames = Object.keys(categories);
  const itemsPerCategory = Math.ceil(filteredFaqs.length / categoryNames.length);

  // Distribute FAQs across categories
  const categorizedFaqs = categoryNames.map((cat, idx) => ({
    name: cat,
    items: filteredFaqs.slice(idx * itemsPerCategory, (idx + 1) * itemsPerCategory),
    icon: Object.values(categories)[idx][0].icon,
    color: Object.values(categories)[idx][0].color,
  }));

  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about our services and how we can help."
        image="faq1.png"
        height={700}
      />

      {/* Search Section - FURTHER REDUCED */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "28px",
          paddingBottom: "28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 800,
                marginBottom: "6px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Find Your Answers
            </h2>
            <p style={{ fontSize: "13px", color: "#666", margin: "0" }}>
              Search or browse our FAQs to learn more
            </p>
          </div>

          {/* Search Box */}
          <div
            style={{
              position: "relative",
              background: "white",
              borderRadius: "14px",
              border: "2px solid rgba(31,166,160,0.2)",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(31,166,160,0.12)";
              e.currentTarget.style.borderColor = "rgba(31,166,160,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.04)";
              e.currentTarget.style.borderColor = "rgba(31,166,160,0.2)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", padding: "12px 16px", gap: "10px" }}>
              <Search size={16} color="#1fa6a0" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  background: "transparent",
                  fontSize: "14px",
                  color: "#0b1320",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Search Results Count */}
          {searchTerm && (
            <p style={{ textAlign: "center", marginTop: "10px", color: "#666", fontSize: "12px" }}>
              Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </section>

      {/* FAQs Section */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "80px",
          paddingBottom: "100px",
          position: "relative",
        }}
      >
        <div className="container">
          {filteredFaqs.length > 0 ? (
            <div
              data-grid-faq
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "32px",
              }}
            >
              {filteredFaqs.map((item, index) => (
                <FAQAccordion
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "60px" }}>
              <HelpCircle size={64} color="#1fa6a0" opacity={0.3} style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#0b1320", marginBottom: "8px" }}>
                No results found
              </h3>
              <p style={{ color: "#666", fontSize: "16px" }}>
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(31,166,160,0.95) 0%, rgba(106,63,181,0.95) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Still Have Questions?
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.95)", marginBottom: "40px" }}>
            Our team is always ready to help. Reach out to us directly and we'll provide personalized answers to your questions.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.95)",
              color: "#1fa6a0",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
        }

        .faq-content {
          animation: slideDown 0.3s ease forwards;
        }

        .faq-content-closing {
          animation: slideUp 0.3s ease forwards;
        }

        @media (max-width: 768px) {
          /* Mobile hero - FIX CUTOFF AND TEXT POSITIONING */
          .hero {
            height: 320px !important;
          }

          .hero::after {
            content: '' !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            height: 120px !important;
            background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.75)) !important;
            z-index: 5 !important;
            pointer-events: none !important;
          }

          .hero-img,
          .hero img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }

          /* TEXT AT BOTTOM - NO SPACE */
          .hero-content {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 10 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-end !important;
            align-items: flex-start !important;
            padding: 10px 14px !important;
            margin: 0 !important;
            gap: 4px !important;
            width: 100% !important;
          }

          .hero-content h1 {
            font-size: 18px !important;
            margin: 0 !important;
            line-height: 1.2 !important;
            color: white !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.7) !important;
            font-weight: bold !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          .hero-content p {
            font-size: 11px !important;
            margin: 0 !important;
            line-height: 1.3 !important;
            color: white !important;
            text-shadow: 0 1px 3px rgba(0,0,0,0.7) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          [data-grid-faq] {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 260px !important;
          }

          .hero::after {
            height: 100px !important;
          }

          .hero-content {
            padding: 8px 12px !important;
            gap: 3px !important;
          }

          .hero-content h1 {
            font-size: 14px !important;
          }

          .hero-content p {
            font-size: 9px !important;
          }
        }
      `}</style>
    </main>
  );
}

// FAQ Accordion Component
function FAQAccordion({ item, index, isOpen, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(31,166,160,0.08) 0%, rgba(106,63,181,0.08) 100%)"
          : "#ffffff",
        border: isOpen
          ? "2px solid rgba(31,166,160,0.3)"
          : "2px solid rgba(31,166,160,0.1)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "translateY(-5px)" : "translateY(0px)",
        boxShadow: isHovered
          ? "0 20px 50px rgba(31,166,160,0.15)"
          : "0 10px 30px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      {/* Header */}
      <div
        style={{
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0b1320",
              margin: "0",
              lineHeight: 1.4,
            }}
          >
            {item.q}
          </h3>
        </div>

        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            boxShadow: "0 5px 20px rgba(31,166,160,0.2)",
          }}
        >
          <ChevronDown size={20} color="#ffffff" />
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div
          className="faq-content"
          style={{
            padding: "0 32px 28px 32px",
            borderTop: "1px solid rgba(31,166,160,0.2)",
          }}
        >
          <p
            style={{
              color: "#666",
              lineHeight: 1.8,
              fontSize: "15px",
              margin: "0",
            }}
          >
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}
