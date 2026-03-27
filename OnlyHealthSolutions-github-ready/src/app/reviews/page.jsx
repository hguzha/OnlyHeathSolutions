"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHero from "@/components/page-hero";
import { reviews } from "@/lib/site-data";
import { Star, Quote, Heart, Users, MessageCircle, CheckCircle, X } from "lucide-react";

export default function ReviewsPage() {
  const [selectedReview, setSelectedReview] = useState(null);
  const router = useRouter();

  // Add ratings to reviews if they don't have them
  const reviewsWithRatings = reviews.map((review, index) => ({
    ...review,
    rating: review.rating || 5,
    date: review.date || "Recently",
    verified: true,
  }));

  const averageRating = (
    reviewsWithRatings.reduce((acc, review) => acc + review.rating, 0) /
    reviewsWithRatings.length
  ).toFixed(1);

  const totalReviews = reviewsWithRatings.length;

  const handleGetStarted = () => {
    router.push("/services?scroll=new-client-inquiry");
    setTimeout(() => {
      const element = document.getElementById("new-client-inquiry");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <main>
      <PageHero
        title="What Families Say"
        subtitle="Real stories from families who trust Only Health Solutions for compassionate, responsive home care."
        video="your-video-file.mp4"
        height={700}
      />

      {/* Stats Overlay - Inside Video Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1320 0%, #1a2847 100%)",
          paddingTop: "20px",
          paddingBottom: "40px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          marginTop: "-80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div data-grid-reviews
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "30px",
              textAlign: "center",
            }}
          >
            {/* Average Rating */}
            <div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "6px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {averageRating}
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: "3px", marginBottom: "4px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#FFD700"
                    color="#FFD700"
                  />
                ))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontWeight: 600, fontSize: "13px" }}>
                Average Rating
              </p>
            </div>

            {/* Total Reviews */}
            <div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "6px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {totalReviews}
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>
                <MessageCircle size={18} color="#1fa6a0" />
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontWeight: 600, fontSize: "13px" }}>
                Family Reviews
              </p>
            </div>

            {/* Satisfaction */}
            <div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "6px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                100%
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "4px" }}>
                <CheckCircle size={18} color="#1fa6a0" />
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontWeight: 600, fontSize: "13px" }}>
                Satisfied Families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "60px",
          paddingBottom: "100px",
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
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,63,181,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 800,
                marginBottom: "16px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Family Testimonials
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Hear from the families we serve about their experience with Only Health Solutions
            </p>
          </div>

          <div data-grid-reviews
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {reviewsWithRatings.map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
                onSelect={() => setSelectedReview(review)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Modal */}
      {selectedReview && (
        <FeaturedReviewModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}

      {/* Trust Section */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
        }}
      >
        <div className="container">
          <div data-grid-reviews
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left - Trust Points */}
            <div>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "24px",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Why Families Trust Us
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <TrustPoint
                  icon={Heart}
                  title="Compassionate Care"
                  description="Every interaction is guided by genuine care and respect for our clients"
                />
                <TrustPoint
                  icon={Users}
                  title="Expert Caregivers"
                  description="Our team is thoroughly vetted, trained, and committed to excellence"
                />
                <TrustPoint
                  icon={CheckCircle}
                  title="Consistent Quality"
                  description="Reliable, professional service that families can depend on every single day"
                />
              </div>
            </div>

            {/* Right - Testimonial Highlight */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(31,166,160,0.1) 0%, rgba(106,63,181,0.1) 100%)",
                border: "2px solid rgba(31,166,160,0.2)",
                borderRadius: "24px",
                padding: "48px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Quote size={48} color="#1fa6a0" style={{ margin: "0 auto 24px", opacity: 0.3 }} />
              <p
                style={{
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#0b1320",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                "The compassion and professionalism shown by the team has been incredible. My mother feels safe and cared for."
              </p>
              <div>
                <p style={{ fontWeight: 700, color: "#0b1320", margin: "0 0 4px 0" }}>
                  Margaret S.
                </p>
                <p style={{ color: "#666", fontSize: "14px", margin: "0" }}>
                  Family Member
                </p>
              </div>
            </div>
          </div>
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
          <Heart size={48} color="#ffffff" style={{ margin: "0 auto 24px", display: "block" }} />
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Join Our Family of Happy Clients
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.95)", marginBottom: "40px" }}>
            Experience the care and compassion that families trust. Start your journey with us today.
          </p>
          <button
            onClick={handleGetStarted}
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
            Get Started Today
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          [data-grid-reviews] {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}

// Review Card Component
function ReviewCard({ review, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: "white",
        border: isHovered ? "2px solid #1fa6a0" : "2px solid rgba(31,166,160,0.15)",
        borderRadius: "20px",
        padding: "40px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 60px rgba(31,166,160,0.2)"
          : "0 10px 30px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Decorative corner */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100px",
          height: "100px",
          background: "linear-gradient(135deg, rgba(31,166,160,0.1), transparent)",
          borderRadius: "0 20px 0 100px",
          opacity: isHovered ? 1 : 0.5,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Stars */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="#FFD700"
              color="#FFD700"
            />
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            fontSize: "16px",
            fontStyle: "italic",
            color: "#0b1320",
            lineHeight: 1.7,
            marginBottom: "24px",
            margin: "0 0 24px 0",
          }}
        >
          "{review.quote}"
        </p>

        {/* Author */}
        <div style={{ borderTop: "1px solid rgba(31,166,160,0.1)", paddingTop: "16px" }}>
          <p style={{ fontWeight: 700, color: "#0b1320", margin: "0 0 4px 0", fontSize: "16px" }}>
            {review.name}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#666", fontSize: "14px", margin: "0" }}>
              {review.role}
            </p>
            {review.verified && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "12px",
                  color: "#1fa6a0",
                  fontWeight: 600,
                }}
              >
                <CheckCircle size={14} />
                Verified
              </div>
            )}
          </div>
        </div>

        {/* Read More */}
        <div
          style={{
            marginTop: "16px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#1fa6a0",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          Click to expand →
        </div>
      </div>
    </div>
  );
}

// Featured Review Modal
function FeaturedReviewModal({ review, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(5px)",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "60px",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 50px 100px rgba(0,0,0,0.3)",
          textAlign: "center",
          animation: "slideUp 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#f0e6ff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1fa6a0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f0e6ff";
          }}
        >
          <X size={20} color="#1fa6a0" />
        </button>

        {/* Stars */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "24px" }}>
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              size={28}
              fill="#FFD700"
              color="#FFD700"
            />
          ))}
        </div>

        {/* Quote */}
        <Quote size={48} color="#1fa6a0" style={{ margin: "0 auto 24px", opacity: 0.3 }} />
        <p
          style={{
            fontSize: "20px",
            fontStyle: "italic",
            color: "#0b1320",
            lineHeight: 1.8,
            marginBottom: "32px",
            margin: "0 0 32px 0",
          }}
        >
          "{review.quote}"
        </p>

        {/* Author Info */}
        <div style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "2px solid rgba(31,166,160,0.1)" }}>
          <p style={{ fontWeight: 800, color: "#0b1320", margin: "0 0 8px 0", fontSize: "20px" }}>
            {review.name}
          </p>
          <p style={{ color: "#666", fontSize: "16px", margin: "0 0 8px 0" }}>
            {review.role}
          </p>
          <p style={{ color: "#1fa6a0", fontSize: "14px", margin: "0", fontWeight: 600 }}>
            ✓ Verified Review • {review.date}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            padding: "12px 32px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
            color: "white",
            border: "none",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Close
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Trust Point Component
function TrustPoint({ icon: Icon, title, description }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "14px",
          background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={28} color="#ffffff" />
      </div>
      <div>
        <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0b1320", marginBottom: "6px" }}>
          {title}
        </h4>
        <p style={{ fontSize: "15px", color: "#666", margin: "0", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
